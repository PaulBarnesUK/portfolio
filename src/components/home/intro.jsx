import React from "react";

class HomeIntro extends React.Component {
  render() {
    return (
      <section className="section section--bgColoured section--overlayed">
        <div className="container">
          <div className="section__content section__content--standard">
            <h2 className="section__title">About Me</h2>
            <div className="section__copy section__copy--alignLeft">
              <p>
                I&apos;ve been building for the web since around 2013, when I
                wrote some macros for World of Warcraft and realised I might
                actually enjoy this coding thing. Not long after, I broke
                production at a small family-run eCommerce company where I was
                meant to be working as an accountant. Good times.
              </p>

              <p>
                Somehow they let me carry on. I eventually moved fully into
                software development, working across frontend, backend,
                infrastructure, and product delivery.
              </p>

              <p>
                More recently, my work has shifted toward applied AI and machine
                learning: using models, data, and automation to solve real
                product problems.
              </p>

              <p>
                Most recently, I built Comprensi, a language-learning platform
                that predicts the difficulty of Spanish videos using human
                feedback and machine learning. I built the full system
                end-to-end: data collection, model training, ingestion
                pipelines, ML inference, recommendations, frontend, backend,
                infrastructure, analytics, and user feedback loops.
              </p>

              <p>
                I&apos;m looking for teams and businesses that need someone who
                can turn AI ideas into working product systems. If that sounds
                useful, let&apos;s talk.
              </p>
            </div>
            <h2 className="section__title">{this.props.myStackTitle}</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeIntro;
