import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GalleryContext } from './GalleryContext'
import '../styles/header.css'

function Header(props) {
    const { favoritesItems, cartItems } = useContext(GalleryContext)

    const favoritesIconClass = favoritesItems.length > 0 ? 'fill' : 'line'
    const cartIconClass = cartItems.length > 0 ? 'fill' : 'line' 

    return (
        <div className="header">
            <div className="header-link gallery-link">
                <Link to='/'>
                    <h1>PRINT SHOP</h1>
                </Link>
            </div>
            <div className="header-link favorites-link">
                <Link to='/favorites'>
                    <i className={`ri-heart-2-${favoritesIconClass}`}></i>
                </Link>
            </div>
            <div className="header-link cart-link">
                <Link to='/cart'>
                    <i className={`ri-shopping-bag-2-${cartIconClass}`}></i>
                </Link>
            </div>
        </div>
    )
}

export default Header