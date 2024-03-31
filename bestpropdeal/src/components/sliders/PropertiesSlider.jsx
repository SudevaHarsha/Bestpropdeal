import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem'
import Slide from '../Slide';
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import { Link } from 'react-router-dom';
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import Property from "../../Data/Property.json"

const PropertiesSlider = ({ setBookASiteVist }) => {

    const [activeItem, setActiveItem] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slideMoveWidth = windowWidth > 460 ? 420 : 370;
    console.log(slideMoveWidth);

    const listItems = [
        { label: 'Ongoing' },
        { label: 'Completed' },
        { label: 'Upcomming' },
        // Add more items as needed
    ];

    /* const OngoingPropertyItems = [
        {
            Title: 'Audumber Flower Valley',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg",
            location: 'Badlapur, mumbai',
            detailedLocation:"Badlapur, Kulgaon Badlapur, Mumbai Metropolitan Region, Ambernath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"Kharvai, KHARVAI NAKA, Kulgaon Badlapur, Mumbai Metropolitan Region, Ambernath, Thane, Maharashtra, India",
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
            detailedLocation:"Nano city, opp Indian Oil petrol Pump, Karjat Road, Joveli, Badlapur East - 421503",
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
            detailedLocation:"Ambernath, Station Road, Ambernath, Ulhasnagar, Thane, Maharashtra, 421501, India",
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
            detailedLocation:"Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
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
    ]

    const CompletedPropertyItems = [
        {
            Title: 'Omkar Apartments Phase 2',
            image: "https://www.bestpropdeal.com/wp-content/uploads/2020/09/omkar-2-Copy-488x326.jpg",
            location: 'southeast, mumbai',
            detailedLocation:"KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"KHARVAI NAKA, Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"Badlapur, Ambarnath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
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
            detailedLocation:"KHARVAI NAKA, Ambarnath, Thane, Maharashtra, 421503, India",
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

    const [propertyItems, setPropertyItems] = useState(Property);

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
        setPropertyItems(index ? CompletedPropertyItems : OngoingPropertyItems)
    };


    const [currentSlide, setCurrentSlide] = useState(0);

    const PropertyState = (BuildingState, index) => {
        const Totalprops = Property;
        if (BuildingState === "item") {
            setPropertyItems(Totalprops);
        }
        /* const Totalprops = OngoingPropertyItems.concat(CompletedPropertyItems); */
        const filteredProps = Totalprops.filter((item) => {
            return item.BuildingState === BuildingState.label
        })
        console.log(filteredProps)
        console.log(BuildingState)
        setActiveItem(index === activeItem ? null : index);
        setPropertyItems(filteredProps);
    }

    const nextNum = windowWidth > 460 ? 3 : 1;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === propertyItems.length - nextNum ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? propertyItems.length - nextNum : prevSlide - 1));
    };

    console.log(currentSlide);

    return (
        <div className='proertiesSlider_propertiesGalery'>
            <div>
                <div className="PropertiesSlider_PropertiesTypecontainer">
                    <div className="PropertiesSlider_PropertiesTabs">
                        <ul className="PropertiesSlider_UnderlinedTabs">
                            {/* <li className="PropertiesSlider_Tabs__ListElements">
                            <a>
                                <h2 className="PropertiesSlider_Tabs__Tabtiltle">Ongoing</h2>
                            </a>
                        </li>
                        <li className="PropertiesSlider_Tabs__ListElements">
                            <a>
                                <h2 className="PropertiesSlider_Tabs__Tabtiltle">Completed</h2>
                            </a>
                        </li> */}
                            {listItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    label={item.label}
                                    active={activeItem === index}
                                    onClick={() => PropertyState(item, index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="slider slider_initialized Property_GalerySlider sliderHorizantal slider_sliderctn slider_backsidehidden">
                        <div className="sliderContainer">
                            <div
                                className="slides-wrapper"
                                style={{
                                    /* transform: `translateX(-${currentSlide * (100 / 4.4)}%)`,
                                    width: `${propertyItems.length * 100}%`, */
                                    transform: `translateX(-${currentSlide * slideMoveWidth}px)`
                                    /* "--cs":{currentSlide} */
                                }}
                            >
                                {
                                    propertyItems.map((property, index) => {
                                        return (<div
                                            key={index}
                                            className='slide'
                                        >
                                            {<Slide setBookASiteVist={setBookASiteVist} property={property} index={index} />}
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="slider_sliderNavigation PropertySlider_Navigation">
                        <div className="swiper_btn swiper_btn__Left" onClick={prevSlide}>
                            <HiArrowSmLeft className='PropertySlider_Arrow' />
                        </div>
                        <div className="swiper_btn" onClick={nextSlide}>
                            <HiArrowSmRight className='PropertySlider_Arrow' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="propertiesSlider_SeeallPropertiesbtn">
                <div className="SeeAllBtnCont">
                    <div className="SeeAllBtnTextCont">
                        <div className="SeeAllBtnText" onClick={() => PropertyState("item", 2)}>SEE ALL</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default PropertiesSlider