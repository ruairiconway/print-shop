import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GalleryContext } from './GalleryContext'
import useHover from '../hooks/useHover'

function Image({ data }) {
    const [ hovered, ref ] = useHover()
    const { favoritesItems, addToFavorites, removeFromFavorites, cartItems, addToCart, removeFromCart } = useContext(GalleryContext)

    function heartIcon() {
        const isInFavorites = favoritesItems.some(item => item.id === data.id)
        if (isInFavorites) {
            return <i className="ri-heart-2-fill heart" onClick={() => removeFromFavorites(data)}></i>
        } else if (hovered) {
            return <i className="ri-heart-2-line heart" onClick={() => addToFavorites(data)}></i>
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === data.id)
        if (isInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(data)}></i>
        } else if (hovered) {
            return <i className="ri-shopping-cart-line cart" onClick={() => addToCart(data)}></i>
        }
    }

    return (
        <div className='image-wrapper' ref={ref}>   
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