import React, { useEffect, useState } from 'react'
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import Slide from '../Slide';
import "../../pages/Homepage/HomePage.css"
import PropertyData from "../../Data/Property.json"
import { BiErrorCircle } from 'react-icons/bi';

const SameareaAndSimilarPropertiesSlider = ({ property, type }) => {

    /*     const OngoingPropertyItems = [
            {
                Title: 'Audumber Flower Valley',
                image: "https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg",
                location: 'Badlapur, mumbai',
                detailedLocation: "Badlapur, Kulgaon Badlapur, Mumbai Metropolitan Region, Ambernath, Thane, Maharashtra, 421503, India",
                state: {
                    Forsale: true,
                    Ongoing: true,
                    completed: false,
                },
                Bedrooms: 1,
                Bathrooms: 1,
                area: 400,
                Price: "1,692,000",
                onwords: false,
                SearchFilters: [
                    "1RK", "1BHK", "2BHK", "3BHK"
                ],
                Type: "Villa"
            },
            {
                Title: 'Dashmehsh Crystal Phase 2',
                image: "https://www.bestpropdeal.com/wp-content/uploads/2022/08/dhashamesh-night-net-488x326.jpg",
                location: 'Kharvani, mumbai',
                detailedLocation: "Kharvai, KHARVAI NAKA, Kulgaon Badlapur, Mumbai Metropolitan Region, Ambernath, Thane, Maharashtra, India",
                state: {
                    Forsale: true,
                    Ongoing: true,
                    completed: false,
                },
                Bedrooms: 1,
                Bathrooms: 2,
                area: 415,
                Price: "1,699,000",
                onwords: false,
                SearchFilters: [
                    "1BHK", "2BHK", "3BHK"
                ],
                Type: "Duplex"
            },
            {
                Title: 'Nano city',
                image: "https://www.bestpropdeal.com/wp-content/uploads/2021/07/Cam_06_Night.jpg",
                location: 'southeast, mumbai',
                detailedLocation: "Nano city, opp Indian Oil petrol Pump, Karjat Road, Joveli, Badlapur East - 421503",
                state: {
                    Forsale: true,
                    Ongoing: true,
                    completed: false,
                },
                Bedrooms: 0,
                Bathrooms: 2,
                area: 0,
                Price: "1,599,000",
                onwords: false,
                SearchFilters: [
                    "1RK", "1BHK", "2BHK"
                ],
                Type: "Duplex"
            },
            {
                Title: 'JR Regency',
                image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/B-Wing-_-FRONT-SIDE-488x326.jpg",
                location: 'southeast, mumbai',
                detailedLocation: "Ambernath, Station Road, Ambernath, Ulhasnagar, Thane, Maharashtra, 421501, India",
                state: {
                    Forsale: true,
                    Ongoing: true,
                    completed: false,
                },
                Bedrooms: 1,
                Bathrooms: 2,
                area: 0,
                Price: "1,800,000",
                onwords: true,
                SearchFilters: [
                    "1RK", "1BHK"
                ],
                Type: "Studio"
            },
            {
                Title: 'Shubh Arambh',
                image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/RG-VIEW-HIGH-RES-488x326.jpg",
                location: 'southeast, mumbai',
                detailedLocation: "Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
                state: {
                    Forsale: true,
                    Ongoing: true,
                    completed: false,
                },
                Bedrooms: 1,
                Bathrooms: 1,
                area: 0,
                Price: "1,303,500",
                onwords: true,
                SearchFilters: [
                    "1RK", "1BHK", "2BHK", "3BHK"
                ],
                Type: "Apartment"
            },
        ] */

    /* const CompletedPropertyItems = [
        {
            Title: 'Omkar Apartments Phase 2',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/omkar-2-Copy-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation: "KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: true,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 1,
            Bathrooms: 1,
            area: 0,
            Price: "1,023,000",
            onwords: true,
            SearchFilters: [
                "1RK", "2BHK", "3BHK"
            ],
            Type: "Independent House"
        },
        {
            Title: 'Shrushti Prarambh',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/Side_View-1-1-488x326.jpg",
            location: 'Kharvani, mumbai',
            detailedLocation: "Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: false,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 2,
            Bathrooms: 2,
            area: 0,
            Price: "1,089,000",
            onwords: true,
            SearchFilters: [
                "1BHK", "2BHK", "3BHK"
            ],
            Type: "Duplex"
        },
        {
            Title: 'Omkar Residency',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/cam-6-new-Copy-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation: "KHARVAI NAKA, Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: false,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 1,
            Bathrooms: 1,
            area: 0,
            Price: "1,056,000",
            onwords: true,
            SearchFilters: [
                "1BHK", "2BHK", "3BHK"
            ],
            Type: "Duplex"
        },
        {
            Title: 'OMKAR APARTMENTS',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/06/arial-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation: "Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: true,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 1,
            Bathrooms: 1,
            area: 0,
            Price: "1,150,000",
            onwords: false,
            SearchFilters: [
                "1BHK", "2BHK", "3BHK"
            ],
            Type: "Independent House"
        },
        {
            Title: 'Dashmesh Crystal',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/ARIAL-VIEW-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation: "KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: false,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 1,
            Bathrooms: 1,
            area: 0,
            Price: "1,450,000",
            onwords: false,
            SearchFilters: [
                "1RK", "1BHK", "2BHK"
            ],
            Type: "Apartment"
        },
        {
            Title: 'Sidditech homes',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/03/cf5c889fffb247b-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation: "KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
            state: {
                Forsale: false,
                Ongoing: false,
                completed: true,
            },
            Bedrooms: 0,
            Bathrooms: 0,
            area: 0,
            Price: "1,750,000",
            onwords: false,
            SearchFilters: [
                "1BHK", "2BHK", "#BHK"
            ],
            Type: "Duplex"
        },
    ] */

    const [propertyItems, setPropertyItems] = useState(PropertyData);
    const [currentSameAreaSlide, setCurrentSameAreaSlide] = useState(0);
    const CurrentProperty = PropertyData[1];
    const [SameAreaProperties, setSameAreaProperties] = useState([]);
    const [similarProperties, setSimilarProperties] = useState([]);

    const ln = propertyItems.length;

    const FilterProperties = () => {
        const SameAreaProperties = propertyItems.filter((item) => property.location.split(',')[0] === item.location.split(',')[0]);
        /* selectedLocation.includes(item.location.split(',')[0]) */
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
                                            {<Slide property={propert} />}
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
                <div className="samearea_SwiperPagination same_Area_pagination_ctn">
                    {
                        FilteredProperties.map((item, index) => {
                            if (item.position != property.position) {
                                return <span className={`Same_area_PaginationBullets ${currentSameAreaSlide === index ? "active" : "inactive"}`} onClick={() => setCurrentSameAreaSlide(index)}></span>
                            }
                        })
                    }
                </div>
            </div>
        </>
        }
        </>
}

export default SameareaAndSimilarPropertiesSlider