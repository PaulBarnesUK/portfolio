import React from 'react'
import Link from 'gatsby-link'

// Components
import Hero from '../components/hero'
import HomeIntro from '../components/home/intro'
import RecentWork from '../components/recentWork'
import Stack from '../components/stack'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Clients from '../components/clients'

// Assets
import portraitImage from '../assets/images/profile.png'
import chevron from '../assets/images/svg/chevron.svg'

const IndexPage = ({data: { dataJson: data }}) => (
  <div className="index">
    <Hero>
      <div className="portrait">
        <img src={portraitImage} alt="test"/>
      </div>
      <section className="section section--noPadding">
        <div className="section__content section__content--standard">
          <h1 className="section__title">
            {data.heroSection.title}
          </h1>
          <div className="section__copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure amet, inventore ab sint praesentium velit quibusdam, id consectetur, ducimus porro labore consequatur? Laudantium, sed fugiat. Numquam nemo velit soluta?
          </div>
        </div>
      </section>
      <div className="chevron">
        <img src={chevron} alt="Read More"/>
      </div>
    </Hero>
    <HomeIntro title={data.introSection.title} copy={data.introSection.copy} myStackTitle={data.introSection.myStack.title} />
    <Stack />
    <RecentWork title={data.recentWorkSection.title} />
    <Testimonials />
    <Cta />
    <Clients title={data.clientsSection.title} />
  </div>
)

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