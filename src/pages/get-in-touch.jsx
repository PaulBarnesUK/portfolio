import React from 'react'
import Layout from '../layouts'
import Hero from '../components/hero'
import ContactForm from '../components/contactForm'
import Portrait from './../components/portrait'
import { TimelineMax } from 'gsap';

class ContactPage extends React.Component {
    animate() {
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
    }

    setupAnimation() {
        const img = document.querySelector('.portrait img');

        if (img.complete) {
            this.animate()
        } else {
            img.addEventListener('load', this.animate)
        }
    }

    componentDidMount() {
        this.setupAnimation()
    }

    render() {
        return (
            <Layout>
                <Hero>
                    <Portrait />
                    <ContactForm />
                </Hero>
            </Layout>
        )
    }
}

export default ContactPage