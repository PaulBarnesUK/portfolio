import React from "react";
import { graphql, Link } from "gatsby";
import { TimelineMax } from "gsap";

import Layout from "../layouts";
import { Head as DefaultHead } from "../layouts/head";

export function Head() {
  return DefaultHead({
    title: "Blog - Paul Barnes",
    description:
      "Notes from the trenches of building, breaking, and occasionally shipping software.",
  });
}

class BlogPage extends React.Component {
  animate() {
    const timeline = new TimelineMax();

    timeline
      .set(".fade-in", {
        y: 50,
      })
      .to("h1.fade-in", 1, {
        opacity: 1,
        y: 0,
      })
      .to(
        ".section__copy.fade-in",
        1,
        {
          opacity: 1,
          y: 0,
        },
        "-=0.75"
      )
      .staggerTo(
        ".blog-post-card.fade-in",
        1,
        {
          opacity: 1,
          y: 0,
        },
        0.15,
        "-=0.75"
      );
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="blog">
          <section className="section section--blog">
            <div className="section__content section__content--standard">
              <h1 className="section__title fade-in">Blog</h1>
              <div className="section__copy section__copy--noMargin fade-in">
                <p>
                  Notes from the trenches of building, breaking, and
                  occasionally shipping software.
                </p>
              </div>
            </div>
          </section>

          <section className="section section--noTopPadding">
            <div className="container">
              <div className="blog-posts">
                {posts.map(({ node }, index) => (
                  <Link
                    to={`/blog/${node.frontmatter.slug}`}
                    className="blog-post-card fade-in"
                  >
                    <article key={node.id}>
                      {node.frontmatter.image ? (
                        <div className="blog-post-card__image">
                          <img
                            src={node.frontmatter.image}
                            alt={node.frontmatter.title}
                          />
                        </div>
                      ) : (
                        <div className="blog-post-card__placeholder">
                          Blog Post
                        </div>
                      )}
                      <div className="blog-post-card__content">
                        <div className="blog-post-card__tags">
                          {node.frontmatter.tags.join(", ")}
                        </div>
                        <h2 className="blog-post-card__title">
                          <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <div className="blog-post-card__meta">
                          <time
                            className="blog-post-card__date"
                            dateTime={node.frontmatter.date}
                          >
                            {new Date(node.frontmatter.date).toLocaleDateString(
                              "en-GB",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </time>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
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
            image
          }
        }
      }
    }
  }
`;

export default BlogPage;
