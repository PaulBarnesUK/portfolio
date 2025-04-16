import computerSvg from './svgData/computer'
import webSvg from './svgData/web'
import settingsSvg from './svgData/settings'

export default [
    {
        title: "Frontend",
        icon: computerSvg,
        technologies: [
            {
                main: "JavaScript",
            },
            {
                main: "TypeScript",
            },
            {
                main: "React"
            },
            {
                main: "Vue"
            },
            {
                main: "Next.js"
            }
        ],
    },
    {
        title: "Backend",
        icon: webSvg,
        technologies: [
            {
                main: "Node.js",
            },
            {
                main: "Python",
            },
            {
                main: "PHP",
            },
            {
                main: "Express"
            },
            {
                main: "Laravel"
            }
        ],
    },
    {
        title: "Tools & Infra",
        icon: settingsSvg,
        technologies: [
            {
                main: "Git",
            },
            {
                main: "CI/CD"
            },
            {
                main: "AWS"
            },
            {
                main: "Cloudflare"
            },
            {
                main: "Serverless"
            }
        ],
    },
];