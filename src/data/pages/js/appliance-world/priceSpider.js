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
        }
    ],
    tags: ['website-build']
}