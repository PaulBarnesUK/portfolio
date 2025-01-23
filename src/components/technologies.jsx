import React from 'react'

class Technologies extends React.Component {
    icons = this.props.icons.map((icon, index) => {
        return (
            <div className="panel__icon panel__icon--small" dangerouslySetInnerHTML={icon.image} key={index}></div>
        )
    })

    render() {
        return (
            <div className="section section--withFloatedPanel">
                <div className="container container--relative">
                    <div className="panel panel--floating panel--fullWidth panel--overlapping">
                        <div className="panel__content panel__content--noMaxWidth">
                            <div className="panel__title">
                                Technologies Used
                            </div>
                            <div className="panel__icons">
                                {this.icons}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Technologies