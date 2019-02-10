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
                                I have 4 years experience in web development,
                                ranging from in-house work for an eCommerce business
                                to working with digital and creative agencies.
                            </p>
                            <p>
                                My preferred stack is typically Vue or React on the frontend
                                with Flux-based state management. Backend is PHP, with my
                                framework of choice being Laravel.
                            </p>
                            <p>
                                Most of my recent work has been frontend-focused, creative
                                projects but I mostly enjoy building software that solves real
                                business problems, where there is typically more focus on the backend.
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