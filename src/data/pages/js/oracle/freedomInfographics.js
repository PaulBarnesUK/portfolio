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
        title: `Infographics`,
        copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`
    },
    content: {
        copy: [
            `One of my first major projects at Appliance World was to perform a 
            total overhaul on the clunky, old, static website and replace it with a light, new, 
            responsive layout whilst maintaining branding and a simple user experience.`,
            `Appliance World's organic traffic rose by over 30% during a 6-month period due to 
            these changes. This was not only down to Google's preferred responsive layout, but also 
            due to a significant improvement in page load times thanks to the use of lightweight
            libraries and increased efficiency within the code.`
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