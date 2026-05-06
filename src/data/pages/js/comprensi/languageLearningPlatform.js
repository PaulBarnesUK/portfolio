import {
  react,
  typescript,
  nextjs,
  python,
  aws,
  vercel,
  openai,
  nodejs,
} from "../../../svgData/technologies";
import showcase from "../../../../assets/images/comprensi-showcase.png";
import logo from "../../../../assets/images/svg/comprensi-logo-black.svg";

export default {
  projectId: 12,
  client: {
    logo: {
      image: logo,
      alt: `Comprensi`,
    },
  },
  intro: {
    image: {
      src: showcase,
      alt: `Comprensi language learning platform showcase`,
    },
    title: `Machine Learning Product for Language Learners`,
    copy: `Comprensi is a language-learning platform that helps learners find Spanish videos at the right difficulty level. I designed and built the product end-to-end, including the content ingestion pipeline, difficulty prediction model, recommendation logic, frontend, backend, and infrastructure.`,
    cta: {
      href: `https://www.comprensi.com`,
      copy: `Visit Website`,
    },
  },
  content: {
    copy: [
      `Comprensi solves a practical discovery problem for comprehensible input learners: YouTube has millions of Spanish videos, but learners need to know which ones they can actually understand. The platform uses human feedback and machine learning to estimate video difficulty, then matches content to each learner’s current level.`,

      `I built the difficulty system from first principles. Learners provided pairwise comparisons between videos, those comparisons were converted into continuous difficulty ratings using TrueSkill, and a supervised regression model was trained to predict difficulty for new videos from transcript-derived features such as MATTR, vocabulary difficulty, unknown word ratio, and words per minute.`,

      `The final model used a stacking regressor combining linear regression and random forest regression to predict a TrueSkill-derived difficulty score. The model achieved an R² of 0.837 with an RMSE of 5.99 on a 0–50 difficulty scale, which was accurate enough to power level-based ranking, filtering, and recommendations in the product.`,

      `The model was integrated into a production content pipeline. New Spanish videos are ingested from YouTube, transcripts are processed, features are computed, difficulty is predicted, and videos are matched to users based on their estimated Spanish level. This turns raw internet content into a navigable learning library tailored to each user.`,

      `As a solo developer, I was responsible for the full system: product design, frontend implementation, backend APIs, data modelling, ML experimentation, model deployment, content ingestion, infrastructure, analytics, and user feedback loops.`,
    ],
  },
  technologies: [
    { name: `Next.js`, image: nextjs },
    { name: `React`, image: react },
    { name: `TypeScript`, image: typescript },
    { name: `Python`, image: python },
    { name: `AWS`, image: aws },
    { name: `Vercel`, image: vercel },
    { name: `Node.js`, image: nodejs },
    { name: `OpenAI API`, image: openai },
  ],
  tags: ["ai", "ml", "python", "javascript"],
};
