import { bootstrap, css, html, javascript, sass } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/oracle-freedom-infographics.png'
import logo from '../../../../assets/images/svg/oracle-logo-red.svg'

export default {
    projectId: 5,
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
        title: `Freedom Campaign Infographics`,
        copy: `Animated infographics, utilising the Greensock animation library.`
    },
    content: {
        copy: [
            `A series of animation-rich infographics for Oracle's "Freedom" awareness campaign. These were built with a custom static site generator utilising
            Handlebars.js for templating, and SVG animations powered by the Greensock JavaScript library.`
        ]
    },
    technologies: [
        {
            name: `JavaScript`,
            image: javascript 
        },
        {
            name: `Bootstrap`,
            image: bootstrap 
        },
        {
            name: `CSS`,
            image: css
        },
        {
            name: `HTML`,
            image: html
        },
        {
            name: `Sass`,
            image: sass
        }
    ],
    tags: ['oracle']
}