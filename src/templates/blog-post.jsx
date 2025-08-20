import React from 'react'
import { graphql, Link } from 'gatsby'
import { TimelineMax } from 'gsap'

import Layout from '../layouts'
import { Head as DefaultHead } from '../layouts/head'

export function Head({ data }) {
  const post = data.markdownRemark
  
  return DefaultHead({
    title: `${post.frontmatter.title} - Paul Barnes`,
    description: post.frontmatter.excerpt || post.excerpt
  })
}

class BlogPostTemplate extends React.Component {
  animate() {
    const timeline = new TimelineMax()

    timeline.set('.fade-in', {
      y: 50
    })
    .staggerTo('.fade-in', 1, {
      opacity: 1,
      y: 0
    }, 0.15)
  }

  componentDidMount() {
    this.animate()
  }

  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <div className="blog-post">
          <div className="container">
            <article className="section section--standard">
              <div className="section__content section__content--standard">
                <header className="blog-post__header fade-in">
                  <h1 className="section__title">{post.frontmatter.title}</h1>
                  <div className="blog-post__meta">
                    <time className="blog-post__date" dateTime={post.frontmatter.date}>
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    {post.frontmatter.tags && (
                      <div className="blog-post__tags">
                        {post.frontmatter.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </header>

                <div 
                  className="blog-post__content fade-in"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />

                <footer className="blog-post__footer fade-in">
                  <Link to="/blog" className="button">
                    ← Back to Blog
                  </Link>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        slug
        excerpt
        tags
      }
    }
  }
`

export default BlogPostTemplate