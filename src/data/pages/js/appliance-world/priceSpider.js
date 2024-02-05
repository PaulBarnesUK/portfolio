import { php, laravel } from '../../../svgData/technologies'
import svg from '../../../../assets/images/svg/price-crawler.svg'
import logo from '../../../../assets/images/appliance-world-logo.png'

export default {
    projectId: 4,
    client: {
        logo: {
            image: logo,
            alt: `Appliance World`
        }
    },
    intro: {
        image: {
            src: svg,
            alt: ``,
        },
        title: `Price Spider`,
        copy: `Autonomous web crawler built on the Laravel PHP framework. Basic command-line interface
        for ad-hoc data extraction where required.`
    },
    content: {
        copy: [
            `After having tried several off-the-shelf price crawler solutions, Appliance World had not found
            any that they had found suitable. I was tasked with creating a bespoke solution, tailored to the business' needs.
            First implemented in December 2015, the data harvested by the price spider is still used daily to inform business decisions
            and set product prices.`
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
        }
    ],
    tags: ['appliance-world', 'laravel']
}