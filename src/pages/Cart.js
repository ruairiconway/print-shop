import React, { useContext } from 'react'
import { GalleryContext } from '../components/GalleryContext'
import CartItem from '../components/CartItem'

function Cart(props) {
    const { cartItems } = useContext(GalleryContext)

    function totalPriceNum() {
        let totalPriceSet = 0
        for (let item of cartItems) {
            totalPriceSet += item.price
        }
        return totalPriceSet.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }
    
    const cartItemElements = cartItems.map(item => {
        const cartIndex = cartItems.indexOf(item) + 1
        return (
            <CartItem key={item.id} item={item} cartIndex={cartIndex}/>
        )
    })

    return (
        <div className="cart">
            <h1>Cart</h1>
            {cartItemElements}
            <p className="total-price">Total: {totalPriceNum()}</p>
            <div>
                <button>Place Order</button>
            </div>
        </div>
    )
}

export default Cart