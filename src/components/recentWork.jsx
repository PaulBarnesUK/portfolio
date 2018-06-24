import React from 'react'
import BrandPanels from './home/brandPanels';

class RecentWork extends React.Component {
    render() {
        return (
            <section className="section section--recentWork">
                <div className="container">
                    <h2 className="section__title">
                        {this.props.title}
                    </h2>
                    <BrandPanels />
                </div>
            </section>
        )
    }
}

export default RecentWork