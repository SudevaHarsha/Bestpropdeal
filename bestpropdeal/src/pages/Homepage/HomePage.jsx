import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import PropertiesSlider from '../../components/sliders/PropertiesSlider'
import "./HomePage.css"
import diamond from "../../Assets/diamond.png"
import FeaturedProjectsSlider from '../../components/sliders/FeaturedProjectsSlider'
import TopDeveloper from '../../components/TopDeveloper/TopDeveloper'
import BestPropDealAdvantage from '../../components/BestPropdealAdvantages/BestPropDealAdvantage'
import SeoLinks from '../../components/SEO Links/SeoLinks'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../layout/Footer/Footer'
import BookASiteVisit from '../../forms/BookASiteVisit'
import SearchMobile from '../../components/SearchBar/SearchMobile'
import Searchpopup from '../../components/SearchBar/Searchpopup'
import { Helmet } from 'react-helmet-async'
import minilogo from "../../Assets/Logo-2.svg"

const HomePage = () => {

    const [bookASiteVistHome, setBookASiteVistHome] = useState(0);
    const [searchPopup, setSearchPopup] = useState(false);
    const [rocket, setRocket] = useState(true);
    const H1Styles = {
        "margin-top": "100px"
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setRocket(false);
        }, 21000)

        return (() => clearTimeout(timeoutId))
    })

    return <>
        <Helmet>
            <title>BestPropDeal</title>
            <meta name='description' content='Buy the properties'></meta>
            <meta name='keywords' content='buy properties , properties, bestpropdeal'></meta>
            <meta property="og:title" content="BeatPropDeal website" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="BeatPropDeal website" />
            <meta property="og:image" content={minilogo} />
            <meta property="og:url" content={window.location.href} />
            <link rel='canonical' href='/'></link>
        </Helmet>

        {/* {rocket && <Rocket />} */}

        {/* !rocket  &&*/ 
        <>
        <Navbar type="fixed" bcolor="#342f30" />
        <div className="Homepage_landingPage__Herosection">
            <HeroBanner />
            <div className='Homepage_searchDesktop'>
                <SearchBar />
            </div>
            <div className='Homepage_searchMobile' onClick={() => setSearchPopup(!searchPopup)}>
                <SearchMobile />
            </div>
            <PropertiesSlider setBookASiteVist={setBookASiteVistHome} />
            <div className="Bestpropdeal_FeaturedProjects">
                {/* <img src='../../Assets/FeaturedProducts.png'></img> */}
                <div className='FeaturedProjects_TitleCont'>
                    <h1 className='Homepage_Featured__title'>Featured</h1>
                    <img src={diamond} className='diamond'></img>
                    <h1 className='Homepage_Featured__title'>Products</h1>
                </div>
            </div>
            <FeaturedProjectsSlider setBookASiteVist={setBookASiteVistHome} />
        </div>
        <div className={`${bookASiteVistHome ? "property_Deatiles_rmcard_callrm_form_container" : "property_Deatiles_rmcard_callrm_form_containerdisplay"}`}>
            <BookASiteVisit bookASiteVist={bookASiteVistHome} setBookASiteVist={setBookASiteVistHome} />
        </div>
        <div className="HomePage_LandingPage__TestnomialsSection">
            <TopDeveloper />
            <BestPropDealAdvantage />
            <SeoLinks />
        </div>

        <Footer />
        
        {
            searchPopup && <div className="MobileSearchPopup">
                <div className="MobileSearchPopupCont">
                    <div className="MobileSearchInventoryCont">
                        <Searchpopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />
                    </div>
                </div>
            </div>
        }
        </>
        }
    </>
}

export default HomePage