# Portfolio

Gatsby portfolio site deployed as a static website to AWS S3.

## Development

```shell
npm install
npm run develop
```

The local development server runs at `http://localhost:8000`.

## Build

```shell
npm run build
```

This generates the production site in `public/`.

## Deploy

```shell
npm run deploy
```

The deploy script builds the site first, then syncs `public/` to the
`www.paul-barnes.me.uk` S3 bucket.

The S3 sync script is configured to:

- remove S3 objects that no longer exist in the latest build
- omit per-object ACLs, so it works with buckets that have S3 Object Ownership / ACLs disabled
- apply Gatsby cache-control headers for HTML, JSON, CSS, JS, and static assets

Deployment uses the normal AWS SDK credential chain, so make sure your local AWS
profile or environment variables can write to the bucket before running it. The
active credentials need `s3:ListBucket`, `s3:PutObject`, and `s3:DeleteObject`.
If you use a named AWS profile, run `AWS_PROFILE=your-profile npm run deploy`.
