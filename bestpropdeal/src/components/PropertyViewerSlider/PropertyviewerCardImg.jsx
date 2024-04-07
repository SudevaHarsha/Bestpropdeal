import React from 'react'

const PropertyviewerCardImg = ({image,active}) => {
    return <>
        <div className={`PropertyViewerCard_BannerPanner ${active ? "ImagePanneractive" : "ImagePannerinactive"}`}>
            <img src={image} className='PropertyViewerImg' loading='lazy'></img>
        </div>
    </>
}

export default PropertyviewerCardImg