import { bootstrap, wordpress, javascript, sass, php, jquery } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/quest-partnership-showcase.png'
import logo from '../../../../assets/images/quest-partnership-logo.jpg'

export default {
    projectId: 8,
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
            copy: `View Online`
        }
    },
    content: {
        copy: [
            `This build was outsourced to me by Evaporate, Swindon who provided me with a design and
            preferred tech stack.`,
            `Aside from being a typical eCommerce build, the website was built as a series
            of modules, enabling the client to build their own custom pages from scratch, using the
            pre-built modules.`
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
            name: 'jquery',
            image: jquery
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