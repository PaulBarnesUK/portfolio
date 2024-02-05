import React from 'react'
import portraitImage from '../assets/images/profile-1.webp'

class Portrait extends React.Component {
    render() {
        return (
            <div className="portrait fade-in">
                <img src={portraitImage} height="234" width="234" alt="test"/>
            </div>
        )
    }
}

export default Portrait
