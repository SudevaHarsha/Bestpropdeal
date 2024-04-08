import React from 'react'

const PropertyviewerCardImg = ({ image, active }) => {
    return <>
        <div className={`PropertyViewerCard_BannerPanner ${active ? "ImagePanneractive" : "ImagePannerinactive"}`}>
            <img src={image} className='PropertyViewerImg'
                srcSet={`/${image}?width=100 100w, /${image}?width=200 200w, /${image}?width=400 400w, /${image}?width=800 800w`}
                sizes="(max-width: 800px) 100vw, 50vw"
                fetchPriority='high'
                rel='preload'></img>
        </div>
    </>
}

export default PropertyviewerCardImg