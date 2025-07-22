import React, { useEffect, useRef, useState } from 'react'
import "./Property.css"
import Navbar from '../../layout/Navbar/Navbar'
import PropertyviewerCardImg from '../../components/PropertyViewerSlider/PropertyviewerCardImg';
import ProgressBar from '../../components/PropertyViewerSlider/ProgressBar';
import PropertyViewerSlider from '../../components/PropertyViewerSlider/PropertyViewerSlider';
import PropertyNavBar from '../../components/PropertNavBar/PropertyNavBar';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';
import SeoLinks from '../../components/SEO Links/SeoLinks';
import Footer from '../../layout/Footer/Footer';
import '../../components/Gallery/Gallery.css';
import { Link, useParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import PropertyData from "../../Data/Property.json"
import { Helmet } from 'react-helmet-async';
import GallerCont from './GallerCont';


const Property = () => {

  const OverviewRef = useRef(null);
  const FeaturesRef = useRef(null);
  const FloorPlanRef = useRef(null);
  const LocalityRef = useRef(null);
  const DeveloperRef = useRef(null);
  const VideoGalleryRef = useRef(null);
  const FAQRef = useRef(null);

  const AllIcons = [];

  const scrollToSection = (ref) => {
    const topPosition = ref.current.getBoundingClientRect().top;

    // Scroll to the section with a 200px offset from the top
    window.scrollTo({
      top: window.scrollY + topPosition - 110,
      behavior: 'smooth',
    });
  };

  const { id } =useParams();
  const CurrentProperty = PropertyData.find((property) => property.Title === id);

  const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [isGallery, setIsGallery] = useState(false);

  const openGallery = () => {
    setIsGallery(!isGallery);
  }

  // Function to check the scroll position and update the state accordingly
  const checkScrollPosition = () => {
    const scrollThreshold = 540; // Adjust this value to change when the div becomes visible
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= scrollThreshold) {
      setShowHiddenDiv(true);
    } else {
      setShowHiddenDiv(false);
    }
  };

  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return <>

    <Helmet>
      <title>{CurrentProperty?.Title}</title>
      <meta name='description' content={`Buy ${CurrentProperty?.Title}`}></meta>
      <meta name='keywords' content={`buy properties , properties, bestpropdeal, ${CurrentProperty?.Title}, ${CurrentProperty?.location}`}></meta>
      <link rel='canonical' href={`/property/1`}></link>
    </Helmet>

    <Navbar type="absolute" />
    <div className="Propert_ViewerCard__CardCont">
      <PropertyViewerSlider isGallery={isGallery} openGallery={openGallery} />
    </div>
    {
      showHiddenDiv &&
      <div className="StickyWrapper_Navbar">
        <div className="StickyWrapper_Navbarcont">
          {/* <div className='StickyWrapper_NavbarGridCont'>
            <div className="StickyWrapper_NavbarGridHeader">
              <div>
                <div className="StickyWrapper_NavbarTitle">{CurrentProperty?.Title}</div>
              </div>
              <div>
                <div className="StickyWrapper_NavbarTitle">{CurrentProperty?.location}</div>
              </div>
            </div>
            <div className="StickyWrapper_NavbarRightData">
              <div className="StickyWrapper_NavbarTitle StickyWrapper_NavbarPrice">&#8377; {CurrentProperty?.Price} Rs.</div>
              <div className="StickyWrapper_NavbarShareIconCont">
                <img src='https://blox.xyz/assets/icons/share-primary.svg'></img>
              </div>
              <div className="StickyWrapper_NavbarShareIconContMobile">
                <img src='https://blox.xyz/assets/icons/phone-ring-primary.svg'></img>
              </div>
            </div>
          </div> */}
          <PropertyNavBar OverviewRef={OverviewRef} FeaturesRef={FeaturesRef} FloorPlanRef={FloorPlanRef} LocalityRef={LocalityRef} DeveloperRef={DeveloperRef} VideoGalleryRef={VideoGalleryRef} FAQRef={FAQRef} scrollToSection={scrollToSection}/>
        </div>
      </div>
    }
    <div className="StickyFooter">
      <div className="StickyFooterNav">

        <p className="StickyFooterNavLinkText" onClick={() => scrollToSection(OverviewRef)}>Overview</p>


        <p className="StickyFooterNavLinkText" onClick={() => scrollToSection(FeaturesRef)}>Features</p>

        <p className="StickyFooterNavLinkText" onClick={() => scrollToSection(FloorPlanRef)}>Price & floor plan</p>

        <p className="StickyFooterNavLinkText" onClick={() => scrollToSection(LocalityRef)}>Locality</p>
        {/* <p className="StickyFooterNavLinkText">Video Gallery</p> */}
      </div>
      {/* <div className="StickyFotterNav_ActionBtn"> */}
      {/*  <div className="StickyFotterNav_ActionBtncont"> */}
      {/* <button className="StickyFotterNav_ActionBtncont">Book A Visit</button> */}

      {/* </div> */}
      {/*  </div> */}
    </div>
    <div className="Property_NavigationBar__StickyCont">
      <PropertyNavBar OverviewRef={OverviewRef} FeaturesRef={FeaturesRef} FloorPlanRef={FloorPlanRef} LocalityRef={LocalityRef} DeveloperRef={DeveloperRef} VideoGalleryRef={VideoGalleryRef} FAQRef={FAQRef} scrollToSection={scrollToSection} />
    </div>
    <div className="PropertyDetails_RelativePropertyCont">
      <PropertyDetails OverviewRef={OverviewRef} FeaturesRef={FeaturesRef} FloorPlanRef={FloorPlanRef} LocalityRef={LocalityRef} DeveloperRef={DeveloperRef} VideoGalleryRef={VideoGalleryRef} FAQRef={FAQRef} />
    </div>
    <div className="propertyseoLinks_cont">
      <SeoLinks />
    </div>
    <Footer />
    {
      isGallery && <div className="GalleryModal">
        <GallerCont openGallery={openGallery} />
      </div>
    }
  </>
}

export default Property