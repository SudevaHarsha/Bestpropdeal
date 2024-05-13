import React from 'react'
import { Link } from 'react-router-dom'
import SeoCard from './SeoCard'
import "../../pages/Homepage/HomePage.css"

const SeoLinks = () => {

    const firstCard = [
        {
            "size":"Apartment",
            "filter":"1BHK"
        },
        {
            "size":"Duplex",
            "filter":"1BHK"
        },
        {
            "size":"Independenthouse",
            "filter":"1BHK"
        },
        {
            "size":"Villa",
            "filter":"1BHK"
        }
     ];
     const secondCard = [
        {
            "size":"Apartment",
            "filter":"2BHK"
        },
        {
            "size":"Duplex",
            "filter":"2BHK"
        },
        {
            "size":"Independenthouse",
            "filter":"2BHK"
        },
        {
            "size":"Villa",
            "filter":"2BHK"
        }
     ];
     const thirdCard = [
        {
            "size":"Apartment",
            "filter":"3BHK"
        },
        {
            "size":"Duplex",
            "filter":"3BHK"
        },
        {
            "size":"Independenthouse",
            "filter":"3BHK"
        },
        {
            "size":"Villa",
            "filter":"3BHK"
        }
     ];
     const fourthCard = [
        {
            "size":"Apartment",
            "filter":"4BHK"
        },
        {
            "size":"Duplex",
            "filter":"4BHK"
        },
        {
            "size":"Independenthouse",
            "filter":"4BHK"
        },
        {
            "size":"Villa",
            "filter":"4BHK"
        }
     ];

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
                <SeoCard links={firstCard}/>
                <SeoCard links={secondCard}/>
                <SeoCard links={thirdCard}/>
                <SeoCard links={fourthCard}/>
            </div>
    </div>
  </>
}

export default SeoLinks