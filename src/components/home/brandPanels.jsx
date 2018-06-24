import React from 'react'
import brands from '../../data/brands'
import classNames from 'classnames'

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
            <div className="brand__wrapper" style={tileStyle}>
                <div className="brand__background" style={{
                    backgroundImage: `url(${brand.image})`,
                    opacity: brand.tile.opacity
                }}></div>
                <div className="brand__content">
                    <div className="brand__logo">
                        <img src={brand.logo} alt={brand.name} />
                    </div>
                    <div className="brand__cta">
                        <div className="button">
                            view project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

class BrandPanels extends React.Component {
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