import React from 'react'
import socialData from '../data/social'

class Footer extends React.Component {
    socials = socialData.map((social, index) => {
        return (
            <div className="social" key={index}>
                <a href={social.link} className="social__link" target="_blank" dangerouslySetInnerHTML={social.icon}>
                </a>
            </div>
        )
    })

    date = new Date();
    year = this.date.getFullYear();

    render() {
        return (
            <footer className="section section--bgColoured">
                <div className="container">
                    <div className="logo">
                        logo
                    </div>
                    <div className="socials">
                        {this.socials}
                    </div>
                    <div className="copyright">
                        &copy; {this.year} paul-barnes.me.uk
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer