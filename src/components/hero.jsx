import React from 'react'

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Hero