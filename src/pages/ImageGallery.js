import React, { useContext } from 'react'
import { GalleryContext } from '../components/GalleryContext'

function ImageGallery(props) {
    const { galleryData } = useContext(GalleryContext)
    const galleryImages = galleryData.map(image => {
        return (
            <p>image goes here</p>
        )
    })

    return (
        <div className="image-gallery">
            <h1>Image Gallery</h1>
            {galleryImages}
        </div>
    )
}

export default ImageGallery