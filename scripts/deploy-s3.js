#!/usr/bin/env node

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const {
  DeleteObjectsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} = require("@aws-sdk/client-s3");

const bucketName = process.env.S3_BUCKET || "www.paul-barnes.me.uk";
const bucketPrefix = normalizePrefix(process.env.S3_PREFIX || "");
const publicDir = path.resolve(__dirname, "..", "public");
const parallelLimit = Number(process.env.S3_DEPLOY_PARALLEL_LIMIT || 10);

if (!fs.existsSync(publicDir)) {
  console.error("Build output not found. Run `npm run build` before deploying.");
  process.exit(1);
}

const s3 = new S3Client({
  region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1",
});

main().catch((error) => {
  console.error(`\nDeploy failed: ${error.code || error.name || "Error"}`);
  console.error(error.message);

  if (error.code === "AccessDenied") {
    console.error(
      `\nThe active AWS credentials were denied during: ${error.deployStep || "S3 sync"}.`
    );
    console.error(
      "They need s3:ListBucket on the bucket plus s3:PutObject and s3:DeleteObject on the bucket objects."
    );
  }

  process.exit(1);
});

async function main() {
  const files = getFiles(publicDir);
  const localObjects = new Map(
    files.map((filePath) => {
      const relativePath = path.relative(publicDir, filePath).split(path.sep).join("/");
      const key = withPrefix(relativePath);
      return [key, { filePath, key }];
    })
  );

  const deployTarget = `s3://${bucketName}${bucketPrefix ? `/${bucketPrefix}` : ""}`;
  console.log(`Deploying ${files.length} files to ${deployTarget}`);

  const remoteObjects = await listRemoteObjects();
  const remoteETags = new Map(
    remoteObjects.map((object) => [object.Key, trimETag(object.ETag)])
  );

  const uploads = [...localObjects.values()].filter(({ filePath, key }) => {
    const localETag = md5(filePath);
    return remoteETags.get(key) !== localETag;
  });

  const deletes = remoteObjects
    .map((object) => object.Key)
    .filter((key) => key && !localObjects.has(key))
    .map((key) => ({ Key: key }));

  await runLimited(uploads, parallelLimit, uploadObject);
  await deleteObjects(deletes);

  console.log(`Synced ${uploads.length} changed files and removed ${deletes.length} stale files.`);
}

function getFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return getFiles(entryPath);
    }
    return entry.isFile() ? [entryPath] : [];
  });
}

async function listRemoteObjects() {
  const objects = [];
  let ContinuationToken;

  do {
    const response = await withDeployStep("ListBucket", () =>
      s3.send(
        new ListObjectsV2Command({
          Bucket: bucketName,
          Prefix: bucketPrefix,
          ContinuationToken,
        })
      )
    );

    objects.push(...(response.Contents || []));
    ContinuationToken = response.NextContinuationToken;
  } while (ContinuationToken);

  return objects;
}

async function uploadObject({ filePath, key }) {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fs.createReadStream(filePath),
    ContentType: contentType(filePath),
  };

  const cacheControl = cacheControlForKey(key);
  if (cacheControl) {
    params.CacheControl = cacheControl;
  }

  await withDeployStep(`PutObject ${key}`, () => s3.send(new PutObjectCommand(params)));
  console.log(`Uploaded ${key}`);
}

async function deleteObjects(objects) {
  for (let index = 0; index < objects.length; index += 1000) {
    const chunk = objects.slice(index, index + 1000);
    if (!chunk.length) {
      continue;
    }

    await withDeployStep(`DeleteObjects ${index + 1}-${index + chunk.length}`, () =>
      s3.send(
        new DeleteObjectsCommand({
          Bucket: bucketName,
          Delete: {
            Objects: chunk,
            Quiet: true,
          },
        })
      )
    );

    console.log(`Removed ${chunk.length} stale files`);
  }
}

async function withDeployStep(deployStep, operation) {
  try {
    return await operation();
  } catch (error) {
    error.deployStep = deployStep;
    throw error;
  }
}

async function runLimited(items, limit, worker) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      await worker(item);
    }
  });

  await Promise.all(workers);
}

function cacheControlForKey(key) {
  if (
    key.endsWith(".html") ||
    key.startsWith(withPrefix("page-data/")) ||
    key === withPrefix("sw.js")
  ) {
    return "public, max-age=0, must-revalidate";
  }

  if (
    key.includes("/static/") ||
    key.startsWith(withPrefix("static/")) ||
    key.endsWith(".js") ||
    key.endsWith(".css")
  ) {
    return "public, max-age=31536000, immutable";
  }

  return undefined;
}

function contentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return (
    {
      ".css": "text/css; charset=utf-8",
      ".eot": "application/vnd.ms-fontobject",
      ".gif": "image/gif",
      ".html": "text/html; charset=utf-8",
      ".ico": "image/x-icon",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".js": "application/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".map": "application/json; charset=utf-8",
      ".pdf": "application/pdf",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".ttf": "font/ttf",
      ".txt": "text/plain; charset=utf-8",
      ".webp": "image/webp",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
      ".xml": "application/xml; charset=utf-8",
    }[extension] || "application/octet-stream"
  );
}

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function trimETag(etag) {
  return etag ? etag.replace(/^"|"$/g, "") : undefined;
}

function normalizePrefix(prefix) {
  return prefix.replace(/^\/+|\/+$/g, "");
}

function withPrefix(key) {
  return bucketPrefix ? `${bucketPrefix}/${key}` : key;
}
