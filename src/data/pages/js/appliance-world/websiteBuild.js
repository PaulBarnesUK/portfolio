import { bootstrap, css, html, javascript, jquery, zend, php } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/appliance-world-showcase.png'
import logo from '../../../../assets/images/appliance-world-logo.png'

export default {
    projectId: 3,
    client: {
        logo: {
            image: logo,
            alt: `Appliance World`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `Website Build`,
        copy: `Redesign and build of eCommerce website, built on Zend PHP Framework.`,
        cta: {
            href: `https://appliance-world.co.uk`,
            copy: `Visit Website`
        }
    },
    
    content: {
        copy: [
            `One of my first major projects at Appliance World was to perform a 
            total overhaul of the clunky, old, static website and replace it with a light, new, 
            responsive layout whilst maintaining branding and a simple user experience.`,
            `Appliance World's organic traffic rose by over 30% during a 6-month period due to 
            these changes. This was not only down to Google's preferred responsive layout, but also 
            due to a significant improvement in page load times thanks to the use of lightweight
            libraries and increased efficiency within the code.`
        ]
    },
    technologies: [
        {
            name: `CSS`,
            image: css
        },
        {
            name: `HTML`,
            image: html
        },
        {
            name: `Bootstrap`,
            image: bootstrap 
        },
        {
            name: `JavaScript`,
            image: javascript 
        },
        {
            name: `jQuery`,
            image: jquery 
        },
        {
            name: `Zend Framework`,
            image: zend
        },
        {
            name: `PHP`,
            image: php 
        }
    ],
    tags: ['appliance-world']
}