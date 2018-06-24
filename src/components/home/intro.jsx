import React from 'react'

class HomeIntro extends React.Component {
    render() {
        return (
            <div className="section section--bgColoured section--overlayed">
                <div className="container">
                    <div className="section__content section__content--standard">
                        <div className="section__title">
                            {this.props.title}
                        </div>
                        <div className="section__copy">
                            {this.props.copy}
                        </div>
                        <div className="section__title">
                            {this.props.myStackTitle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeIntro