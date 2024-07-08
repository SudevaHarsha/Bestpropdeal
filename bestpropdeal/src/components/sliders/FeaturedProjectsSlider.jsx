import React, { useState, useEffect } from 'react';
import FeatureSlide from '../FeatureSlide';
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import Properties from "../../Data/Property.json";

const FeaturedProjectsSlider = ({ setBookASiteVist }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sortedProperties, setSortedProperties] = useState([]);

    useEffect(() => {
        const desiredOngoingOrder = [
            "Panvelkar Greens", "Dashmesh Pearl", "Sadguru Harmony", "Laxmi Residency", 
            "Deep Dhara", "Panvelkar Sarvesh city", "Deepali residency", "Deepali Paradise", 
            "Nano city", "Deep Royal residency", "Pinnacle Adharsh", "Audumber Flower Valley", 
            "Audumber Crown"
        ];

        // Function to compare titles and sort the properties array
        const sortedProperties = Properties.sort((a, b) => {
            const indexA = desiredOngoingOrder.indexOf(a.Title);
            const indexB = desiredOngoingOrder.indexOf(b.Title);

            if (indexA === -1) {
                return 1; // Move items with titles not in desired order to the end
            } else if (indexB === -1) {
                return -1; // Move items with titles not in desired order to the beginning
            } else {
                return indexA - indexB; // Sort based on the indices in the desired order
            }
        });

        setSortedProperties(sortedProperties);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === sortedProperties.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? sortedProperties.length - 1 : prevSlide - 1));
    };

    return (
        <div className='FeaturedProductsSlider'>
            {
                sortedProperties.map((property, index) => (
                    <div key={index} className={index === currentSlide ? "TopSlide" : "NormalSlide"}>
                        <FeatureSlide setBookASiteVist={setBookASiteVist} property={property} />
                    </div>
                ))
            }
            <div className="FeaturedProductSlider_Navigation">
                <div className="FeaturedProductSlider_BtnCont">
                    <div className="FeaturedProductSlider_NavBtn mobile_FeaturedProductSlider_NavBtn_l" onClick={prevSlide}>
                        <HiArrowSmallLeft />
                    </div>
                    <div className="FeaturedProductSlider_NavBtn mobile_FeaturedProductSlider_NavBtn_r" onClick={nextSlide}>
                        <HiArrowSmallRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjectsSlider;
