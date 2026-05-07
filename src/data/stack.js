import computerSvg from "./svgData/computer";
import webSvg from "./svgData/web";
import settingsSvg from "./svgData/settings";

export default [
  {
    title: "Product",
    icon: computerSvg,
    technologies: [
      {
        main: "TypeScript",
      },
      {
        main: "React",
      },
      {
        main: "Next.js",
      },
      {
        main: "Node.js",
      },
      {
        main: "PostgreSQL",
      },
    ],
  },
  {
    title: "AI/ML",
    icon: webSvg,
    technologies: [
      {
        main: "Python",
      },
      {
        main: "OpenAI API",
      },
      {
        main: "Scikit-learn",
      },
      {
        main: "Recsys",
      },
      {
        main: "Model Evaluation",
      },
    ],
  },
  {
    title: "Infra",
    icon: settingsSvg,
    technologies: [
      {
        main: "AWS",
      },
      {
        main: "Vercel",
      },
      {
        main: "Docker",
      },
      {
        main: "PostHog",
      },
      {
        main: "Serverless",
      },
    ],
  },
];
