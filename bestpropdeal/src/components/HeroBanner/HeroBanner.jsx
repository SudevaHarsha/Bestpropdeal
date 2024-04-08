import React from 'react'
/* import "../../Assets/Best-Prop-Deal-Logo .png" */
import Logo from "../../Assets/Logo-2 (3).webp"
/* import Logo from "../../Assets/Logo-2.svg" */

const HeroBanner = React.memo(() => {
    return <>
        <div className="Homepage_HeroBanner">
            <div className="Homepage_landingpage__HeroBanner">
                <div className="Homepage_HeroBanner__Herologo">
                    <img className='Herbanner_Logiimg' alt='Bestpropdeal-hero-img' srcSet={`/${Logo}?width=100 100w, /${Logo}?width=200 200w, /${Logo}?width=400 400w, /${Logo}?width=800 800w`}
                    sizes="(max-width: 800px) 100vw, 50vw" src={Logo} width="600px" height="450px" loading='eager' rel='preload'></img>
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
})

export default HeroBanner