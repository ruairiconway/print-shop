import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GalleryContext } from './GalleryContext'

function Header(props) {
    const { cartItems } = useContext(GalleryContext)

    const cartIconClass = cartItems.length > 0 ? 'fill' : 'line' 
    
    return (
        <div className="header">
            <Link to='/'>
                <h1>PRINT SHOP</h1>
            </Link>
            <Link to='/cart'>
                <i className={`ri-shopping-bag-2-${cartIconClass}`}></i>
            </Link>
        </div>
    )
}

export default Header