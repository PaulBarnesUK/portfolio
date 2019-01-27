import React from 'react'
import Hero from '../components/hero'
import ContactForm from '../components/contactForm'
import Portrait from './../components/portrait'
import TimelineMax from 'gsap';

class ContactPage extends React.Component {
    render() {
        return (
            <Hero>
                <Portrait />
                <ContactForm />
            </Hero>
        )
    }
}

export default ContactPage