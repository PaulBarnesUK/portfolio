import computerSvg from './svgData/computer'
import webSvg from './svgData/web'
import settingsSvg from './svgData/settings'

export default [
    {
        title: "Frontend",
        icon: computerSvg,
        languages: {
            title: "Languages:",
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Typescript"
            ]
        },
        frameworks: {
            title: "Frameworks:",
            list: [
                "Vue",
                "React",
                "Next.js"
            ]
        }
    },
    {
        title: "Backend",
        icon: webSvg,
        languages: {
            title: "Languages:",
            list: [
                "PHP",
                "Node.js",
                "SQL"
            ]
        },
        frameworks: {
            title: "Frameworks:",
            list: [
                "Laravel",
                "Express",
                "AWS"
            ]
        }
    },
    {
        title: "Tooling",
        icon: settingsSvg,
        languages: {
            title: "My setup:",
            list: [
                "Webpack",
                "Gulp",
                "Babel",
                "Sass",
                "NPM",
                "Composer",
                "Git",
                "VS Code"
            ]
        },
        frameworks: {
            title: "",
            list: []
        }
    }
]