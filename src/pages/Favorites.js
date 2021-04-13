import React, { useContext } from 'react'
import { GalleryContext } from '../components/GalleryContext'
import Image from '../components/Image'

function Favorites(props) {
    const { favoritesItems } = useContext(GalleryContext)

    const favorites = favoritesItems.map(image => {
        return (
            <Image key={image.id} data={image} />
        )
    })

    const emptyFavorites = <p>no favorites</p>

    return (
        <div className="favorites">
            <h1>Favorites</h1>
            {favoritesItems.length > 0 ? favorites : emptyFavorites}
        </div>
    )
}

export default Favorites