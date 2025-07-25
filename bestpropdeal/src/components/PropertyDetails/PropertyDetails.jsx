import React, { useEffect, useState } from "react";
import PriceFloorPlanSlide from "./PriceFloorPlanSlide";
import LocalitySlide from "./LocalitySlide";

import SameareaAndSimilarPropertiesSlider from "./SameareaAndSimilarPropertiesSlider";
import Property from "../../Data/Property.json";
import { useParams } from "react-router-dom";
import LocalityTimer from "./LocalityTimer";
import { GrBike } from "react-icons/gr";
import EnquiryandBookForm from "../../forms/EnquiryandBookForm";
import {
  FaAccessibleIcon,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowDown,
  FaArrowUp,
  FaCalendarPlus,
  FaFacebookSquare,
  FaHome,
} from "react-icons/fa";
import Enquiry from "../../forms/sgwwvwb";
import BookForm from "../../forms/ssss";
import BookASiteVisit from "../../forms/BookASiteVisit";

import MapSection from "./MapSection";

import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
/* import videos from "../../Assets/home.mov" */

import img from "../../Assets/th.jpeg";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsCheck2Circle } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

import { Suspense } from "react";

const PropertyDetails = React.memo(
  ({
    OverviewRef,
    FeaturesRef,
    FloorPlanRef,
    LocalityRef,
    DeveloperRef,
    VideoGalleryRef,
    FAQRef,
  }) => {
    const { id } = useParams();

    const CurrentProperty = Property.find((property) => property.Title === id);
    /* const [CurrentProperty?,setCurrentProperty?] = [{}];

    useEffect(()=>{
        const l = Property.filter((item)=>item.Property_ID==id)
        setCurrentProperty?(l);
    },[]) */
    const [readContent, setReadContent] = useState(false);

    const [activeLoc, setActiveLoc] = useState({});
    const [activeCategory, setActiveCategory] = useState([]);
    console.log(activeLoc);

    /* const [Features,setFeatures] = useState({}); */
    const [readMore, setReadMore] = useState(["overview"]);
    const [callrm, setCallrm] = useState(false);
    const [bookASiteVist, setBookASiteVist] = useState(false);
    /* form validation states*/

    const [isAnswer, setIsAnswer] = useState([]);
    const [pricefloorplanCategories, setPricefloorplanCategories] = useState(
      CurrentProperty?.Overview.configuration
    );
    const [isPricefloorplanCategory, setIsPricefloorplanCategory] = useState(0);
    const [verification, setVerification] = useState(false);
    const [mobileNO, setMobileNo] = useState();
    const [otp, setOtp] = useState([, , , ,]);

    console.log(isPricefloorplanCategory);

    const [name1, setName1] = useState("");
    const [remenberbox, setRemenberbox] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [call, setCall] = useState(false);
    const [mobileerror, setMobileError] = useState();

    /* const [bookASiteVistHome, setBookASiteVistHome] = useState(0); */
    const videos = CurrentProperty?.video;

    const form = useRef();

    //suchendra code

    const [divHeight, setDivHeight] = useState(0);
    const myDivRef = useRef(null);

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        if (entries[0]) {
          setDivHeight(entries[0].contentRect.height);
        }
      });

      if (myDivRef.current) {
        observer.observe(myDivRef.current);
      }

      return () => {
        if (myDivRef.current) {
          observer.unobserve(myDivRef.current);
        }
      };
    }, []);

    //end

    const handleLocFilterClick = ({ item }, event) => {
      console.log(item);
      setActiveLoc({ Lattitude: item.Lattitude, Longitude: item.Longitude , name:item.Name});
    };
    const handleSliderClick = (event) => {
      const target = event.target.closest(".Locality_slide");
      if (target) {
        const item = target.dataset.item; // Assuming 'data-item' contains the item data
        handleLocFilterClick(item);
      }
    };
    const handleLocCategoryClick = (category) => {
      if (activeCategory) {
        const isActive = activeCategory.includes(category);
        if (!isActive) {
          setActiveCategory([...activeCategory, category]);
        } else {
          const remainingCategories = activeCategory.filter(
            (item) => item !== category
          );
          setActiveCategory([...remainingCategories]);
        }
      }
    };

    const categories = ["School", "Hospital", "Bank", "Airport"];

    console.log(activeCategory);
    console.log(activeLoc);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("ok");
    };

    const handleContinue = () => {
      console.log(mobileNO);
      if (mobileNO) {
        setVerification(!verification);
      }
    };

    const handleOtp = (event, index) => {
      const { value } = event.target;
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = value.slice(0, 1);
        return updatedOtp;
      });
      /*  const isOtpComplete = otp.every((digit) => digit !== '');
         if(isOtpComplete){
             setVerification(!verification);
         } */
    };

    const handleOtpSubmit = () => {
      const isOtpComplete = Object.values(otp).every((digit) => digit !== "");
      if (isOtpComplete) {
        setVerification(!verification);
      }
    };

    const handlereadmore = (cat) => {
      const isThere = readMore.includes(cat);
      if (isThere) {
        const remaining = readMore.filter((item) => item !== cat);
        setReadMore([...remaining]);
      } else {
        setReadMore([...readMore, cat]);
      }
    };

    const FeaturesTrue = Object.entries(CurrentProperty?.Features)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);
    const Features = readMore.includes("features")
      ? FeaturesTrue
      : FeaturesTrue.slice(0, 7);

    const Amenities = [
      "Large Green Area",
      "Spa",
      "Luxurious Clubhouse",
      "Gymnasium",
      "Swimming Pool",
      "Badminton Court(s)",
      "Yoga Area",
      "Kids Pool",
    ];

    /* const FloorPlans = [
        "https://tse1.mm.bing.net/th?id=OIP.W1R-nSHIzINnY88ECBgHTgHaF8&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.xLdBM5Vc6GwvHkdPH0IZ4wHaHi&pid=Api&P=0&h=180"
    ] */

    const Localities = Object.keys(CurrentProperty?.Locality.NearByLoc);
    const LocalityTimes = Object.values(CurrentProperty?.Locality.NearByLoc);
    console.log(LocalityTimes);

    const LocalitySlider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide ===
        CurrentProperty?.FloorPlans.filter((img) =>
          img.url.includes(pricefloorplanCategories[isPricefloorplanCategory])
        ).length -
          1
          ? 0
          : prevSlide + 1
      );
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0
          ? CurrentProperty?.FloorPlans.filter((img) =>
              img.url.includes(
                pricefloorplanCategories[isPricefloorplanCategory]
              )
            ).length - 1
          : prevSlide - 1
      );
    };

    const [currentLocalitySlide, setCurrentLocalitySlide] = useState(0);

    const nextLocalitySlide = () => {
      setCurrentLocalitySlide((prevSlide) =>
        prevSlide === CurrentProperty?.Locality.Locations.length - 1
          ? 0
          : prevSlide + 1
      );
    };

    const prevLocalitySlide = () => {
      setCurrentLocalitySlide((prevSlide) =>
        prevSlide === 0
          ? CurrentProperty?.Locality.Locations.length - 1
          : prevSlide - 1
      );
    };

    const handleAnswer = (index) => {
      const IsIndex = isAnswer.includes(index);
      if (IsIndex) {
        const OtherIndexes = isAnswer.filter((i) => i !== index);
        setIsAnswer([...OtherIndexes]);
      } else {
        setIsAnswer([...isAnswer, index]);
      }
    };

    const HandlecallrmFormsubmit = (e) => {
      e.preventDefault();
      const isPhoneNumberValid = /^\d{10}$/.test(mobile);
      const isValidEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      if (!name1) {
        setMobileError("name entered, please check your name");
        return;
      }
      if (!isPhoneNumberValid && email && !isValidEmail) {
        setMobileError("Phone Number and Email");
        return;
      }
      if (!isPhoneNumberValid) {
        setMobileError("Phone Number");
        return;
      }
      if (email && !isValidEmail) {
        setMobileError("Email");
        return;
      }
      emailjs
        .sendForm(
          "service_3hgs8bs",
          "template_egdvnj8",
          form.current,
          "nUcv7KqJIhJ5RUjZg"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log(name1, mobile, email);
      setMobile("");
      setEmail("");
      setName1("");
    };

    const des =
      CurrentProperty.Overview.overview || CurrentProperty.Description;

    return (
      <>
        <div
          className="PropertyDetails_WrapperCont"
          ref={myDivRef}
          style={{ height: "auto" }}
        >
          <div className="PropertyDetails_LeftSection">
            <section id="overview"></section>
            <div id="overview" ref={OverviewRef}>
              <div className="PropertyDetails_Leftsection__Overview">
                <h2 className="LeftSection_OverviewTitle">
                  <div className="LeftSecton_OverviewTitle__Text">Overview</div>
                </h2>
                <div className="LeftSection_OverviewData">
                  <div className="Overview_TruncatedTextCont">
                    <div
                      className={`OverviewTruncatedText ${
                        readMore.includes("overview") ? "show" : "hide"
                      }`}
                    >
                      {CurrentProperty && readMore.includes("overview")
                        ? des
                        : des.substring(0, 12) + "..."}
                      <div
                        className="TruncatedText_ReadMoreBtn"
                        onClick={() => handlereadmore("overview")}
                      >
                        read more
                      </div>
                    </div>
                  </div>
                  <div className="Overview_OverviewGrid">
                    <div className="Overview_OverviewSubGrid">
                      <div>
                        <div className="OverviewSubgrid_Overviewlabel">
                          Configuration
                        </div>
                        <div className="OverviewSubGrid_OverviewData">
                          {CurrentProperty &&
                            CurrentProperty?.Overview.configuration.join("  ")}
                        </div>
                      </div>
                      <div>
                        <div className="OverviewSubgrid_Overviewlabel">
                          Area
                        </div>
                        <div className="OverviewSubGrid_OverviewData">
                          {CurrentProperty && CurrentProperty?.Overview.area}{" "}
                          sqft
                        </div>
                      </div>
                      <div>
                        <div className="OverviewSubgrid_Overviewlabel">
                          Project Status
                        </div>
                        <div className="OverviewSubGrid_OverviewData">
                          {CurrentProperty && CurrentProperty?.state.Ongoing
                            ? "Ready to Move"
                            : CurrentProperty?.state.completed
                            ? "Completed"
                            : "Not Yet Done"}
                        </div>
                      </div>
                      <div>
                        <div className="OverviewSubgrid_Overviewlabel">
                          Price Onwards
                        </div>
                        <div className="OverviewSubGrid_OverviewData">
                          &#8377; {CurrentProperty && CurrentProperty?.Price}
                        </div>
                      </div>
                      <div>
                        <div className="OverviewSubgrid_Overviewlabel">
                          RERA ID
                        </div>
                        <div className="OverviewSubGrid_OverviewData">
                          {CurrentProperty && CurrentProperty?.Property_ID}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="OverviewLeftSection_OverviewListCont">
                        <ul className="OverviewSquareList">
                          {CurrentProperty?.Advantages.map((item) => (
                            <li>
                              <AiFillStar className="BestpropdealAdvangeImgp" />
                              {item}
                            </li>
                          ))}
                          {/*                                             <li><AiFillStar className='BestpropdealAdvangeImgp' />Bandagori Metro is Just 15 km Away</li>
                                            <li><AiFillStar className='BestpropdealAdvangeImgp' />Bandagori Metro is Just 15 km Away</li>
                                            <li><AiFillStar className='BestpropdealAdvangeImgp' />Bandagori Metro is Just 15 km Away</li>
                                            <li><AiFillStar className='BestpropdealAdvangeImgp' />Bandagori Metro is Just 15 km Away</li>
                                            <li><AiFillStar className='BestpropdealAdvangeImgp' />Bandagori Metro is Just 15 km Away</li> */}
                        </ul>
                      </div>
                      <div className="OverviewLeftSection_OverviewBtn">
                        <div className="OverviewLeftSection_OverviewBtncontent">
                          <img src="https://blox.xyz/assets/icons/arrow-down-primary.svg"></img>
                          <div className="OverviewLeftSection_OverviewBtnText"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="price and floor plan"
              className="Amenities_AmenitiesCard"
              ref={FeaturesRef}
            >
              <h2 className="Amenities_AmenitiesTitle">
                Features {FeaturesTrue.length}
              </h2>
              {/* <div className="Amenities_AmenitiesDesktop"> */}
              <div className="Amenities_TagGrid">
                {CurrentProperty?.Features.ceilings && (
                  <div className="AmenitiesTagGrid_Element">
                    <BsCheck2Circle className="CheckIcon" />
                    <div>{CurrentProperty?.Features.ceilings} ceilings</div>
                  </div>
                )}
                {CurrentProperty &&
                  Features &&
                  Features.map((item) => {
                    return (
                      <div className="AmenitiesTagGrid_Element">
                        <BsCheck2Circle className="CheckIcon" />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
              <button
                className="Amenitiesseeall_Text"
                onClick={() => handlereadmore("features")}
              >
                {readMore.includes("features") ? (
                  <FaArrowAltCircleUp />
                ) : (
                  <FaArrowAltCircleDown />
                )}
                {readMore.includes("features") ? "See less" : "see all"}
              </button>
            </div>
            <section id="locality" ref={FloorPlanRef}>
              <div className="PropertyDetailsFloorPlanCont">
                <div className="PriceFloorPlan_TagBox">
                  <div className="PriceFloorPlan_PlanCard">
                    <div className="PriceFloorPlan_TagHeadercont">
                      <div className="PriceFloorPlan_TagHeader">
                        <div className="PriceFloorPlan_HeadingCont">
                          <h2 className="PriceFloorPlan_TextTitle">
                            <div className="PriceFloorPlan_Text">
                              Price Floor Plan
                            </div>
                          </h2>
                          <h2 className="PriceFloorPlan_Header">
                            <div className="PriceFloorPlan_HeaderText"></div>
                          </h2>
                        </div>
                        <div className="PriceFloorPlan_TagsNav">
                          {pricefloorplanCategories.map((item, index) => {
                            return (
                              <div
                                onClick={() =>
                                  setIsPricefloorplanCategory(index)
                                }
                              >
                                <div
                                  className={`PriceFloorPlan_TagNavBtn ${
                                    isPricefloorplanCategory === index
                                      ? "active"
                                      : "inactive"
                                  }`}
                                >
                                  <div className="PriceFloorPlan_TagNavBtn__Textcont">
                                    <div className="PriceFloorPlan_TagNavBtn__Text">
                                      {item}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="PriceFloorPlan_CollapsbleContent">
                      <div className="PriceFloorPlan_TabCont">
                        <div className="PriceFloorPlan_HorizantalSwiper">
                          <div className="PriceFloorPlan_SwipweWrapper">
                            {CurrentProperty?.FloorPlans.filter((img) =>
                              img.url.includes(
                                pricefloorplanCategories[
                                  isPricefloorplanCategory
                                ]
                              )
                            ).map((image, index) => {
                              return (
                                <PriceFloorPlanSlide
                                  image={image}
                                  active={currentSlide === index}
                                />
                              );
                            })}
                          </div>
                          <div className="PriceFloorPlan_SwiperPagination">
                            {CurrentProperty?.FloorPlans.filter((img) =>
                              img.url.includes(
                                pricefloorplanCategories[
                                  isPricefloorplanCategory
                                ]
                              )
                            ).map((item, index) => {
                              return (
                                <span
                                  className={`PriceFloorPlan_PaginationBullets ${
                                    currentSlide === index
                                      ? "active"
                                      : "inactive"
                                  }`}
                                  onClick={() => setCurrentSlide(index)}
                                ></span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="PriceFloorPlan_SwiperNavBtnCont">
                          <div
                            className="PriceFloorPlan_SwiperNavBtn"
                            onClick={prevSlide}
                          >
                            <div className="PriceFloorPlan_SwiperNavIconBtn">
                              {/*  <img src='https://blox.xyz/assets/icons/arrow-left-swiper.svg' className='PriceFloorPlan_SwiperNavIcon'></img> */}
                              <HiArrowSmallLeft className="PriceFloorPlan_SwiperNavIcon" />
                            </div>
                          </div>
                          <div
                            className="PriceFloorPlan_SwiperNavBtn"
                            onClick={nextSlide}
                          >
                            <div className="PriceFloorPlan_SwiperNavIconBtn">
                              {/* <img src='https://blox.xyz/assets/icons/arrow-right-swiper.svg' className='PriceFloorPlan_SwiperNavIcon'></img> */}
                              <HiArrowSmallRight className="PriceFloorPlan_SwiperNavIcon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="FormMobile_Cont">
              <EnquiryandBookForm
                callrm={callrm}
                setCallrm={setCallrm}
                bookASiteVist={bookASiteVist}
                setBookASiteVist={setBookASiteVist}
              />
            </div>

            <div id="developer" ref={LocalityRef} className="LocalityCard">
              {/* <div className="LocalityCard"> */}
              {/* <div> */}
              {/* <div className="Locality_subContainer"> */}
              <div className="Locality_LocalityIndicatorContainer">
                <h3 className="Locality_Title"> Locality</h3>
                {Localities &&
                  Localities.map((item, index) => {
                    return (
                      <div className="Locality_LocalityRow">
                        <img src="https://blox.xyz/assets/icons/clinic-secondary.svg"></img>
                        <div className="LocalityRowDetails">
                          <div className="LocalityRow_SameLine">
                            <div className="LocalityRow_Dest">{item}</div>
                            <div className="LocalityRow_DestTime">{`${
                              LocalityTimes[index] >= 45 ? ">" : "<"
                            } ${
                              LocalityTimes[index] <= 15
                                ? 15
                                : LocalityTimes[index] <= 30
                                ? 30
                                : 45
                            } min`}</div>
                          </div>

                          {LocalityTimes[index] <= 15 ? (
                            <LocalityTimer time={1} />
                          ) : LocalityTimes[index] <= 30 ? (
                            <LocalityTimer time={2} />
                          ) : (
                            <LocalityTimer time={3} />
                          )}
                          {/* {
                                                            if(LocalityTimes[0] <= 15) {

                                                            }
                                                        } */}
                          {/* <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(236,221,238)" }}></div>
                                                        <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(236,221,238)" }}></div>
                                                        <div className="LocalityRow_IndicatorBar" style={{ background: "rgb(242, 116, 86)" }}></div> */}
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* </div> */}
              <div style={{ height: "428px", width: "100%" }}>
                <MapSection
                  property={CurrentProperty}
                  activeLoc={activeLoc}
                  activeCategory={activeCategory}
                />
              </div>
              <div className="LocalityPlaces">
                {/* <div className="LocalityPlaces_BtnCont"> */}
                {/* <div className="LocalityPlaces_BtnContent"> */}
                {categories.map((item, index) => {
                  return (
                    <button
                      className={`LocalityPlaces_BtnCont ${
                        activeCategory.includes(item) ? "active" : "inactive"
                      }`}
                      style={{ border: "none" }}
                      onClick={() => handleLocCategoryClick(item)}
                    >
                      {item}
                    </button>
                  );
                })}
                {/* <button className="LocalityPlaces_BtnCont" style={{ border: "none" }}>Hospital</button>
                        <button className="LocalityPlaces_BtnCont" style={{ border: "none" }}>school</button>
                        <button className="LocalityPlaces_BtnCont" style={{ border: "none" }}>bank</button>
                        <button className="LocalityPlaces_BtnCont" style={{ border: "none" }}>air port</button> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="LocalityPlaces_BtnCont">
                                    <div className="LocalityPlaces_BtnContent">
                                        <div className="LocalityPlaces_BtnText">school</div>
                                    </div>
                                </div>
                                <div className="LocalityPlaces_BtnCont">
                                    <div className="LocalityPlaces_BtnContent">
                                        <div className="LocalityPlaces_BtnText">Bank</div>
                                    </div>
                                </div>
                                <div className="LocalityPlaces_BtnCont">
                                    <div className="LocalityPlaces_BtnContent">
                                        <div className="LocalityPlaces_BtnText">Air port</div>
                                    </div>
                                </div> */}
              </div>
              <div className="LocalitySlider">
                <div className="LocalitySlider_Wrapper">
                  <div
                    className="slides-wrapper"
                    style={{
                      transform: `translateX(-${currentLocalitySlide * 270}px)`,
                      width: `${
                        CurrentProperty?.Locality.Locations.length * 100
                      }%`,
                    }}
                  >
                    {CurrentProperty?.Locality.Locations.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="Locality_slide"
                          onClick={() => {
                            handleLocFilterClick({ item });
                          }}
                          /* onClick={() => handleLocFilterClick( {item} )} */
                        >
                          <LocalitySlide
                            loc={item}
                            active={currentLocalitySlide === index}
                            handleLocFilterClick={handleLocFilterClick}
                            item={item}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="LocalitySlider_NavBtn">
                <div
                  className="LocalitySwiper_NavigationBtn"
                  onClick={prevLocalitySlide}
                >
                  <div className="LocalitySwiper_NavIconBtn">
                    {/* <img className="LocalitySwiper_NavIcon" src='https://blox.xyz/assets/icons/arrow-left-swiper.svg'></img> */}
                    <HiArrowSmallLeft className="LocalitySwiper_NavIcon" />
                  </div>
                </div>
                <div
                  className="LocalitySwiper_NavigationBtn"
                  onClick={nextLocalitySlide}
                >
                  <div className="LocalitySwiper_NavIconBtn">
                    {/* <img className="LocalitySwiper_NavIcon" src='https://blox.xyz/assets/icons/arrow-right-swiper.svg'></img> */}
                    <HiArrowSmallRight className="LocalitySwiper_NavIcon" />
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
            <div id="develop" ref={DeveloperRef} className="developer_div">
              {/* <div class="developer_info_section"> */}
              {/* here in down line i removed developer_squarebox class */}
              {/* <div className=" developer_squarebox "> */}
              <img className=" developer_img" src={CurrentProperty?.logo}></img>
              {/* </div> */}
              <h2 className="develop_info_title">
                Everything You Need To Know
              </h2>
              {/*  <div className='developer_description_section'> */}
              <p className="developer_description">
                {CurrentProperty?.Description.substring(0, 150)}
                {readContent
                  ? CurrentProperty?.Description?.substring(
                      150,
                      Property?.Description?.length
                    )
                  : "..."}
              </p>
              {/* <span className={`developer_description ${readContent ? "show" : "hide"}`}> {CurrentProperty??.Description?.substring(150, Property?.Description?.length)}</span> */}

              {/* <div> */}
              {/* <div className='developer_readmore_container'> */}
              {/* <div className="developer_readmore_button"> */}
              {/* <img className="developer_readmore_buttonimg" src="	https://blox.xyz/assets/icons/arrow-down-secondary.svg"></img> */}
              <button
                className="developer_readmore_container"
                onClick={() => {
                  setReadContent(!readContent);
                }}
              >
                {readContent ? <FaArrowUp /> : <FaArrowDown />}
                {readContent ? "READ LESS" : "READ MORE"}
              </button>
              {/*  </div> */}
              {/* </div> */}
              {/* </div> */}
              {/*  </div> */}
              {/* </div> */}
            </div>
            <div
              id="videoGallery"
              ref={VideoGalleryRef}
              className="videoGalleryCont"
            >
              {/* <video className='videoGalleryVideo' autoPlay muted loop>
                        <source src={videos} type='video/mp4'></source>
                    </video> */}
              <iframe
                className="videoGalleryVideo"
                src={videos}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="qr-section">
              <div>
                <h2 className="faqcard_heading">Rera QR Codes</h2>
              </div>
              <div className="qr-container">
                <div className="qr-incont">
                  <img src={img} alt="QR Code" className="qr-image" />
                  <div className="qr-details">
                    <p>{CurrentProperty.Property_ID}</p>
                    <p>{CurrentProperty?.Title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SameArea_propcont">
              <SameareaAndSimilarPropertiesSlider
                property={CurrentProperty}
                type={false}
                bookASiteVist={setBookASiteVist}
              />
            </div>
            <div className="Similar_propcont">
              <SameareaAndSimilarPropertiesSlider
                property={CurrentProperty}
                type={true}
                setBookASiteVist={setBookASiteVist}
                bookASiteVisit={bookASiteVist}

              />
            </div>
            {/* <div id='QRCodes'>
                    <h2 className='faqcard_heading'>
                        Rera QR Codes
                    </h2>
                    <img src={img}></img>
                </div> */}

            <div id="FAQs" ref={FAQRef}>
              {/* <div className="faqcard_componemt"> */}
              {/* <div className="faqcard_header_component">
                            <div className="faqcard_header"> */}
              <h2 className="faqcard_heading extra_styles_faq_heading">
                Frequently Asked Questions
              </h2>
              {/* </div>
                        </div> */}
              {/* all faq div */}
              {CurrentProperty?.FAQ.map((item, index) => {
                return (
                  <>
                    <div className="faq_question">
                      <h3 className="faq_question_cont_heading">
                        {item.question}
                      </h3>
                      <div
                        className="faq_question_arrow"
                        onClick={() => handleAnswer(index)}
                      >
                        <img src="	https://blox.xyz/assets/icons/arrow-down-secondary.svg"></img>
                      </div>
                    </div>

                    <p
                      className={`faq_question_desc_container ${
                        isAnswer.includes(index) ? "show" : "hide"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </>
                );
              })}
              {/* </div> */}
            </div>
          </div>
          <div
            className="property_DeatilesCont"
            style={{ height: `${divHeight}px` }}
          >
            <div className="property_Deatiles">
              {/* <EnquiryandBookForm callrm={callrm} setCallrm={setCallrm} bookASiteVist={bookASiteVist} setBookASiteVist={setBookASiteVist} /> */}
              {/* <div>
                        <Enquiry bookASiteVist={bookASiteVist} setBookASiteVist={setBookASiteVist} callrm={callrm} setCallrm={setCallrm} />
                    </div> */}
              {/* <div>
                        <div className='property_Deatiles_cont'> */}
              <div className="property_Deatiles_rmcard">
                <div
                  className="property_Deatiles_rmcard_cont"
                  style={{ width: "328px" }}
                >
                  <h2 className="property_Deatiles_rmcard_content_title">
                    Hi! I'm here to answer all your queries.
                  </h2>
                  <div className="property_Deatiles_rmcard_content_name">
                    <div className="property_Deatiles_rmcard_content_rating">
                      <p>{CurrentProperty?.RMName}</p>
                      <div className="property_Deatiles_rmcard_content_row">
                        <MdStars className="property_Deatiles_rmcard_content_row_star" />
                        <p>4.7</p>
                      </div>
                    </div>
                    <div className="property_Deatiles_rmcard_content_img">
                      <img
                        style={{
                          width: "130px",
                          height: "150px",
                          background: "transparent",
                        }}
                        src={CurrentProperty?.RMPhoto}
                      ></img>
                    </div>
                  </div>
                  <div className="property_Deatiles_rmcard_content_button_container">
                    <div className="property_Deatiles_rmcard_content_button_cont">
                      <button
                        className="property_Deatiles_rmcard_content_button"
                        onClick={() => setCallrm(!callrm)}
                      >
                        <IoIosCall className="cllrm_callicon" />
                        CALL RM
                      </button>
                    </div>
                    <div className="property_Deatiles_rmcard_content_button_cont">
                      <button
                        className="property_Deatiles_rmcard_content_button"
                        onClick={() => setBookASiteVist(!bookASiteVist)}
                      >
                        <FaHome />
                        BOOK A SITE VISIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property_Deatiles_enquirycard">
                <div
                  className="property_Deatiles_enquirycard_cont"
                  style={{ width: "328px" }}
                >
                  <h2 className="property_Deatiles_enquirycard_heading">
                    Enquiry form
                  </h2>
                  <form ref={form} onSubmit={HandlecallrmFormsubmit}>
                    <div className="property_Deatiles_enquirycard_month">
                      <div className="inputbox">
                        {/* <FaFacebookSquare className="icon" /> */}
                        <input
                          type="text"
                          value={name1}
                          name="uname"
                          onChange={(e) => setName1(e.target.value)}
                          required
                        />
                        <label className={`${name1 && "labeltop"}`} htmlFor="">
                          Name
                        </label>
                      </div>
                      <div className="inputbox">
                        <input
                          type="text"
                          name="contact"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        <label className={`${mobile && "labeltop"}`} htmlFor="">
                          contactNo
                        </label>
                      </div>
                      <div className="inputbox">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className={`${email && "labeltop"}`} htmlFor="">
                          email
                        </label>
                      </div>
                    </div>
                    <div className="forget">
                      <label htmlFor="">
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    <div className="property_Deatiles_rmcard_content_button_content">
                      <button className="property_Deatiles_rmcard_content_button">
                        <IoIosCall className="cllrm_callicon" />
                        CALL RM
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/*  </div>
                    </div> */}
            </div>
          </div>
          {/* <div className="property_Deatiles_rmcard_callrm_form_container"></div> */}
        </div>
        <div className="SeoLinks_SeoFotterLinks"></div>
        <div></div>
        <div
          className={`${
            callrm && "property_Deatiles_rmcard_callrm_form_container"
          } ${
            !callrm && "property_Deatiles_rmcard_callrm_form_containerdisplay"
          }`}
        >
          <BookForm
            callrm={callrm}
            setCallrm={setCallrm}
            CurrentProperty={CurrentProperty}
          />
        </div>
        <div
          className={`${
            bookASiteVist && "property_Deatiles_rmcard_callrm_form_container"
          } ${
            !bookASiteVist &&
            "property_Deatiles_rmcard_callrm_form_containerdisplay"
          }`}
        >
          <BookASiteVisit
            bookASiteVist={bookASiteVist}
            setBookASiteVist={setBookASiteVist}
          />
        </div>
      </>
    );
  }
);

export default PropertyDetails;
