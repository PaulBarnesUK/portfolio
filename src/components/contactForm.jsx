import React from 'react'
import Testimonials from './testimonials';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="section section--noPadding">
                <div className="section__content section__content--standard">
                    <div className="section__copy">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus quod earum voluptatem facilis molestiae expedita nostrum rerum harum ab delectus itaque inventore illo error, a exercitationem! Suscipit, odio molestias.
                    </div>
                    <div className="form" name="contact" method="post" netlify>
                        <div className="form__group">
                            <div className="form__wrapper">
                                <input name="name" type="text" required />
                                <span className="form__bar"></span>
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__wrapper">
                                <input name="email" type="email" required />
                                <span className="form__bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="form__group form__group--fullWidth">
                            <div className="form__wrapper">
                                <textarea name="email" type="email" required />
                                <span className="form__bar"></span>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="form__submit">
                            <button type="submit" className="button">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm