import { php, javascript, sass, vue } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/journey-to-the-cloud.png'
import logo from '../../../../assets/images/svg/oracle-logo-red.svg'

export default {
    projectId: 7,
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
        title: `Journey to the Cloud`,
        copy: `Single Page Application, built with Vue.js for Oracle OpenWorld.`,
        // cta: {
        //     href: `http://work.paul-barnes.me.uk/oracle/journey-to-the-cloud/`,
        //     copy: `View Online`
        // }
    },
    content: {
        copy: [
            `Built for Oracle OpenWorld, this was an experience designed to raise
            awareness of Oracle's cloud platform in the form of a Tinder-like swipe application, displayed 
            on several large touchscreen kiosks.`,
            `Delegates were asked a series of yes/no questions to determine their progress in migrating their
            business to the cloud whilst the application relayed answers to a PHP-based API so that Oracle could
            analyse the data post event.`
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
            name: `Sass`,
            image: sass
        },
        {
            name: "PHP",
            image: php
        }
    ],
    tags: ['oracle', 'spa', 'vue']
}