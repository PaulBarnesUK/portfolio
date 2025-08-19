import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-post.jsx")

  const result = await graphql(`
    query GetBlogPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = (result.data as any).allMarkdownRemark.edges

  posts.forEach(({ node }: any) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}