import React from 'react'
import portraitImage from '../assets/images/profile.png'

class Portrait extends React.Component {
    render() {
        return (
            <div className="portrait">
                <img src={portraitImage} height="234" width="234" alt="test"/>
            </div>
        )
    }
}

export default Portrait
