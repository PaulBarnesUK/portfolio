import React from 'react'
import cta from '../data/cta'

const Cta = () => (
    <div className="container">
        <div className="cta cta--rollover">
            <div className="row">
                <div className="cta__copy">
                    {cta.copy}
                </div>
                <div className="cta__button">
                    <a href={cta.button.link} className="cta__link">
                        {cta.button.copy}
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Cta
