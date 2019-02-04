import React from 'react'
import Hero from '../components/hero'
import ContactForm from '../components/contactForm'
import Portrait from './../components/portrait'
import { TimelineMax } from 'gsap';

class ContactPage extends React.Component {
    animate() {
        const img = document.querySelector('.portrait img');

        img.addEventListener('load', () => {
            const timeline = new TimelineMax();

            timeline.set('.fade-in', {
                y: 50
            })
            .staggerTo('.fade-in', 1, {
                opacity: 1,
                y: 0
            }, 0.25)
            .to('.chevron', 0.7, {
                opacity: 1
            }, '+=0.5')
        })
    }

    componentDidMount() {
        this.animate()
    }

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