import React, { useState, useContext } from 'react'
import { GalleryContext } from '../components/GalleryContext'
import CartItem from '../components/CartItem'

function Cart(props) {
    const [ orderProcessing, setOrderProcessing ] = useState(false)
    const { cartItems, setCartItems } = useContext(GalleryContext)

    function totalPriceNum() {
        let totalPriceSet = 0
        for (let item of cartItems) {
            totalPriceSet += item.price
        }
        return totalPriceSet.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

    const orderStatus = orderProcessing ? 'Processing...' : 'Place Order'
    function handleOrderSubmit(e) {
        e.preventDefault()
        if (cartItems.length > 0) {
            setOrderProcessing(true)
            setTimeout(() => {
                setOrderProcessing(false)
                setCartItems([])
                console.log('order processed')

            }, 3000)
        } else {
            console.log('nothing in cart!')
        }
    }
    
    const cartItemElements = cartItems.map(item => {
        const cartIndex = cartItems.indexOf(item) + 1
        return (
            <CartItem key={item.id} item={item} cartIndex={cartIndex}/>
        )
    })

    const emptyCart = <p>Cart is Empty</p>

    return (
        <div className="cart">
            <h1>Cart</h1>
            {cartItems.length > 0 ? cartItemElements : emptyCart}
            <p className="total-price">Total: {totalPriceNum()}</p>
            <div>
                <button onClick={handleOrderSubmit} type="submit" disabled={orderProcessing || !cartItems.length}>{orderStatus}</button>
            </div>
        </div>
    )
}

export default Cart