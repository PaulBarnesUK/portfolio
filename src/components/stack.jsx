import React from 'react'
import stacksData from '../data/stack.js'
import { TimelineMax, Back, Linear, Power1 } from 'gsap'

class Stack extends React.Component {
    animateBackendIcon() {
        const animation = new TimelineMax({
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        })

        animation.to('#backendBar', 1.5, {
            x: -275,
            ease: Power1.easeInOut
        }, 0)
        .to('#backendClipPathRect', 1.5, {
            x: -250,
            ease: Power1.easeInOut
        }, 0.05)
    }

    animateFrontendIcon() {
        const animation = new TimelineMax({
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        })

        animation.set('#computer-section', {
            visibility: 'visible',
            scale: 0,
            transformOrigin: '50% 50%'
        })
        .to('#computer-header', 1.5, {
            strokeDashoffset: 0
        })
        .to('#computer-section', 0.7, {
            scale: 1,
            ease: Back.easeOut
        }, '-=0.5')
        .staggerTo('.computer-line', 0.7, {
            strokeDashoffset: 0
        }, 0.5, '-=0.3')
    }

    animateToolingIcon() {
        const timeline = new TimelineMax({
            repeat: -1
        })

        timeline.set('#tooling #cog', {
            transformOrigin: '50% 50%'
        })
        .to('#tooling #cog', 5, {
            rotation: 360,
            ease: Linear.easeNone,
        })
    }

    componentDidMount() {
        this.animateBackendIcon()
        this.animateFrontendIcon()
        this.animateToolingIcon()
    }

    stacks() {
        return stacksData.map((stack, index) => {
            const languages = stack.languages.list.map((language, index) => {
                return (
                    <div className="panel__listItem" key={index}>
                        {language}
                    </div>
                )
            })

            const frameworks = stack.frameworks.list.map((framework, index) => {
                return (
                    <div className="panel__listItem" key={index}>
                        {framework}
                    </div>
                )
            })

            return (
                <div className="panel" key={index}>
                    <div className="panel__wrapper">
                        <div className="panel__icon" dangerouslySetInnerHTML={stack.icon}>
                        </div>
                        <h3 className="panel__title">
                            {stack.title}
                        </h3>
                        <h4 className="panel__subTitle">
                            {stack.languages.title}
                        </h4>
                        <div className="panel__list">
                            {languages}
                        </div>
                        <h4 className="panel__subTitle">
                            {stack.frameworks.title}
                        </h4>
                        <div className="panel__list">
                            {frameworks}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="stack">
                <div className="container">
                    <div className="row">
                        {this.stacks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Stack