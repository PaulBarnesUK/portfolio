import React from 'react'
import BrandPanels from './home/brandPanels';
import { TimelineMax } from 'gsap'

class RecentWork extends React.Component {
    animate() {
        const timeline = new TimelineMax();

        timeline.set('.fade-in', {
            y: 50
        })
        .to('h2.fade-in', 1, {
            opacity: 1,
            y: 0
        })
        .staggerTo('.brand.fade-in', 1, {
            opacity: 1,
            y: 0
        }, 0.15, '-=0.75')
    }

    componentDidMount() {
        if (this.props.fade) {
            this.animate()
        }
    }

    render() {
        return (
            <section className="section section--recentWork">
                <div className="container">
                    <h2 className={`section__title ${this.props.fade ? 'fade-in' : ''}`}>
                        {this.props.title}
                    </h2>
                    <BrandPanels fade={this.props.fade} projects={this.props.projects} />
                </div>
            </section>
        )
    }
}

export default RecentWork