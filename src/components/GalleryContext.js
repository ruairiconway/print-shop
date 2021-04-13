import React, { useState, useEffect } from 'react'

const GalleryContext = React.createContext()

function GalleryContextProvider({children}) {

    // fetch images
    const [ galleryData, setGalleryData ] = useState([])
    const galleryAPI = `https://mysterious-dawn-90465.herokuapp.com/gallery`
    useEffect(() => {
        fetch(`${galleryAPI}/collections/58565055/photos?per_page=10`)
            .then(res => res.json())
            .then(resJson => {
                setGalleryData(resJson)
                setGalleryPrice(resJson)
            })
            .catch(err => console.error(err))
    }, [galleryAPI])

    // set prices
    function setGalleryPrice(data) {
        for (let item of data) {
            item.price = item.height > item.width ? 50 : 75
        }
    }

    // cart state
    const [ cartItems, setCartItems ] = useState([])
    function addToCart(imageData) {
        setCartItems(prevImageData => [...prevImageData, imageData])
    }
    function removeFromCart(imageData) {
        const currentGallery = cartItems.filter(cartItem => cartItem.id !== imageData.id)
        setCartItems(currentGallery)
    }

    // toggle favorite
    function toggleFavorite(id) {
        const updatedGallery = galleryData.map(image => {
            if (image.id === id) {
                return {
                    ...image,
                    isFavorite: !image.isFavorite,
                }
            } else {
                return image
            }
        })
        setGalleryData(updatedGallery)
    }

    return (
        <GalleryContext.Provider value={{
            galleryData,
            toggleFavorite,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart
        }}>
            {children}
        </GalleryContext.Provider>
    )
}

export { GalleryContextProvider, GalleryContext }