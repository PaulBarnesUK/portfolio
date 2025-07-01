import { Link } from 'gatsby'
import React from 'react'

class HomeIntro extends React.Component {
    render() {
        return (
            <section className="section section--bgColoured section--overlayed">
                <div className="container">
                    <div className="section__content section__content--standard">
                    <h2 className="section__title">
                        About Me
                    </h2>
                    <div className="section__copy section__copy--alignLeft">
                        <p>
                            I&apos;ve been building for the web since around 2013, when I wrote some macros for World of Warcraft and realised I might actually enjoy this coding thing. Not long after, I broke production at a small family-run eCommerce company where I was meant to be working as an accountant. Good times.
                        </p>
                        <p>
                            Somehow they let me carry on, and I ended up building tools and systems that saved money and drove revenue. Some of them even worked. I fully moved out of finance in 2017 and into proper development roles, where I picked up a sense for clean UX, solid architecture, and code that could be trusted and scaled.
                        </p>
                        <p>
                            I&apos;ve had roles with different levels of freedom, and I&apos;ve learned a lot from all of them. But what I really love is solving real problems. Getting obsessed with a challenge and building something that works.
                        </p>
                        <p>
                            I went all in recently and built my own <Link className="link" to="/my-work/comprensi/language-learning-platform">solo startup</Link>. It felt ideal at first. But honestly, it&apos;s lonely. I realised a big part of what I enjoy is the collaboration. Building with others, sharing the highs and lows.
                        </p>
                        <p>
                            So that&apos;s what I&apos;m looking for now — early stage teams with smart people and a sense of purpose. If that&apos;s you, let&apos;s chat.
                        </p>
                    </div>
                        <h2 className="section__title">
                            {this.props.myStackTitle}
                        </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeIntro