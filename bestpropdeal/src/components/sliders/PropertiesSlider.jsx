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

        const desiredOngoingOrder = ["Laxmi Residency", "Sadguru Harmony", "Nano city", "Sarvesh city", "Deep Dhara", "Deepali Paradise","Deep Royal residency", "Deepali residency", "Dashmesh Crystal phase 2","Sunita Palace", "Audumber Crown", "Pinnacle Adharsh"];
        const desiredCompletedOrder = ["Audumber Flower Valley"];

        const desiredOrder = BuildingState.label === 'Ongoing' ? desiredOngoingOrder : BuildingState==='Completed' ? desiredCompletedOrder : [];

        // Function to compare titles and sort the properties array
        const sortedProperties = filteredProps.sort((a, b) => {
            // Get the index of each title in the desired order array
            const indexA = desiredOrder.indexOf(a.Title);
            const indexB = desiredOrder.indexOf(b.Title);

            // Compare the indices
            if (indexA === -1) {
                return 1; // Move items with titles not in desired order to the end
            } else if (indexB === -1) {
                return -1; // Move items with titles not in desired order to the beginning
            } else {
                return indexA - indexB; // Sort based on the indices in the desired order
            }
        });

        setPropertyItems(desiredOrder.length===0 ? filteredProps : sortedProperties);
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