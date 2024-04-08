import React from 'react'

const PriceFloorPlanSlide = ({ image, active }) => {
    return <>
        <div className={`PriceFloorPlan_SwiperSlide ${active ? "active" : "inactive"}`}>
            <div className="PriceFloorPlan_SwiperSlidecont">
                <img src={image.url} alt={image}></img>
                <div className="PriceFloorPlanDetails">
                    <div className="PriceFloorPlan_CarpetAreaCont">
                        <div className="PriceFloorPlan_DeatailHeading">Carpet Area</div>
                        <div className="PriceFloorPlan_DeatailData">{image.price}</div>
                    </div>
                    <div className="PriceFloorPlan_PriceRangeCont">
                        <div className="PriceFloorPlan_DeatailHeading">Price Range</div>
                        <div className="PriceFloorPlan_DeatailData">{image.area}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PriceFloorPlanSlide