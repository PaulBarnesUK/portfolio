import computerSvg from './svgData/computer'
import webSvg from './svgData/web'
import settingsSvg from './svgData/settings'

export default [
    {
        title: "Frontend",
        icon: computerSvg,
        technologies: [
            {
                main: "JavaScript (ES6+)",
            },
            {
                main: "TypeScript",
            },
            {
                main: "React"
            },
            {
                main: "Vue.js"
            },
            {
                main: "Next.js"
            },
            {
                main: "State Management",
                sub: "Redux, Vuex"
            },
            {
                main: "Testing",
                sub: "Jest, Vue Test Utils"
            }
        ],
    },
    {
        title: "Backend",
        icon: webSvg,
        technologies: [
            {
                main: "Node.js",
                sub: "Express.js"
            },
            {
                main: "AWS",
                sub: "Lambda, EC2, DynamoDB, S3"
            },
            {
                main: "Databases",
                sub: "SQL, NoSQL"
            },
            {
                main: "RESTful APIs",
            }
        ],
    },
    {
        title: "Tooling",
        icon: settingsSvg,
        technologies: [
            {
                main: "Git",
            },
            {
                main: "CI/CD",
                sub: "Jenkins, GitHub Actions"
            },
            {
                main: "Build Tools",
                sub: "Webpack, Grunt"
            },
            {
                main: "Package Managers",
                sub: "NPM, Yarn"
            },
            {
                main: "VS Code",
            }
        ],
    },
];