import { vue, javascript, sass, typescript } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/on-website.webp'
import logo from '../../../../assets/images/svg/on-logo-black.svg'

export default {
    projectId: 11,
    client: {
        logo: {
            image: logo,
            alt: `Optimum Nutrition`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: `Optimum Nutrition website shown across Desktop, Laptop, Tablet and Mobile screens.`,
        },
        title: `eCommerce Website Build`,
        copy: `Frontend build for Optimum Nutrition, one of the largest sports nutrition brands in the world.`,
        cta: {
            href: `https://www.optimumnutrition.com/en-gb`,
            copy: `Visit Website`
        }
    },
    content: {
        copy: [
            `Optimum Nutrition is probably the biggest sports nutrition brand in the world, generating over $1 billion in annual revenue. I'm a bit of a health and fitness nut and so this was a very 
            exciting project for me to be a part of, both personally and professionally.`,
            `The volume of traffic that Optimum Nutrition and it's sister brands receive is astronomical, there is no place for bad code to hide. With such a volume of traffic, 
            all edge cases must be considered and code thoroughly unit-tested before anything can leave the development stage.`,
            `Being part of the Glanbia SAP eCommerce platform along with other brands such as Body & Fit and LevelUp, I worked on many facets of this site including implementing
            major new features, new payment providers, performance optimisation and rebranding.`,
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