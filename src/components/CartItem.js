import React, { useContext } from 'react'
import { GalleryContext } from './GalleryContext'

function CartItem({ item, cartIndex }) {
    const { removeFromCart } = useContext(GalleryContext)

    const binIcon = <i className="ri-delete-bin-line bin" onClick={() => removeFromCart(item)}></i>
    const priceNum = item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <div className="cart-item">
            <p>{cartIndex}</p>
            <p>{priceNum}</p>
            <img src={item.urls.thumb} alt={item.alt_description} />
            <p>{item.description}</p>
            <p>By: <a href={item.user.links.html} target="_blank" rel="noreferrer">{item.user.name}</a></p>
            {binIcon}
        </div>
    )
}

export default CartItem