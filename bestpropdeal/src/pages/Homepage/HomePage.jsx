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

import axios from 'axios';

const HomePage = () => {

    const [bookASiteVistHome, setBookASiteVistHome] = useState(0);
    const [searchPopup, setSearchPopup] = useState(false);
    const [rocket, setRocket] = useState(true);
    const [leadData, setLeadData] = useState({
        name: '',
        mobile: '',
        email: '',
        project: '',
        source: '',
        subSource: '',
        userEmail: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeadData({ ...leadData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('https://glitz.apps.enrichr.co/public/companies/c7a3bb3b-1f2b-47b5-b9c1-e0ccd38dac05/leads-all', leadData);
            alert('Lead submitted successfully!');
            // Optionally, you can reset the form fields here
            setLeadData({
                name: '',
                mobile: '',
                email: '',
                project: '',
                source: '',
                subSource: '',
                userEmail: '',
                comment: ''
            });
        } catch (error) {
            console.error('Error submitting lead:', error);
            alert('Failed to submit lead. Please try again later.');
        }
    };

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
            <link rel='canonical' href='https://bestpropdeal.com/'></link>
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
                    {/* <div>
                        <h2>Lead Form</h2>
                        <input type="text" name="name" value={leadData.name} placeholder="Name" onChange={handleChange} />
                        <input type="text" name="mobile" value={leadData.mobile} placeholder="Mobile" onChange={handleChange} />
                        <input type="email" name="email" value={leadData.email} placeholder="Email" onChange={handleChange} />
                        <input type="text" name="project" value={leadData.project} placeholder="Project" onChange={handleChange} />
                        <input type="text" name="source" value={leadData.source} placeholder="Source" onChange={handleChange} />
                        <input type="text" name="subSource" value={leadData.subSource} placeholder="Sub Source" onChange={handleChange} />
                        <input type="email" name="userEmail" value={leadData.userEmail} placeholder="User Email" onChange={handleChange} />
                        <textarea name="comment" value={leadData.comment} placeholder="Comment" onChange={handleChange} />
                        <button onClick={handleSubmit}>Submit</button>
                    </div> */}
                    <PropertiesSlider setBookASiteVist={setBookASiteVistHome} />
                    <div className="Bestpropdeal_FeaturedProjects">
                        {/* <img src='../../Assets/FeaturedProducts.png'></img> */}
                        <div className='FeaturedProjects_TitleCont'>
                            <h1 className='Homepage_Featured__title'>Featured</h1>
                            <img src={diamond} className='diamond' alt=''></img>
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