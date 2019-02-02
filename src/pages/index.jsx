import React from 'react'
import { TimelineMax } from 'gsap';

// Components
import Hero from '../components/hero'
import HomeIntro from '../components/home/intro'
import RecentWork from '../components/recentWork'
import Stack from '../components/stack'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Clients from '../components/clients'
import Portrait from './../components/portrait'

// Assets
import chevron from '../assets/images/svg/chevron.svg'

// Data
import projects from '../data/projects'

class IndexPage extends React.Component {
  animate() {
    const img = document.querySelector('.portrait img');

    img.addEventListener('load', () => {
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
    })
  }

  componentDidMount() {
    this.animate()
  }

  render() {
    const data = this.props.data.dataJson

    return (
      <div className="index">
        <Hero>
          <Portrait />
          <section className="section section--noPadding">
            <div className="section__content section__content--standard">
              <h1 className="section__title fade-in">
                {data.heroSection.title}
              </h1>
              <div className="section__copy fade-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure amet, inventore ab sint praesentium velit quibusdam, id consectetur, ducimus porro labore consequatur? Laudantium, sed fugiat. Numquam nemo velit soluta?
              </div>
            </div>
          </section>
          <div className="chevron">
            <img src={chevron} alt="Read More" />
          </div>
        </Hero>
        <HomeIntro title={data.introSection.title} copy={data.introSection.copy} myStackTitle={data.introSection.myStack.title} />
        <Stack />
        <RecentWork projects={projects.slice(0, 3)} title={data.recentWorkSection.title} />
        <Testimonials />
        <Cta />
        <Clients title={data.clientsSection.title} />
      </div>
    )
  }
}

export const query = graphql`
  query HomeQuery {
    dataJson {
      heroSection {
        title
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