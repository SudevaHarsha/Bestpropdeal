import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import FeatureSlide from '../FeatureSlide'
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import Properties from "../../Data/Property.json"

const FeaturedProjectsSlider = ({setBookASiteVist}) => {

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

   /*  const FeaturePropertyItems = [
        { 
            label: 'https://tse3.mm.bing.net/th?id=OIP.dwCeegCO-jM3Jrt-QAWS-QHaEo&pid=Api&P=0&h=180',
            Title:"hdfkhdvghg"
        },
        { 
            label: 'https://tse4.mm.bing.net/th?id=OIP.OGIqgujvRMtK7esSGhJwmAHaEK&pid=Api&P=0&h=180',
            Title:"fuewadzxvc"
        },
        { 
            label: 'https://tse4.mm.bing.net/th?id=OIP.7r1VYH4MNvGD0Z93mmFNjAHaEo&pid=Api&P=0&h=180',
            Title:"loyrewasxcvb"
        },
    ] */

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === Properties.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? Properties.length - 1 : prevSlide - 1));
    };

    return (
        /* <div className="FeaturedProducts_Slider">
            <div className="FeaturedProducts_Slider__container">
                <img src='https://tse3.mm.bing.net/th?id=OIP.dwCeegCO-jM3Jrt-QAWS-QHaEo&pid=Api&P=0&h=180' className='VideoImg'></img>
            </div>
            <div className="FeaturedProducts_Slider__data">
                <div className="FeaturedProducts_Data">
                    hjkghkgyjhvh
                </div>
            </div>
        </div> */
        <div className='FeaturedProductsSlider'>
            {
                Properties.map((property, index) => {
                    return <>
                        <div key={index} className={index===currentSlide ? "TopSlide" : "NormalSlide"}>
                            <FeatureSlide setBookASiteVist={setBookASiteVist} property={property} />
                        </div>
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
                    </>
                })
            }
        </div>
    )
}

export default FeaturedProjectsSlider