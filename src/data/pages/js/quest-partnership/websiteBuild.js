import { bootstrap, wordpress, javascript, sass, php } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/quest-partnership-showcase.png'
import logo from '../../../../assets/images/quest-partnership-logo.jpg'

export default {
    projectId: 7,
    client: {
        logo: {
            image: logo,
            alt: `Quest Partnership`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `eCommerce Website`,
        copy: `Built with WooCommerce, on top of Wordpress.`,
        cta: {
            href: `https://questpartnership.co.uk/`,
            copy: `View Website`
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
            name: `Wordpress`,
            image: wordpress 
        },
        {
            name: `PHP`,
            image: php 
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
    tags: ['quest-partnership', 'ecommerce', 'php', 'woocommerce', 'wordpress']
}