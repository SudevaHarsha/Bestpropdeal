import React from 'react'

const LocalitySlide = ({active,loc,handleLocFilterClick,item}) => {
    return <>
        <div className={`LocalitySwiper_Slide ${active ? "active" : "inactive"}`} >
            <div className="LocalitySlider_LocationCard">
                <div className="LocationCard_Header">
                    <div className="LocationCard_HeaderTitle">
                        <h4 className="LocationCard_HeaderText">
                            <div>{loc.Name}</div>
                        </h4>
                    </div>
                </div>
                <div className="LocationCard_LocatlityDetails">
                    <div className="LocalityRating_Cont">
                        <img src='https://blox.xyz/assets/icons/orange-star.svg'></img>
                        <div className="LocalityRating_Text">3</div>
                        <div className="LocalityRating_NumText">(2)</div>
                    </div>
                    <div className="LocalityDistText">0.2 kms / 2 mins</div>
                </div>
            </div>
        </div>
    </>
}

export default LocalitySlide