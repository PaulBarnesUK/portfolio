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
                            I'm a full-stack developer with 8 years of experience building web applications for in-house teams, digital agencies, and directly for clients.
                        </p>
                        <p>
                            I enjoy working across the entire stack to craft end-to-end solutions that solve real-world problems and deliver tangible results.
                        </p>
                        <p>
                            My preferred tech stack includes Vue.js or React for building dynamic user interfaces, and Node.js (Typescript) on serverless AWS infrastructure for robust and scalable backend systems. I also have experience integrating AI/ML services into web applications.
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