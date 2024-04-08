import React from 'react'
import StepperChartListItem from './StepperChartListItem'
/* import AdvantageVideo from "../../Assets/homepage-advantage-480" */
import videos from "../../Assets/door-video.mp4"
import { LiaStar } from 'react-icons/lia'
import { GoStar } from 'react-icons/go'
import { AiFillStar } from 'react-icons/ai'

const BestPropDealAdvantage = React.memo(() => {
    return <>
        <div className="HomePage_LandingPage__BestpropdealAdvantages">
            {/* <div className="Bestpropdeal_VerifiedIcon">
                <img src='https://blox.xyz/assets/icons/blox-verified-stamp.svg'></img>
            </div> */}
            <div className="Bestpropdeal_HeadingCont">
                <h2 className="Bestpropdeal_Heading__Title">
                    <div className="Bestpropdeal_Heading__DesktopTitle">The BestPropDeal</div>
                </h2>
                <div className="BestpropdealAdvantage_Heading__Innercont">
                    <h2 className="BestpropdealAdvantageHeading_Title">
                        <div className="BestpropdealAdvantageHeading_DesktopTitle">Advantage</div>
                    </h2>
                    {/* <img src='https://blox.xyz/assets/icons/bloxsquare.svg' className='BloxAdvangeImg' style={{ color: 'transparent' }}></img> */}
                    <AiFillStar className='BestpropdealAdvangeImg'/>
                </div>
            </div>
            <div className="Beastpropdeal_StepperMediaCont">
                <div className="Bestpropdeal_AdvantageMediacont">
                    <video className='Bestpropdeal_AdvantageMedia__AdvantageVideo'  autoPlay muted loop>
                        <source src={videos} type='video/mp4'></source>
                    </video>
                </div>
                <StepperChartListItem />
            </div>
        </div>
    </>
})

export default BestPropDealAdvantage