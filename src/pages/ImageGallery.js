import React, { useContext } from 'react'
import { GalleryContext } from '../components/GalleryContext'
import Image from '../components/Image'

function ImageGallery(props) {
    const { galleryData } = useContext(GalleryContext)
    const galleryImages = galleryData.map(image => {
        return (
            <Image key={image.id} data={image} />
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