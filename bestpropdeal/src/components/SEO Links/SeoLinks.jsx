import React from 'react'
import { Link } from 'react-router-dom'
import SeoCard from './SeoCard'
import "../../pages/Homepage/HomePage.css"

const SeoLinks = () => {
  return <>
    <div className="SeoLinks_SeoFooterLinks" >
        {/* <div className="SeoLinks_SeoLinksCards"> */}
            <div className="SeoLinks_Swipercardcont">
                {/* <div className="SeoLinks_SwiperCard">
                    <SeoCard />
                </div>
                <div className="SeoLinks_SwiperCard">
                    <SeoCard />
                </div>
                <div className="SeoLinks_SwiperCard">
                    <SeoCard />
                </div>
                <div className="SeoLinks_SwiperCard">
                    <SeoCard />
                </div> */}
                <SeoCard/>
                <SeoCard/>
                <SeoCard/>
                <SeoCard/>
            </div>
    </div>
  </>
}

export default SeoLinks