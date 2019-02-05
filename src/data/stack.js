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
                "JavaScript"
            ]
        },
        frameworks: {
            title: "Frameworks:",
            list: [
                "Bootstrap",
                "jQuery",
                "Vue",
                "React"
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
                "MySQL"
            ]
        },
        frameworks: {
            title: "Frameworks:",
            list: [
                "Laravel",
                "Express",
                "Wordpress"
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