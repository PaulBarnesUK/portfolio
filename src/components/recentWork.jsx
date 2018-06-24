import React from 'react'
import BrandPanels from './home/brandPanels';

class RecentWork extends React.Component {
    render() {
        return (
            <div className="recentWork">
                <div className="container">
                    <div className="intro">
                        <div className="intro__title">
                            {this.props.title}
                        </div>
                    </div>
                    <BrandPanels />
                </div>
            </div>
        )
    }
}

export default RecentWork