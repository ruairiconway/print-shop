import React, { useState, useEffect } from 'react'

const GalleryContext = React.createContext()

function GalleryContextProvider({children}) {

    const [ galleryData, setGalleryData ] = useState([])
    const galleryAPI = `https://mysterious-dawn-90465.herokuapp.com/gallery`

    useEffect(() => {
        fetch(`${galleryAPI}/collections/58565055/photos?per_page=10`)
            .then(res => res.json())
            .then(resJson => setGalleryData(resJson))
            .catch(err => console.error(err))
    }, [])

    return (
        <GalleryContext.Provider value={{galleryData}}>
            {children}
        </GalleryContext.Provider>
    )
}

export { GalleryContextProvider, GalleryContext }