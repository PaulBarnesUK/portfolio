import React from 'react'

class ContactForm extends React.Component {
    render() {
        return (
            <div className="section section--noPadding">
                <div className="section__content section__content--standard">
                    <div className="section__copy fade-in">
                        Have a project in mind? Get in touch, I'm happy to answer any questions you have.
                    </div>
                    <form className="form fade-in" name="contact" method="post" data-netlify="true">
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
                                <textarea name="message" required />
                                <span className="form__bar"></span>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="form__submit">
                            <button type="submit" className="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm