import React, { useEffect, useState } from 'react'
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import "../../pages/Homepage/HomePage.css"
import PropertyData from "../../Data/Property.json"
import { BiErrorCircle } from 'react-icons/bi';
import SameSlide from './SamAreaAndPropertySlide';

const SameareaAndSimilarPropertiesSlider = ({ property, type , bookASiteVisit , setBookASiteVist}) => {

    const [propertyItems, setPropertyItems] = useState(PropertyData);
    const [currentSameAreaSlide, setCurrentSameAreaSlide] = useState(0);
    const CurrentProperty = PropertyData[1];
    const [SameAreaProperties, setSameAreaProperties] = useState([]);
    const [similarProperties, setSimilarProperties] = useState([]);

    const ln = propertyItems.length;

    const FilterProperties = () => {
        const SameAreaProperties = propertyItems.filter((item) => property.location.split(',')[0] === item.location.split(',')[0]);

        setSameAreaProperties(SameAreaProperties);
        const SimilarTypeProperties = propertyItems.filter((item) => property.Type === item.Type);
        setSimilarProperties(SimilarTypeProperties);
    }

    const FilteredProperties = type ? similarProperties : SameAreaProperties;

    const nextSameareaSlide = () => {
        setCurrentSameAreaSlide((prevSlide) => (prevSlide === FilteredProperties.length - 2 ? 0 : prevSlide + 1));
    };

    const prevSameareaSlide = () => {
        setCurrentSameAreaSlide((prevSlide) => (prevSlide === 0 ? FilteredProperties.length - 2 : prevSlide - 1));
    };

    console.log(FilteredProperties.length)

    useEffect(() => {
        property && FilterProperties();
    }, [property])

    return <>{FilteredProperties.length===1
        ? <>
            <h2 className="SameArea_CardHeader_Title">
                <div className="SameArea_CardHeader_TextNo">{type ? "No Similar Properties" : "No Same Area Properties"} <BiErrorCircle /></div>
            </h2>
        </>
        : <>
            <div className="SameArea_Properties__Cont">
                <div className="SameArea_Properties__CardHeader">
                    <div className="SameArea_CardHeader_Textcont">
                        <h2 className="SameArea_CardHeader_Title">
                            <div className="SameArea_CardHeader_Text">{type ? "Similar Properties" : "Same Area Properties"}</div>
                        </h2>
                    </div>
                    {/* <div className="SameArea_CardHeader_Iconcont">
                        <img className='sameAreaIcon' src='https://blox.xyz/assets/icons/bloxsquare.svg'></img>
                    </div> */}
                </div>
                <div className="slider slider_initialized Property_GalerySlider sliderHorizantal slider_sliderctn slider_backsidehidden same_area">
                    <div className="sliderContainer">
                        <div
                            className="slides-wrapper-samearea"
                            style={{
                                /* transform: `translateX(-${currentSameAreaSlide * (100 / Math.min(3, propertyItems.length))}%)`, */
                                /* width: `${propertyItems.length * 100}%`, */
                                /* transform: `translateX(-${currentSameAreaSlide * (100 / Math.min(3, propertyItems.length))}%)`,
                                width: `${propertyItems.length * (100 / Math.max(3, propertyItems.length-1))}%`, */
                                transform: `translateX(-${currentSameAreaSlide * 420}px)`,
                                /* width: `${propertyItems.length * 100}%`,  */
                            }}
                        >
                            {
                                FilteredProperties.map((propert, index) => {
                                    if (propert.position != property.position) {
                                        return (<div
                                            key={index}
                                            className='slide-same-area'
                                            style={{ "--ln": { ln } }}
                                        >
                                            {<SameSlide property={propert} setBookASiteVist={setBookASiteVist} bookASiteVisit=
                                            {bookASiteVisit}/>}
                                        </div>)
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="slider_sliderNavigation PropertySlider_Navigation">
                    <div className="swiper_btn swiper_btn__Left" onClick={prevSameareaSlide}>
                        <HiArrowSmLeft className='PropertySlider_Arrow' />
                    </div>
                    <div className="swiper_btn" onClick={nextSameareaSlide}>
                        <HiArrowSmRight className='PropertySlider_Arrow' />
                    </div>
                </div>
                {/* <div className="samearea_SwiperPagination same_Area_pagination_ctn">
                    {
                        FilteredProperties.map((item, index) => {
                            if (item.position != property.position) {
                                return <span className={`Same_area_PaginationBullets ${currentSameAreaSlide === index ? "active" : "inactive"}`} onClick={() => setCurrentSameAreaSlide(index)}></span>
                            }
                        })
                    }
                </div> */}
            </div>
        </>
        }
        </>
}

export default SameareaAndSimilarPropertiesSlider