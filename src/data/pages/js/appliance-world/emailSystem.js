import { php, laravel, html } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/appliance-world-email-marketing-system.png'
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
        title: `Email Marketing System`,
        copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
        cta: {
            href: `https://appliance-world.co.uk`,
            copy: `Visit Website`
        }
    },
    content: {
        copy: [
            `No ludus eripuit duo. Ad latine diceret expetendis qui, sed feugiat eruditi conceptam ne. Mea agam labitur forensibus an, per putant tibique conceptam an, aeque ornatus quaerendum ut pro. Nibh choro numquam sea ex. Ut animal vidisse quo, sit idque libris patrioque cu.`,
            `Eu sit legendos sensibus, purto nullam ex pro. Cu quas inani possit cum, id quo ridens utroque volumus. Mel case nominati id. Quo suas constituto ut, sed illud augue accusam an. Decore offendit vulputate in eos.`
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
        }
    ],
    tags: ['website-build']
}