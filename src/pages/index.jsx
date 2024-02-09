import React from 'react'
import { TimelineMax } from 'gsap';
import { graphql  } from 'gatsby';

// Components
import Layout from '../layouts';
import Hero from '../components/hero'
import HomeIntro from '../components/home/intro'
import RecentWork from '../components/recentWork'
import Stack from '../components/stack'
import Clients from '../components/clients'
import Portrait from '../components/portrait'
// import Testimonials from '../components/testimonials'
// import Cta from '../components/cta'

// Assets
import chevron from '../assets/images/svg/chevron.svg'
import "../assets/scss/style.scss";
import { Head as DefaultHead } from '../layouts/head';

// Data
import projects from '../data/projects'

export function Head() {

  return DefaultHead({})

}

class IndexPage extends React.Component {
  animate() {
    const timeline = new TimelineMax();

    timeline.set('.fade-in', {
      y: 50
    })
    .staggerTo('.fade-in', 1, {
      opacity: 1,
      y: 0
    }, 0.25)
    .to('.chevron', 0.7, {
      opacity: 1
    }, '+=0.5')
  }

  setupAnimation() {
    const img = document.querySelector('.portrait img');

    if (img.complete) {
      this.animate()
    } else {
      img.addEventListener('load', this.animate)
    }
  }

  componentDidMount() {
    this.setupAnimation()
  }

  render() {
    const data = this.props.data.dataJson

    return (
      <Layout>
        <div className="index">
          <Hero>
            <Portrait />
            <section className="section section--noPadding">
              <div className="section__content section__content--standard">
                <h1 className="section__title fade-in">
                  {data.heroSection.title}
                </h1>
                <div className="section__copy fade-in">
                  {data.heroSection.copy}
                </div>
              </div>
            </section>
            <div className="chevron">
              <img src={chevron} alt="Read More" />
            </div>
          </Hero>
          <HomeIntro title={data.introSection.title} copy={data.introSection.copy} myStackTitle={data.introSection.myStack.title} />
          <Stack />
          <RecentWork projects={projects.filter(project => project.featured).slice(0, 3)} title={data.recentWorkSection.title} />
          {/* <Testimonials />
          <Cta /> */}
          <Clients title={data.clientsSection.title} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query HomeQuery {
    dataJson {
      heroSection {
        title
        copy
      }
      introSection {
        title
        copy
        myStack {
          title
        }
      }
      recentWorkSection {
        title
      }
      clientsSection {
        title
      }
    }
  }
`

export default IndexPage