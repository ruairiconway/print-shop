import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <Link to='/'>
                <h1>PRINT SHOP</h1>
            </Link>
            <Link to='/cart'>
                <i className="ri-shopping-bag-2-line"></i>
            </Link>
        </div>
    )
}

export default Header