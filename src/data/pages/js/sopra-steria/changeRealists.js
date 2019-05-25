import { javascript, sass, vue } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/sopra-steria-change-realists.png'
import logo from '../../../../assets/images/svg/sopra-steria-logo.svg'

export default {
    projectId: 9,
    client: {
        logo: {
            image: logo,
            alt: `Sopra Steria`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `Sopra Steria: Change Realists`,
        copy: `Dynamic landing page, built with static site generator Gridsome (Powered by Vue.js)`,
        cta: {
            href: `https://changerealists.com`,
            copy: `View Online`
        }
    },
    content: {
        copy: [
            `As part of MOI Global's marketing campaign "The Change Realists", Sopra Steria required a 
            dynamic landing page which changed based on how the user had reached the page. I used 
            the new static generator for Vue.js, "Gridsome", for this.`,
            `Similar to Nuxt and Gatsby (React static site generator), 
            this enabled all the benefits of a JavaScript frontend framework, while still maintaining
            all the SEO benefits of a static website, along with common performance techniques such as 
            lazily loaded images and code splitting`,
            `As one of the main goals of the campaign was to generate leads for the client, a gating mechanism was 
            implemented to capture user information prior to unlocking the landing page's content. This meant integrating 
            with APIs such as TypeForm and Eloqua.`
        ]
    },
    technologies: [
        {
            name: `Vue`,
            image: vue 
        },
        {
            name: `JavaScript`,
            image: javascript 
        },
        {
            name: `Sass`,
            image: sass
        }
    ],
    tags: ['sopra-steria', 'spa', 'vue']
}