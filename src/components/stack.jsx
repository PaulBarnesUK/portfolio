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
            const technologies = stack.technologies.map((technology, index) => {
                return (
                    <div className="panel__listItem" key={index}>
                        {technology.main}
                        {technology.sub && (
                            <div className="panel__listItem-sub">
                                {technology.sub}
                            </div>
                        )}
                    </div>
                )
            })

            return (
                <div className="panel" key={index}>
                    <div className="panel__content">
                        <div className="panel__icon" dangerouslySetInnerHTML={stack.icon} />
                        <h3 className="panel__title">
                            {stack.title}
                        </h3>
                        <div className="panel__list">
                            {technologies}
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