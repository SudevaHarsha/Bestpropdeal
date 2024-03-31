import React from 'react'
import {FaShower} from "react-icons/fa"
import {MdOutlineBedroomChild} from "react-icons/md"
import {BsTextarea} from "react-icons/bs"
import trusted from "../Assets/trusted.svg"
import { Link,useNavigate } from 'react-router-dom'

const Slide = ({property,index,setBookASiteVist}) => {

    const navigate = useNavigate();

  return <>
    <div className="slider_Slide slider_sliderSlide" onClick={()=>navigate(`/property/${property.position}`)}>
        <div className="slider_propertyCard">
            {/* <Link to={`/property/${property.Property_ID}`}></Link> */}
            <img src={property.image} className='propertyCardImg'></img>
            <div className="propertyCardData propertyCard_Datactn">
                <div className="PropertyCard_propertyData__TopData">
                    <div className='trustedImg_cont'>
                        <img className='TrustedImg' src={trusted}></img> 
                    </div>
                    <div className="Propertydata_propertySecure">
                        <img src='https://blox.xyz/assets/icons/blox-assured.svg' className='secureImage'></img>
                    </div>
                </div>
                <div className="PropertyCard_propertyData__BottomData">
                    <div className="propertycard_propertyNameImgcont">
                        <div className="propertycard_propertyNamecont">
                            <div className="propertyName">{property.Title}</div>
                            <div className="propertyLocation">{property.location}</div>
                        </div>
                        <div className="propertycard_propertyImgcont">
                            <div className="shower">
                                <FaShower /> <span className='itemsCount'>{property.Bathrooms}</span>
                            </div>
                            <div className="shower">
                                <MdOutlineBedroomChild /> <span className='itemsCount'>{property.Bedrooms}</span>
                            </div>
                            <div className="shower">
                                <BsTextarea /> <span className='itemsCount'>{property.area}</span>
                            </div>
                        </div>
                    </div>
                    <div className="propertycard_propertysubdata">
                        <div>
                            <div className="PropertyCurrentState">{property.state.Forsale?"For sale":""}{property.state.Ongoing ? property.state.Forsale?",ongoing":"ongoing":""},{property.state.completed? property.state.Forsale || property.state.Ongoing?",completed":"completed":""}</div>
                            <div className='PropertyPrice'>{property.Price} Rs</div>
                        </div>
                        
                        <div>
                            <div className="Proerties_BookAVisitBtn" onClick={(event)=>{
                                event.stopPropagation();
                                setBookASiteVist(true)
                                }}>
                                <div className='BookAVisitText'>Book A Visit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Slide