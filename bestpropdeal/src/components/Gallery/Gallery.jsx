import React from 'react'
import "./Gallery.css"
import {Link} from "react-router-dom"

const Gallery = (isGallery,closeGallery) => {
  return <>
    <div className="GalleryModal">
        <div></div>
        <div className="GalleryModalCont">
            <img src='https://blox.xyz/assets/images/blox-logo-white.svg'></img>
            <div className="GalleryModal_CloseIconCont" onClick={closeGallery}>
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
                                        <div className="GalleryNavBtnText">Map</div>
                                    </h2>
                                </li>
                                <li className="GalleryNavBtn">
                                    <Link to="/"></Link>
                                    <h2>
                                        <div className="GalleryNavBtnText">Map</div>
                                    </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="GalleryTabContent">
                        <div className="GalleryTab_DataCont">
                            <div className="GalleryImages_ImageCont">
                                <div className="GallerySwiperInitialized">
                                    <div className="GallerySwiperWrapper">
                                        <div className="GallerySwiperSlide">
                                            <div className="GallerySwiperImageWrapper">
                                                <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='GallerySwiperImage'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="GalleryImages_ImageIconPagination">
                        <div className="GalleryImages_PaginationImageIcon">
                            <div className="GalleryIconPagination_Imagewrapper">
                                <div className="GalleryIconPagination_Icon">
                                    <div>
                                        <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='GalleryIconImage'></img>
                                    </div>
                                </div>
                                <div className="GalleryIconPagination_Icon">
                                    <div>
                                        <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='GalleryIconImage'></img>
                                    </div>
                                </div>
                                <div className="GalleryIconPagination_Icon">
                                    <div>
                                        <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='GalleryIconImage'></img>
                                    </div>
                                </div>
                                <div className="GalleryIconPagination_Icon">
                                    <div>
                                        <img src='https://www.bestpropdeal.com/wp-content/uploads/2022/08/cam04-aniket-488x326.jpg' className='GalleryIconImage'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="GallerySwiper_NavigationBtn"></div>
                </div>
                <div>
                    <div className="GalleryFilterBtn_Cont"></div>
                    <div>
                        <div className="GalleryFooter">
                            <div className='GalleryFooter_div'>
                                <div>
                                <h2>
                                    <div className="GalleryFotter_Heading">RUNWAL FORESTS</div>
                                </h2>
                                </div>
                                <div className="GalleryFotter_SubHeading">RUNWAL FORESTS</div>
                            </div>
                            <div className="GalleryFotter_RightCont">
                                <div className='GalleryFooter_div'>
                                    <div className="GalleryFotterText1">Configuration</div>
                                    <div className="GalleryFotterText2">1BHK,2BHK,3BHK</div>
                                </div>
                                <div className='GalleryFooter_div'>
                                    <div className="GalleryFotterText1">Configuration</div>
                                    <div className="GalleryFotterText2">1BHK,2BHK,3BHK</div>
                                </div>
                                <div className='GalleryFooter_div'>
                                    <div className="GalleryFotterText1">Configuration</div>
                                    <div className="GalleryFotterText2">1BHK,2BHK,3BHK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Gallery