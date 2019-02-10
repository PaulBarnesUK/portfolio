import { bootstrap, css, html, javascript, sass, vue } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/sage-payroll-solvers-tool.png'
import logo from '../../../../assets/images/svg/sage-logo-green.svg'

export default {
    projectId: 2,
    client: {
        logo: {
            image: logo,
            alt: `Sage`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `Sage Payroll Solvers Tool`,
        copy: `Single Page Application, built with Vue.js`,
        cta: {
            href: `http://payrollsolver.dev-moi.co.uk`,
            copy: `View Online`
        }
    },
    content: {
        copy: [
            `Built with Vue.js, with VueX for state management. The payroll solvers quiz was built as part
            of a marketing campaign for Sage and was designed to help payroll professionals discover their
            payroll needs, and how Sage could help them. Data capture was implemented and acted as a gating
            mechanism for the user's quiz results.`
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
            name: `Bootstrap`,
            image: bootstrap 
        },
        {
            name: `Sass`,
            image: sass
        }
    ],
    tags: ['sage', 'spa', 'vue']
}