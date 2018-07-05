import React from 'react'
import portraitImage from '../assets/images/profile.png'

class Portrait extends React.Component {
    render() {
        return (
            <div className="portrait">
                <img src={portraitImage} alt="test"/>
            </div>
        )
    }
}

export default Portrait
