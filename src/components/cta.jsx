import React from 'react'
import cta from '../data/cta'
import Link from 'gatsby-link'

const Cta = () => {
    return (
        <div className="container">
            <div className="cta cta--rollover">
                <div className="row">
                    <div className="cta__copy">
                        {cta.copy}
                    </div>
                    <div className="cta__button">
                        <Link to={cta.button.link} className="cta__link">
                            {cta.button.copy}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta