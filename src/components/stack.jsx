import React from 'react'
import stacksData from '../data/stack.js'
import { TimelineMax } from 'gsap'

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

        animation.to('#computer-header', 1.5, {
            strokeDashoffset: 0
        })
        .staggerTo('.computer-line', 0.7, {
            strokeDashoffset: 0
        }, 0.5, '-=0.5')
    }

    componentDidMount() {
        this.animateBackendIcon()
        this.animateFrontendIcon()
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