import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Link, useParams } from 'react-router-dom';
import PropertyData from "../../Data/Property.json"

const GallerCont = ({openGallery}) => {

    const { id } = useParams();

    const CurrentProperty = PropertyData[id];

    const [currentImage, setCurrentImage] = useState(0);
    const [isMap, setIsMap] = useState(true);

    const toggleMap = () => {
        setIsMap(!isMap);
      }

    return <>
        <div></div>
        <div className="GalleryModalCont">
            <img src='https://blox.xyz/assets/images/blox-logo-white.svg'></img>
            <div className="GalleryModal_CloseIconCont" onClick={openGallery}>
                <img src='https://blox.xyz/assets/icons/x-secondary.svg'></img>
            </div>
            <div className="Gallery_ImageGalleryCont">
                <div className="GalleryTab_NavWrapper">
                    <div className="StickyWrapper_Cont">
                        <div className="Tabs">
                            <ul className="GalleryNavtan_Cont">
                                <li className="GalleryNavBtn">
                                    <Link to="/"></Link>
                                    <h2>
                                        <div className={`GalleryNavBtnText ${isMap ? "active" : "inactive"}`} onClick={() => setIsMap(true)}>gallery</div>
                                    </h2>
                                </li>
                                <li className="GalleryNavBtn">
                                    <Link to="/"></Link>
                                    <h2>
                                        <div className={`GalleryNavBtnText ${isMap ? "active" : "inactive"}`} onClick={() => setIsMap(false)}>Map</div>
                                    </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="GalleryTabContent">
                        <div className="GalleryTab_DataCont">
                            <div className="GalleryImages_ImageCont">
                                {
                                    isMap ? <div className="GallerySwiperInitialized">
                                        <div className="GallerySwiperWrapper">
                                            <div className="GallerySwiperSlide">
                                                <div className="GallerySwiperImageWrapper">
                                                    {
                                                        [...Array(CurrentProperty?.TotalImages)].map((i, index) => {
                                                            return currentImage === index && <img src={`../../assets/Property-00${CurrentProperty?.id}/Property-00${CurrentProperty?.id}${index + 1}.jpg`} alt={`galleryImage-${index}`} className='GallerySwiperImage'></img>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                        <div style={{ width: "100%", height: "100%" }}>
                                            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                                                <TileLayer
                                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />
                                                <Marker position={[51.505, -0.09]}>
                                                    <Popup>
                                                        A pretty CSS3 popup. <br /> Easily customizable.
                                                    </Popup>
                                                </Marker>
                                                <Marker position={[51.50, -0.09]}>
                                                    <Popup>
                                                        A pretty CSS3 popup. <br /> Easily customizable.
                                                    </Popup>
                                                </Marker>
                                            </MapContainer>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="GalleryImages_ImageIconPagination">
                        <div className="GalleryImages_PaginationImageIcon">
                            <div className="GalleryIconPagination_Imagewrapper">
                                {/* {
                                    CurrentProperty?.Gallery.map((image, index) => {
                                        return <div className="GalleryIconPagination_Icon" onClick={() => setCurrentImage(index)}>
                                            <div>
                                                <img src={image} className='GalleryIconImage'></img>
                                            </div>
                                        </div>
                                    })
                                } */}
                                {
                                    [...Array(CurrentProperty?.TotalImages)].map((i, index) => {
                                        return <div className="GalleryIconPagination_Icon" onClick={() => setCurrentImage(index)}>
                                            <img src={`../../assets/Property-0${CurrentProperty?.id < 10 && 0}${CurrentProperty?.id}/Property-0${CurrentProperty?.id < 10 && 0}${CurrentProperty?.id}${index + 1}.jpg`} alt={`galleryImage-${index}`} className='GalleryIconImage'></img>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="GallerySwiper_NavigationBtn"></div>
                </div>
                <div>
                    <div className="GalleryFilterBtn_Cont"></div>
                    <div>
                        <div className="GalleryFooter">
                            <div>
                                <h2>
                                    <div className="GalleryFotter_Heading">{CurrentProperty?.Title}</div>
                                </h2>
                                <div className="GalleryFotter_SubHeading">{CurrentProperty?.location}</div>
                            </div>
                            <div className="GalleryFotter_RightCont">
                                <div>
                                    <div className="GalleryFotterText1">Configuration</div>
                                    <div className="GalleryFotterText2">{CurrentProperty?.Overview.configuration.join("  ")}</div>
                                </div>
                                <div>
                                    <div className="GalleryFotterText1">Area</div>
                                    <div className="GalleryFotterText2">{CurrentProperty?.area} sqft</div>
                                </div>
                                <div>
                                    <div className="GalleryFotterText1">Price</div>
                                    <div className="GalleryFotterText2">&#8377; {CurrentProperty?.Price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default GallerCont