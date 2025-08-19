import React from 'react'
import { graphql, Link } from 'gatsby'
import { TimelineMax } from 'gsap'

import Layout from '../layouts'
import { Head as DefaultHead } from '../layouts/head'

export function Head() {
  return DefaultHead({
    title: 'Blog - Paul Barnes',
    description: 'Thoughts on web development, technology, and my projects.'
  })
}

class BlogPage extends React.Component {
  animate() {
    const timeline = new TimelineMax()

    timeline.set('.fade-in', {
      y: 50
    })
    .staggerTo('.fade-in', 1, {
      opacity: 1,
      y: 0
    }, 0.1)
  }

  componentDidMount() {
    this.animate()
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <div className="blog">
          <div className="container">
            <section className="section section--standard">
              <div className="section__content section__content--standard">
                <h1 className="section__title fade-in">Blog</h1>
                <div className="section__copy fade-in">
                  <p>Thoughts on web development, technology, and my projects.</p>
                </div>
              </div>
            </section>

            <section className="section section--standard">
              <div className="section__content section__content--standard">
                {posts.map(({ node }, index) => (
                  <article key={node.id} className="blog-post-preview fade-in">
                    <h2 className="blog-post-preview__title">
                      <Link to={`/blog/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <div className="blog-post-preview__meta">
                      <time dateTime={node.frontmatter.date}>
                        {new Date(node.frontmatter.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {node.frontmatter.tags && (
                        <div className="blog-post-preview__tags">
                          {node.frontmatter.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="blog-post-preview__excerpt">
                      {node.frontmatter.excerpt || node.excerpt}
                    </div>
                    <Link to={`/blog/${node.frontmatter.slug}`} className="blog-post-preview__link">
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date
            slug
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default BlogPage