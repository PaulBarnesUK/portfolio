import { bootstrap, css, html, javascript, sass, vue } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/oracle-internship-experience-showcase.png'
import logo from '../../../../assets/images/svg/oracle-logo-red.svg'

export default {
    projectId: 1,
    client: {
        logo: {
            image: logo,
            alt: `Oracle`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `Internship Experience`,
        copy: `Single Page Application, built with Vue.js`,
        cta: {
            href: `http://work.paul-barnes.me.uk/oracle/intern-experience`,
            copy: `View Experience`
        }
    },
    content: {
        copy: [
            `A very successful campaign for Oracle, the Internship Experience was designed as an introduction to the company
            for Oracle's 2018 group of interns, and was sent out as part of each individual's starter pack. The feedback was resoundingly positive,
            so much so that they are planning on extending the experience to future internship programmes.`,
            `Each page was designed to be an engaging experience, with parallax backgrounds and dynamic animations breaking the mould of a standard web page.`,
            `This was built with the Vue.js Single Page Application JavaScript framework, with Vuex for state management, and utilised a basic Sass skeleton,
            based on Bootstrap's grid library.`
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
            name: `Bootstrap`,
            image: bootstrap 
        },
        {
            name: `Sass`,
            image: sass
        }
    ],
    tags: ['oracle', 'spa', 'vue']
}