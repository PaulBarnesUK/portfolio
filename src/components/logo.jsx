import React from 'react'
import logo from '../assets/images/svg/logo.svg'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="Paul Barnes Logo"/>
            </div>
        )
    }
}

export default Logo