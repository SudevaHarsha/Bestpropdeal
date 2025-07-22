import React, { useEffect, useState } from 'react'
import "./card.css"
import properties from "../../Data/Property.json"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import { BsTextarea } from 'react-icons/bs';
import { MdOutlineBedroomChild, MdOutlineLocationOn } from 'react-icons/md';
import { FaRegHeart, FaShower } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import PropertyviewerCardImg from '../PropertyViewerSlider/PropertyviewerCardImg'
import Properties from "../../Data/Property.json"

const SearchResultsPropertycard = ({ property, index }) => {

  /* const [property,setProperty] = useState(properties[0]); */
  const navigate = useNavigate();
  const propertyItems = Properties;
  const pid = () => {
    for (let i = 0; i < propertyItems.length; i++) {
      if (propertyItems[i].id === property.id) {
        console.log(i);
        return i;
        // Return the index if the 'id' matches
      }
    }
  }

  /* console.log(property.position); */

  const handleClick = () => {
    const sd = pid();
    console.log(sd);
  }

  const [activeItem, setActiveItem] = useState(0);

  const images = property.Gallery.length > 5 ? property.Gallery.slice(0, 5) : property.Gallery;
  /* const Features = readMore.includes("features")?FeaturesTrue:FeaturesTrue.slice(0,7); */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (activeItem === images.length - 1) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1)
      }
    }, 5000)

    return (() => clearTimeout(timeoutId))
  })

  return <>
    <div className="SearchResults_PropertyCard__PropertyCard" onClick={handleClick}  >
      <div className="SearchResults_PropertyCard__Property">
        <div /* style={{width:"50%"}} */>
          <div style={{ display: "flex", "flex-direction": "column", background: "transparent", position: "relative", "user-select": "none", width: "100%", height: "100%", }}>
            {/* <div style={{ display: "flex", "justify-content": "center", "max-width": "100%", "flex-wrap": "nowrap", position: "absolute", width: " 100%", padding: " 7px 16px 0px", "align-self": " center", "z-index": 1001, filter: "drop-shadow(rgb(34, 34, 34) 0px 1px 8px)", transition: "opacity 400ms ease-in-out 0s", "margin-left": "0px", bottom: "0px", left: "0px", opacity: 1, "z-index": "123" }}>
              <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
              </div>
              <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
              </div>
              <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
              </div>
              <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
              </div>
              <div className="SearchResults_ProgressBar">
                <div className="SearchResults_ProgressBarInnerCont"></div>
              </div>
            </div> */}
            <div style={{ display: "flex", position: "relative", overflow: "hidden", "align-items": "center", "justify-content": "center", "border-radius": "24px 0px 0px 24px", width: "100%", height: "100%" }}>
              {/* <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='SearchResults_PropertyCard__PropertyImage'></img> */}
              {images.map((image, index) => {
                return <div className={`${activeItem===index ? "ImagePanneractive" : "ImagePannerinactive"}`}><img src={image} className="SearchResults_PropertyCard__PropertyImage"></img></div>
              })}
            </div>
            <div style={{ position: "absolute", height: "inherit", width: "inherit", display: "flex", }}>
              <div style={{ width: "50%", "z-index": 999, }}></div>
              <div style={{ width: "50%", "z-index": 999, }}></div>
            </div>
          </div>
        </div>
        <div className="SearchResults_PropertyDetailsCard">
          {/* <div className="SearchResults_CardDetailsCont">
            <link to="/"></link>
            <div className="SearchResults_CardDetail__HeadingCont">
              <div>
                <h2 className="SearchResultsCard_Heading">
                  <div className="SearchResultsCard_HeadingText">NANO CITY</div>
                </h2>
                <div className="SearchResultsCard_SubHeading">Mumbai</div>
                <div className="SearchResults_UnderConstructionTag_Cont">
                  <div className="SearchResults_UnderConstructionTag">
                    <img src="https://blox.xyz/assets/icons/under-construction.svg"></img>
                    <div className="SearchResults_UnderConstructionTag_Text">Under Construction</div>
                  </div>
                </div>
              </div>
              <div className="SearchresultsCard_ActionBtnCont">
                <div>
                  <div className="SearchResults_FavouriteBtnCont">
                    <img src='https://blox.xyz/assets/icons/heart-secondary.svg'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="SearchResults_CardTruncatedTextCont">
              <div className="SearchResults_TruncatedText">
                <div className="SearchResults_SubheaderText">Buy Property in malabar hill mumbai with Blox. Verified Inventory | Direct from Developers | Dedicated Relationship Manager </div>
                <div className="SearchResults_SubheaderReadmoreBtn">read more</div>
              </div>
            </div>
          </div>
          <div className="SearchResults_DeveloperDetailsCont">
            <div className="SearchResults_DeveloperDetails">
              <div className="SearcResultsCard_DeveloperInfoCont">
                <img src='https://blox.xyz/_next/image?url=https%3A%2F%2Fcdn.blox.xyz%2Fusers%2F070723055054-urvashimakwana.webp&w=96&q=75'></img>
                <div>
                  <div className="SearchCard_DeveloperName">Urvashi rautela</div>
                  <div className="SearchCard_DeveloperRatingCont">
                    <img src='https://blox.xyz/assets/icons/green-star.svg'></img>
                    <div className="SearchCard_DeveloperRating">4.7</div>
                  </div>
                </div>
              </div>
              <div className="SearchCard_DeveloperDataDivider"></div>
              <div className="SearchResults_SecondaryDataCont">
                <div className="SearchResults_SecondaryData_PriceRange">3.15Cr-33.89Cr</div>
                <div className="SearchResults_SecondaryData_FloorConfig">2BHK,3BHK,1BHK</div>
              </div>
            </div>
          </div>
          <div className="SearchResults_CardActionBtnCont">
            <div className="SearchResultsCard_CallRMBtn">
              <div className="SearchResultsCard_CallRMBtnCont">
                <img src="https://blox.xyz/_next/image?url=%2Fassets%2Ficons%2Fphone-ring-primary.gif&w=32&q=75" className='SearchResults_CallRMIcon'></img>
                <div className="SearchResultsCard_CallRMBtnText">Call RM</div>
              </div>
            </div>
            <div className="SearchResultsCard_BookAVistBtn">
              <div className="SearchResultsCard_CallRMBtnCont">
                <div className="SearchResultsCard_CallRMBtnText">Book a visit</div>
              </div>
            </div>
          </div> */}
          <div className="CardProducts_Data" onClick={() => navigate(`/property/${property?.Title}`)}>
            <div className="CardProducts_PropertyCard">
              <div className="CardProducts_PropertyCard__Title">
                <Link to="/"></Link>
                <div className="CardProducts__PropertyName">
                  <h1>{property.Title}</h1>
                  <div className="CardHeartCont">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="CardPropertyLocation">
                  <MdOutlineLocationOn className='CardProductsLocationIcon' style={{ fill: 'black' }} />
                  <p className='CardLocationDetails'>{property.detailedLocation}</p>
                </div>
              </div>
              <div className="CardPropertyTags">
                <div className="CardProperty_Slider__Icons">
                  <h4 className='CardPropertyTags_TagName'>Bathrooms</h4>
                  <div className="CardProductsSlider_Tags__TagData">
                    <FaShower className='CardPropertyTags_Icons' /> <span className='CarditemsCount'>{property.Bathrooms}</span>
                  </div>
                </div>
                <div className="CardProperty_Slider__Icons">
                  <h4 className='CardPropertyTags_TagName'>Bedrooms</h4>
                  <div className="CardProductsSlider_Tags__TagData">
                    <MdOutlineBedroomChild className='CardPropertyTags_Icons' /> <span className='CarditemsCount'>{property.Bedrooms}</span>
                  </div>
                </div>
                <div className="CardProperty_Slider__Icons">
                  <h4 className='CardPropertyTags_TagName'>Area</h4>
                  <div className="CardProductsSlider_Tags__TagData">
                    <BsTextarea className='CardPropertyTags_Icons' /> <span className='CarditemsCount'>{property.area}</span>
                  </div>
                </div>
              </div>
              <div className="CardPropertySlider_DataCont">
                <div className="CardPropertySlider_Data">
                  <div className="CardPropertySlider_Description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, tempora in unde deleniti nobis ad laboriosam provident, voluptatum id voluptas soluta, dolore pariatur quo. Aspernatur alias officia impedit ea quia.</p>
                  </div>
                </div>
                <div className="CardPropertySlider_PriceBtnCont">
                  <div className="CardPropertySlider_StatePricecont">
                    <h6 className='CardPropertySlider_State'>{property.state.Forsale ? "For sale" : ""}{property.state.Ongoing ? property.state.Forsale ? ",ongoing" : "ongoing" : ""},{property.state.completed ? property.state.Forsale || property.state.Ongoing ? ",completed" : "completed" : ""}</h6>
                    <h2 className='CardPropertySlider_Price'>{property.Price} Rs</h2>
                  </div>
                  <div className="CardPropertySlider_BtnCont">
                    <div className="CardPropertySlider_BthTitle">
                      Book a Visit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SearchResultsPropertycard