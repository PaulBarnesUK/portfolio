import { vue, javascript, sass, typescript } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/baf-website.webp'
import logo from '../../../../assets/images/svg/baf-logo-black.svg'

export default {
    projectId: 10,
    client: {
        logo: {
            image: logo,
            alt: `Body & Fit`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: `Body & Fit website shown across Desktop, Laptop, Tablet and Mobile screens.`,
        },
        title: `eCommerce Website Build`,
        copy: `Frontend build for largest sports nutrition site in the Netherlands.`,
        cta: {
            href: `https://www.bodyandfit.com/en-gb`,
            copy: `Visit Website`
        }
    },
    content: {
        copy: [
            `Brought onto the project in the latter stages of a re-platforming from Magento to SAP Hybris, I had a plethora of work to do for the Body & Fit brand.
            This included implementation of new features, new payment providers, full-site re-brands as well as 
            leading the re-architecture of the frontend codebase to significantly improve performance.`,
            `Being part of the Glanbia SAP eCommerce platform along with other brands such as OptimumNutrition and LevelUp, the codebase here was huge and therefore maintainability 
            through logical file structure and clean, well-tested, code was a priority.`,
            `The frontend was served by SAP Hybris' JSP templating system with vanilla JavaScript/TypeScript added for reactivity. Vue and Vuex microfrontends 
            were used for several parts of the site that had a large amount of reactivity.`
        ]
    },
    technologies: [
        {
            name: `JavaScript`,
            image: javascript 
        },
        {
            name: `TypeScript`,
            image: typescript
        },
        {
            name: `Vue`,
            image: vue
        },
        {
            name: `Sass`,
            image: sass
        }
    ],
    tags: ['glanbia']
}