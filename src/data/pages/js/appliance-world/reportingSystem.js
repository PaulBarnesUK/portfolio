import { php, laravel, html, css, bootstrap, javascript, jquery } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/appliance-world-reporting-system.png'
import logo from '../../../../assets/images/appliance-world-logo.png'

export default {
    projectId: 6,
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
        title: `Reporting System`,
        copy: `Built with the Laravel PHP framework to fulfil requirements not met by Appliance World's existing ERP system`
    },
    content: {
        copy: [
            `The reporting system offers important insights for management, as well as improving workflows for the sales, customer service and marketing staff by providing an easy to use
            system to manage callbacks, delivery lead times and online assets.`,
            `As with all of my work, all pages of the reporting system were fully responsive and compatible across all browsers. Out-of-the-box Boostrap 3 was used for a simple, yet effective, UI.`
        ]
    },
    technologies: [
        {
            name: `PHP`,
            image: php 
        },
        {
            name: `Laravel`,
            image: laravel
        },
        {
            name: `HTML`,
            image: html
        },
        {
            name: `CSS`,
            image: css
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
    ],
    tags: ['appliance-world', 'laravel']
}