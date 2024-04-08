import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';
import PropertyviewerCardImg from './PropertyviewerCardImg';
import PropertDestination from './PropertDestination';
import Gallery from '../Gallery/Gallery';
import { useParams } from 'react-router-dom';
import Property from "../../Data/Property.json"
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsShare, BsSuitHeart } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import { TfiGallery } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { useLike } from '../Like/LikeContext';


const PropertyViewerSlider = React.memo(({ isGallery, openGallery }) => {

    const [activeItem, setActiveItem] = useState(0);
    const { id } = useParams();
    const [like, setLike] = useLike();
    
    console.log(like);
    

    const CurrentProperty = Property[id];

    const [heart, setHeart] = useState(false);

    const images = CurrentProperty.Gallery.length > 5 ? CurrentProperty.Gallery.slice(0, 5) : CurrentProperty.Gallery;
    /* const Features = readMore.includes("features")?FeaturesTrue:FeaturesTrue.slice(0,7); */

    console.log(like.includes(CurrentProperty.Title));

    const handleLikeClick = () => {
        if (like.includes(CurrentProperty.Title)) {
            const remainingLikes = like.filter((item) => item != CurrentProperty.Title);
            setLike(remainingLikes);
            localStorage.setItem('like', JSON.stringify(remainingLikes))
        } else {
       const newLikes = [...like, CurrentProperty.Title];
            setLike(newLikes);
            localStorage.setItem('like', JSON.stringify(newLikes));
        }
    }

    const handleShareClick = async () => {
        const websiteUrl = 'https://bestpropdeal.onrender.com';
        const shareMessage = `Check out the best realestate dealers: ${websiteUrl}`;
        const imageUrl = '../../Assets/Best-Prop-Deal-Logo .png';
    
        const blob = await fetch(imageUrl).then((response) => response.blob());
        const file = new File([blob], 'image.png', { type: blob.type });
    
        if (navigator.share) {
          navigator.share({
            title: 'Bestpropdeal',
            text: shareMessage,
            url: websiteUrl,
          })
            .then(() => {
              console.log('Shared successfully');
            })
            .catch(error => {
              console.error('Error sharing:', error);
            });
        } else {
          // Fallback handling for browsers that don't support the Web Share API
          alert('Your browser does not support the Web Share API. You can manually share the link: ' + websiteUrl);
        }
      };
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (activeItem === images.length - 1) {
                setActiveItem(0);
            } else {
                setActiveItem(activeItem + 1)
            }
        }, 13000)

        return (() => clearTimeout(timeoutId))
    })

    return <>
        <div className="PropertyCardViewer_MediaContent">
            <div style={{ display: "flex", "flex-direction": "column", background: "rgb(17, 17, 17)", position: "relative", "user-select": "none", width: "100%", height: "100%" }}>
                <div className='PropertyViewer_SliderCounter' /* style={{display: "flex","justify-content": "center","max-width": "100%","flex-wrap": "nowrap",position: "absolute",width: "33%",padding: "7px 0p 0px","align-self": "center","z-index": "1001",filter: "drop-shadow(rgb(34, 34, 34) 0px 1px 8px)",transition: "opacity 400ms ease-in-out 0s",left: "0px","margin-left": "72px",bottom: "0px",opacity: "1"}} */>
                    {
                        images.map((item, index) => {
                            return <ProgressBar
                                progressactive={activeItem >= index}
                            />
                        })
                    }
                </div>
                <div style={{ display: "flex", position: "relative", overflow: 'hidden', "align-items": "center", "justify-content": "center", width: "100%", height: "100%", }}>
                    <div className="PropertyViewerCard_MediaScroller">
                        {images.map((image, index) => {
                            return <PropertyviewerCardImg
                                image={image}
                                active={activeItem === index}
                            />
                        })}
                    </div>
                </div>
                <div style={{ position: "absolute", height: "inherit", width: "inherit", display: 'flex', }}>
                    <div style={{ width: ' 50%', 'z-index': 999, }}></div>
                    <div style={{ width: ' 50%', 'z-index': 999, }}></div>
                </div>
            </div>
            <div className="PropertyCardViewer_CardDataCont">
                <PropertDestination property={CurrentProperty} />
                <div className="PropertyCard_DataCont">
                    <div className="PropertyViewerCard_PropertyData">
                        <div className="PropertyViewerCard_PropertyNameIconCont">
                            <img className='PropertyViewerCard_PropertyIcon' src={CurrentProperty.logo} width="70px" height="70px"></img>
                            <h1 className='PropertyViewerCard_PropertyNameCont'>
                                <div className="PropertyViewerCard_PropertyTitleText">{CurrentProperty.Title}</div>
                            </h1>
                            <div className="PropertyViewerCard_PropertyLongAddressCont">{CurrentProperty.detailedLocation}</div>
                        </div>
                        <div className="PropertyViewerCard_PropertyActnBtnPRangeCtn">
                            <div className='PropertyViewerCard_PropertyCardActionBtn'>
                                <div className="PropertyViewerCard_PropActionBtn">
                                    <button className='PropertyViewerCard_BtnImg_butt' onClick={openGallery}><TfiGallery className='PropertyViewerCard_GalleryBtncontent_butt_icon' /></button>
                                </div>
                                <div>
                                    <div className="PropertyViewerCard_PropActionBtn">
                                        <img src='https://blox.xyz/assets/icons/gallery-primary.svg'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="PropertyViewerCard_PropertyActionBtnRangeCnt">
                            <div className="PropertViewerCard_PropertyActionBtnCont">
                                <div>
                                    <div className="PropertyViewerCard_Btn">
                                        <button className='PropertyViewerCard_BtnImg' onClick={handleShareClick}><FiShare2 className='PropertyViewerCard_BtnImg2' /></button>
                                    </div>
                                </div>
                                <div>
                                    <div className="PropertyViewerCard_Btn" onClick={() => {
                                        handleLikeClick()
                                    }}>
                                        <button className='PropertyViewerCard_BtnImg'><FaHeart className={`${like.includes(CurrentProperty.Title) ? "PropertyViewerCard_BtnImg2active" : "PropertyViewerCard_BtnImg2"}`} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="PropertViewerCard_PropertyRangeBtnCont">
                                <div className='PropertyViewerCard_RangeText'>&#8377; {CurrentProperty.Price}</div>
                            </div>
                        </div>
                        <div className="PropertyViewerCard_PropertyActionBtnSetright">
                            <div className="PropertyViewerCard_GalleryBtncont">
                                <div className="PropertyViewerCard_GalleryBtncontent">
                                    <button className='PropertyViewerCard_BtnImg_butt'><TfiGallery className='PropertyViewerCard_GalleryBtncontent_butt_icon' /></button>
                                    <div className="PropertyViewerCard_GalleryText" onClick={openGallery}>GALLERY</div>
                                </div>
                            </div>
                            <div className="PropertyViewerCard_NavigationBtnCont">
                                <div className="PropertyViewercard_NavigationBtn">
                                    <img src='	https://blox.xyz/assets/icons/arrow-back-primary.svg' className="PropertyViewercard_NavigationBtnIcon"></img>
                                </div>
                                <div className="PropertyViewercard_NavigationBtn">
                                    <img src='	https://blox.xyz/assets/icons/arrow-next-primary.svg' className="PropertyViewercard_NavigationBtnIcon"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PropertyViewerCard_PropertySubData">
                        <div className="PropertyViewerCard_PropertyInfoCont">
                            <div className="PropertyViewerCard_ShortAddressCont">{CurrentProperty.location}</div>
                            <div className="PropertyViewerCard_MobileRangelabel">&#8377; {CurrentProperty.Price}</div>
                        </div>
                        <div className="PropertViewerCard_CallRMActionBtnCont">
                            <div className="PropertyViewerCard_MobileCallRMBtn">
                                <div className="MobileCallRMBtn_content">
                                    <div className="mobileCallRM_Text">CALL RM</div>
                                    <img src='https://blox.xyz/_next/image?url=%2Fassets%2Ficons%2Fphone-ring-primary.gif&w=32&q=75' className='MobileCallRMBtn_Icon'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PropertyViewerCard_PropertySubDataCtn__ShLIt">
                        <div className="PropertyViewerCard_PropertyInfoCtn__T37bU">
                            <div className="PropertyViewerCard_PropertyAddressShort__4deRi">{CurrentProperty.location}</div>
                            <div className="PropertyViewerCard_PropertyMobileProce">&#8733; {CurrentProperty.Price}</div>
                        </div>
                        <div className="PropertyViewerCard_CallRmActionBtnCtn__SQDNQ">
                            <div className="PropertyViewerCard_PropActionBtn__K0p_l">
                                <div className="Button_ButtonContent-md__1XTQo">
                                    <div className="someworstbtn">call RM</div>
                                    <img className='someworsticon' src='https://blox.xyz/_next/image?url=%2Fassets%2Ficons%2Fphone-ring-primary.gif&w=32&q=75'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="PropertyCardViewer_PropertyTagsCont">
            <div className="PropertyViewerCard_SecureIconNameCont">
                <img className='PropertyViewerCard_SecureIcon' src='https://blox.xyz/assets/icons/blox-assured.svg'></img>
                <div className="PropertyViewerCard_SecureIconName">Best Prop Deal 100% Assured</div>
            </div>
        </div>
    </>
})

export default PropertyViewerSlider