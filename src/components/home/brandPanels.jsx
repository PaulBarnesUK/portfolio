import React from 'react'
import classNames from 'classnames'
import Link from 'gatsby-link'
import {TimelineMax, Power1} from 'gsap'

import brands from '../../data/brands'

export const brandsList = brands.map((brand, index) => {
    let tileStyle = {};

    if (brand.tile.color.length > 1) {
        tileStyle.background = `linear-gradient(to right, ${brand.tile.color[0]} 0%, ${brand.tile.color[1]} 100%)`;
    } else {
        tileStyle.backgroundColor = brand.tile.color[0]
    }

    const brandClasses = classNames(`brand`, `brand--${brand.name.replace(' ', '-').toLowerCase()}`)

    return (
        <div className={brandClasses} key={index}>
            <Link to="/">
                <div className="brand__wrapper" style={tileStyle}>
                    <div className="brand__background" style={{
                        backgroundImage: `url(${brand.image})`,
                        opacity: brand.tile.opacity
                    }}></div>
                    <div className="brand__content">
                        <div className="brand__logo">
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    </div>
                    <div className="cta">
                        <div className="cta__copy">
                            {brand.copy}
                        </div>
                        <div className="cta__wrapper">
                            <div className="cta__button">
                                <span className="cta__link">
                                    View Projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand__ctaWrapper">    
                    
                </div>
            </Link>
        </div>
    )
})

class BrandPanels extends React.Component {
    animateBackendIcon() {
        const animation = new TimelineMax({
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        })

        animation.to('#backendBar', 1.5, {
            x: -275,
            ease: Power1.easeInOut
        }, 0)
        .to('#backendClipPathRect', 1.5, {
            x: -250,
            ease: Power1.easeInOut
        }, 0.05)
    }

    componentDidMount() {
        this.animateBackendIcon()
    }

    render() {
        return (
            <div className="brands">
                <div className="row">
                    {brandsList}
                </div>
            </div>
        )
    }
}

export default BrandPanels