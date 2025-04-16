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
                            I've been building things for the web since somewhere around 2013. I wrote a few macros to give me an edge in Word of Warcraft and thought I could try to do this coding thing professionally. Shortly after that I broke production for the first at the small family-run eCommerce retailer where I was, <i>supposed</i> to be, working as an accountant. Great times.
                        </p>
                        <p>
                            Since then, I have learned to not break production. Mostly. For some reason they actually let me carry on doing the development stuff, allowing me to build out whatever crazy ideas came into my head to save costs and increase revenue. Some of it actually worked.
                        </p>
                        <p>
                            I fully transitioned out of finance work (boring af ngl) and into professional development in 2017. I've since worked alongside brilliant designers, developing an intuition for good UX and elegant design, as well as some incredible engineers, who taught me an appreciation for well architected, well tested, readable code. Code that could be trusted. Code that scaled.
                        </p>
                        <p>
                            Those roles provided varying degrees of autonomy. I loved them all, and I learned so much from them all. But my true passion lies in using my creativity. In having a <i>real</i> problem to solve and unleashing the obsessive in me to come up with the solution and build it. That's where it's at.
                        </p>
                        <p>
                            I went all in on that recently and built my own <Link className="link" to="/my-work/comprensi/language-learning-platform">solo startup</Link>. Basically Nirvana for me, I thought. But they don't tell you how lonely that shit is. I realised that a big part of what I love about building is collaborating. Working towards a mutual goal, sharing the journey. I miss that.
                        </p>
                        <p>
                            So that's what I'm looking for now; early stage startups with smart people building with a purpose. If that sounds like your company, hit me up.
                        </p>
                        <p>
                            PS: If you've read this far, you probably have too much time on your hands. But you might be pleased to know that you've not just read some AI-generated drivel; another human actually wrote this. Because fuck that shit. A portfolio should be personal, not that shallow middle-of-the-road waffle you get out of LLMs.
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