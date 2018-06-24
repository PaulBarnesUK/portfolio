import React from 'react'
import testimonialsData from '../data/testimonials'

const Testimonials = () => {
    const testimonials = testimonialsData.map((testimonial, index) => {
        return (
            <div className="testimonial" key={index}>
                <div className="testimonial__quotation">
                “
                </div>
                <div className="testimonial__copy">
                    {testimonial.copy}
                </div>
                <div className="testimonial__image" style={{
                    backgroundImage: `url(${testimonial.person.image})`
                }}></div>
                <div className="testimonial__person">
                    <div className="testimonial__personName">
                        {testimonial.person.name}
                    </div>
                    <div className="testimonial__personInfo">
                        {testimonial.person.title}, {testimonial.person.organisation} 
                    </div>
                </div>
                
            </div>
        )
    })

    return (
        <div className="section section--bgColoured">
            <div className="container">
                <div className="section__content section__content--narrow">
                    <div className="section__copy section__copy--alignLeft">
                        {testimonials}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials