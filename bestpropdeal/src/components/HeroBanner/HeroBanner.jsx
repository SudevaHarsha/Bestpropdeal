import React from 'react'
/* import "../../Assets/Best-Prop-Deal-Logo .png" */
import Logo from "../../Assets/Logo-2.svg"

const HeroBanner = () => {
  return <>
    <div className="Homepage_HeroBanner">
        <div className="Homepage_landingpage__HeroBanner">
            <div className="Homepage_HeroBanner__Herologo">
                <img className='Herbanner_Logiimg' src={Logo} width="500px" height="500px"></img>
            </div>
        </div>
        <div className="Homepage_HeroBanner__HeroTextContainer">
            <div className="Homepage_HeroBanner__Herotext">
                <div className="Homepage_Herotext__cont">
                    <h1 className='Homepage_Herotext__texttitle'>Find Your Dream Home</h1>
                </div>
                <h2 className='Homepage_Herotext__smalltext'>India's first consumer centric real-estate platform</h2>
            </div>
            
        </div>
        {/* <div className="Homepage_HeroBannergradient"></div> */}
    </div>
  </>
}

export default HeroBanner