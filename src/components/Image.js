import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { GalleryContext } from './GalleryContext'

function Image({ data }) {
    const [ isHovered, setIsHovered ] = useState(false)
    const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(GalleryContext)

    function heartIcon() {
        if (data.isFavorite) {
            return <i className="ri-heart-2-fill heart" onClick={() => toggleFavorite(data.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-2-line heart" onClick={() => toggleFavorite(data.id)}></i>
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === data.id)
        if (isInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(data)}></i>
        } else if (isHovered) {
            return <i className="ri-shopping-cart-line cart" onClick={() => addToCart(data)}></i>
        }
    }

    return (
        <div className='image-wrapper'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >   
            {heartIcon()}
            {cartIcon()}
            <img
                src={data.urls.small}
                alt={data.alt_description}
            ></img>
        </div>
    )
}

Image.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
        }),
        alt_description: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
}

export default Image