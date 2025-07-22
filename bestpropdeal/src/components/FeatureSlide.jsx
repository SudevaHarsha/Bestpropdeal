import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { MdOutlineLocationOn } from "react-icons/md"
import { FaShower } from "react-icons/fa"
import { MdOutlineBedroomChild } from "react-icons/md"
import { BsTextarea } from "react-icons/bs"
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2"
import { useLike } from './Like/LikeContext'

const FeatureSlide = ({ property, setBookASiteVist }) => {

    const navigate = useNavigate();
    const [like, setLike] = useLike();

    const handleLikeClick = () => {
        if (like.includes(property.Title)) {
            const remainingLikes = like.filter((item) => item != property.Title);
            setLike(remainingLikes);
            localStorage.setItem('like', JSON.stringify(remainingLikes))
        } else {
            const newLikes = [...like, property.Title];
            setLike(newLikes);
            localStorage.setItem('like', JSON.stringify(newLikes));
        }
    }

    return <>
        <div className="FeaturedProductSlider__videoplayer FeaturedVideoPlayer">
            <img src={property.image} className='VideoImg'
                srcSet={`/${property.image}?width=100 100w, /${property.image}?width=200 200w, /${property.image}?width=400 400w, /${property.image}?width=800 800w`}
                sizes="(max-width: 800px) 100vw, 50vw"
                loading="eager"
                fetchpriority="high"
                alt="Feature property slider image"
            ></img>
        </div>
        <div className="FeaturedProducts_Slider__data">
            <div className="FeaturedProducts_Data">
                <div className="FeaturedProducts_PropertyCard">
                    <div className="FeaturedProducts_PropertyCard__Title">
                        <Link to="/"></Link>
                        <div className="FeaturedProducts__PropertyName">
                            <h1>{property.Title}</h1>
                            <div className="HeartCont" onClick={() => { handleLikeClick() }}>
                                {like.includes(property.Title) ? <FaHeart className="fillHeart" /> : <FaRegHeart />}
                            </div>
                        </div>
                        <div className="PropertyLocation">
                            <MdOutlineLocationOn className='ProductsLocationIcon' style={{ fill: 'black' }} />
                            <p className='LocationDetails'>{property.detailedLocation}</p>
                        </div>
                    </div>
                    <div className="FeaturedPropertyTags">
                        <div className="FeaturedProperty_Slider__Icons">
                            <div className='FeaturedPropertyTags_TagName'>Bathrooms</div>
                            <div className="FeaturedProductsSlider_Tags__TagData">
                                <FaShower className='FeaturedPropertyTags_Icons' /> <span className='FeatureditemsCount'>{property.Bathrooms}</span>
                            </div>
                        </div>
                        <div className="FeaturedProperty_Slider__Icons">
                            <div className='FeaturedPropertyTags_TagName'>Bedrooms</div>
                            <div className="FeaturedProductsSlider_Tags__TagData">
                                <MdOutlineBedroomChild className='FeaturedPropertyTags_Icons' /> <span className='FeatureditemsCount'>{property.Bedrooms}</span>
                            </div>
                        </div>
                        <div className="FeaturedProperty_Slider__Icons">
                            <div className='FeaturedPropertyTags_TagName'>Area</div>
                            <div className="FeaturedProductsSlider_Tags__TagData">
                                <BsTextarea className='FeaturedPropertyTags_Icons' /> <span className='FeatureditemsCount'>{property.area}</span>
                            </div>
                        </div>
                    </div>
                    <div className="FeaturedPropertySlider_DataCont">
                        <div className="FeaturedPropertySlider_Data">
                            <div className="FeaturedPropertySlider_Description">
                                <p>{property.description}</p>
                            </div>
                        </div>
                        <div className="FeaturedPropertySlider_PriceBtnCont">
                            <div className="FeaturedPropertySlider_StatePricecont">
                                <p className='FeaturedPropertySlider_State'>{property.state.Forsale ? "For sale" : ""}{property.state.Ongoing ? property.state.Forsale ? ",ongoing" : "ongoing" : ""},{property.state.completed ? property.state.Forsale || property.state.Ongoing ? ",completed" : "completed" : ""}</p>
                                <h2 className='FeaturedPropertySlider_Price'>{property.Price} Rs</h2>
                            </div>
                            <div className="FeaturedPropertySlider_BtnCont">
                                <div className="FeaturedPropertySlider_BthTitle" onClick={() => setBookASiteVist(true)}>
                                    Book a Visit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="FeatureSlideMobileData_Cont">
            <div className="FeatureMobileNameProce_Cont">
                <h2>{property.Title}</h2>
                <p> &#8377; {property.Price}</p>
            </div>
            <div className="FeatureMobileBtn_Cont">
                <button onClick={() => setBookASiteVist(true)}>Book A Visit</button>
                <button onClick={() => navigate(`/property/${property.Title}`)}>View More</button>
            </div>
        </div>

    </>
}

export default FeatureSlide