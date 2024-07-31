import React from 'react'

const Developer_Item = (({image,handleDeveloperClick,name}) => {
    return <>
        <div className="TopDeveloper_TopDevImgConr" onClick={()=>handleDeveloperClick(name)}>
            <img src={(image)} height="80px" width="80px" alt={name} loading='lazy'></img>
        </div>
    </>
})

export default Developer_Item