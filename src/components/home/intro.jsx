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
                        <div className="section__copy">
                            <p>
                                I have 8 years experience in web development, working in-house as well as with digital and creative agencies.
                            </p>
                            <p>
                                While I would consider myself primarily a frontend developer,
                                I really enjoy working across the entire stack to build software that solves real problems.
                            </p>
                            <p>
                                My preferred stack is typically Vue or React on the frontend and on the backend I use Node.js on serverless AWS infrastructure or PHP, where my
                                framework of choice would be Laravel.
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