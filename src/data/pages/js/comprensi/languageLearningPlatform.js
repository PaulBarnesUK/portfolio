import { react, typescript, nextjs, python, aws, vercel, openai, nodejs } from '../../../svgData/technologies'
import showcase from '../../../../assets/images/comprensi-showcase.png'
import logo from '../../../../assets/images/comprensi-logo.png'

export default {
    projectId: 12,
    client: {
        logo: {
            image: logo,
            alt: `Comprensi`
        }
    },
    intro: {
        image: {
            src: showcase,
            alt: ``,
        },
        title: `AI Language Learning Platform`,
        copy: `A solo startup endeavour, Comprensi is a language learning platform that utilises proprietary ML models to perform language difficulty prediction. Built with Next.js on serverless AWS infrastructure.`,
        cta: {
            href: `https://www.comprensi.com`,
            copy: `Visit Website`
        }
    },
    content: {
        copy: [
            `Comprensi curates internet content and uses machine learning to predict its difficulty in a language learning context. This provides language learners with a 'lens' to filter and focus on material that matches their proficiency.`,
            `As a solo startup endeavour, I am responsible for everything - from dataset curation to model training, from design to frontend implementation, from building the backend to infrastructure design and deployment.`,
            `The model used for language difficulty prediction is an ensemble model combining Logistic Regression, Random Forest and Gradient Boosting. The model was trained using the python library scikit-learn, achieving 
            an F1 Score of 74.53% (near human baseline performance of 75.79%), ensuring users consistently find content matched to their proficiency, as confirmed by user feedback.`,
            `Next.js powers the architecture, evolving from static AWS S3 deployment to server-side rendering on Vercel. Features a hybrid API: Next.js routes for authenticated requests, AWS serverless for public endpoints. 
            An AWS pipeline (S3, SQS, Lambda, DynamoDB) handles content ingestion with Python ML inference and ChatGPT for content categorisation, translated titles/summaries, and semantic search.`
        ]
    },
    technologies: [
        { name: `Next.js`, image: nextjs },
        { name: `React`, image: react },
        { name: `TypeScript`, image: typescript },
        { name: `Python`, image: python },
        // { name: `Scikit-learn`, image: sklearn },
        { name: `AWS`, image: aws },
        { name: `Vercel`, image: vercel },
        { name: `Node.js`, image: nodejs },
        { name: `OpenAI API`, image: openai },
        // { name: `HTML`, image: html },
        // { name: `CSS`, image: css },
    ],
    tags: ['ai', 'ml', 'python', 'javascript']
}