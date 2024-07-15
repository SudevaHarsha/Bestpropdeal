import React, { lazy } from 'react';
import { FaShower } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import trusted from "../Assets/trusted.webp";
import { useNavigate } from 'react-router-dom';

const Slide = React.memo(({ property, setBookASiteVist }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/property/${property.Title}`);
    };

    return (
        <div key={property.position} className="slider_Slide slider_sliderSlide" onClick={handleClick}>
            <div className="slider_propertyCard">
                {console.log(property.position === 1)}
                <img
                    src={property.image}
                    className='propertyCardImg'
                    srcSet={`/${property.image}?width=100 100w, /${property.image}?width=200 200w, /${property.image}?width=400 400w, /${property.image}?width=800 800w`}
                    sizes="(max-width: 800px) 100vw, 350px"
                    loading={property.position != 0 ? 'lazy' : 'eager'}
                    rel={property.position === 0 ? 'preload' : undefined}
                    alt="property card image"
                />


                <div className="propertyCardData propertyCard_Datactn">
                    <div className="PropertyCard_propertyData__TopData">
                        <div className='trustedImg_cont'>
                            <img loading='lazy' alt="100% trusted property" className='TrustedImg' src={trusted} width="60px" height="60px" />
                        </div>
                        <div className="Propertydata_propertySecure">
                            <img loading='lazy' alt="secure property" src='https://blox.xyz/assets/icons/blox-assured.svg' className='secureImage' />
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
                                <div className="shower slide_area">
                                    <BsTextarea /> <span className='itemsCount'>{property.area}</span>
                                </div>
                            </div>
                        </div>
                        <div className="propertycard_propertysubdata">
                            <div>
                                <div className="PropertyCurrentState">
                                    {property.state.Forsale && "For sale"}
                                    {property.state.Ongoing && (!property.state.Forsale ? "ongoing" : ", ongoing")}
                                    {property.state.completed && (!property.state.Forsale && !property.state.Ongoing ? "completed" : ", completed")}
                                </div>
                                <div className='PropertyPrice'>{property.Price} Rs</div>
                            </div>

                            <div>
                                <div className="Proerties_BookAVisitBtn" onClick={(event) => {
                                    event.stopPropagation();
                                    setBookASiteVist(true);
                                }}>
                                    <div className='BookAVisitText'>Book A Visit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Slide;
