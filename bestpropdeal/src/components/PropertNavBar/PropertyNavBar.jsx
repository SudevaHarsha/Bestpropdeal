import React from 'react'
import { Link } from 'react-router-dom'

const PropertyNavBar = ({ OverviewRef, FeaturesRef, FloorPlanRef, LocalityRef, DeveloperRef, VideoGalleryRef, FAQRef, scrollToSection }) => {
    return <>
        <div className="PropertyNavigationBar_NavBar">
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(OverviewRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Overview</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(FeaturesRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Features</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(FloorPlanRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Price And Floor Plan</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(LocalityRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Locality</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(DeveloperRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Developer</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(VideoGalleryRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>Video Galley</div>
            </a>
            <a className={"PropertyNavigationBar__NavLinks"} to="/" onClick={() => scrollToSection(FAQRef)}>
                <div className='PropertyNavigationBar__NavLinksText'>FAQ'S</div>
            </a>
        </div>
        <div className="PropertyNavigationBar_NavNtnCont">
            <div className="PropertyNavbar_BooAVisitBtnCont">
                <div className="PropertyNavBar_Content">
                    <div className="PropertyNavBar_Text"></div>
                </div>
            </div>
        </div>
    </>
}

export default PropertyNavBar