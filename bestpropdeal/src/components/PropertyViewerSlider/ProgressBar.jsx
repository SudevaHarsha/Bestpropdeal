import React from 'react'

const ProgressBar = ({progressactive}) => {
    return <>
        <div className='PropertyCardViewer_ProgressBar' >
            <div className={`PropertyCardViewer_ProgressBar_innerBar ${progressactive ? "active" : "inactive"}`} ></div>
        </div>
    </>
}

export default ProgressBar