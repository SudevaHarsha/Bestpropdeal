import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaAmazon } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'

const Footer = () => {
    return <>
        <div className="Fotter">
            {/* <div className="FotterCont"> */}
            {/* <div className="Fotter_logo"> */}
            {/* <img className='Fotter_Logo__Img' src='https://blox.xyz/assets/icons/blox-logo-white.svg' style={{ color: 'transparent' }}></img> */}
            {/* </div> */}
            <div className="FotterLinksCont">
                <div className="FotterCont_FotterLinks">
                    {/* <div> */}
                    <div>
                    <ul>
                        <li><h3>Overview</h3></li>
                        <li><Link aria-label='Read more about bestpropdeal' to="/about">About Us</Link></li>
                        <li><Link aria-label='conatct bestpropdeal' to="/contact">Contact Us</Link></li>
                        <li><Link aria-label='Bestpropdeal Terms and Conditions' to="/terms">Terms and Conditions</Link></li>
                        <li><Link aria-label='bestpropdeal Privacy and Policy' to="/policy">Privacy Policy</Link></li>
                    </ul>
                    </div>
                    {/* </div> */}
                    {/* <div> */}
                    <div>
                    <ul>
                        <li><h3>Overview</h3></li>
                        <li><Link aria-label='Bestpropdeal Developers' to="/developers">Developers</Link></li>
                        <li><Link aria-label='blog' to="/">Blogs</Link></li>
                        <li><Link aria-label='Bestpropdeal-Mentions' to="/">Press Mentions</Link></li>
                        <li><Link aria-label='Bestpropdeal Awards' to="/awards">Bestpropdeal Awards</Link></li>
                    </ul>
                    </div>
                    {/* </div> */}
                </div>
                <div className="FotterCont_FotterInfo">
                    <div className="Fottercol">
                        <div className="fotterSocialIcons">
                            <Link aria-label='Read more about bestpropdeal on facebook' to="http://www.facebook.com/bestpropdeal">
                                <button aria-label='facebook' className="FotterSocialIcons_IconBtn" style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(23, 169, 253, 0.4) 0px 0px 0px 2px, rgba(23, 169, 253, 0.65) 0px 4px 6px -1px, rgba(23, 169, 253, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#1759fd' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}>
                                    <FaFacebookSquare className='StepperchartIcon__Imagef' />
                                </button>
                            </Link>

                            <Link aria-label='Read more about bestpropdeal on twitter' to="/">
                                <button aria-label='twitter' className="FotterSocialIcons_IconBtn" style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(29, 161, 242, 0.4) 0px 0px 0px 2px, rgba(29, 161, 242, 0.65) 0px 4px 6px -1px, rgba(29, 161, 242, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#1da1f2' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}>
                                    <BsTwitter className='StepperchartIcon__Imagef' />
                                </button>
                            </Link>

                            <Link aria-label='Read more about bestpropdeal on instagram' to="http://www.instagram.com/bestpropdeal">
                                <button aria-label='instagram' className="FotterSocialIcons_IconBtn" style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(225, 48, 108, 0.4) 0px 0px 0px 2px, rgba(225, 48, 108, 0.65) 0px 4px 6px -1px, rgba(225, 48, 108, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#e1306c' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}>
                                    <BsInstagram className='StepperchartIcon__Imagef' />
                                </button>
                            </Link>

                            <Link aria-label='Read more about bestpropdeal on whatsapp' to="/">
                                <button aria-label='whatsapp' className="FotterSocialIcons_IconBtn" style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(37, 211, 102, 0.4) 0px 0px 0px 2px, rgba(37, 211, 102, 0.65) 0px 4px 6px -1px, rgba(37, 211, 102, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#25d366' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}>
                                    <BsWhatsapp className='StepperchartIcon__Imagef' />
                                </button>
                            </Link>

                            <Link aria-label='Read more about bestpropdeal on youtube' to="http://www.youtube.com/bestpropdeal">
                                <button aria-label='youtube' className="FotterSocialIcons_IconBtn" style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(255, 0, 0, 0.4) 0px 0px 0px 2px, rgba(255, 0, 0, 0.65) 0px 4px 6px -1px, rgba(255, 0, 0, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ff0000' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}>
                                    <BsYoutube className='StepperchartIcon__Imagef' />
                                </button>
                            </Link>

                        </div >
                        <div className="FotterGreyCard">
                            <span className="FotterCard_FotterOrangeText">RERA ID:</span>
                            <span className="FotterCard_FotterReraText">A51700007696</span>
                            <p>B-14, Building Vishwashanti CHS, Vivekanand Nagar, Near Ambika Hotel Badlapur East 421503</p>
                        </div>
                    </div >
                    <div className="Fottercol2">
                        <Link aria-label='Email to bestpropdeal' to="/">
                            <div className="FotterListIcon">
                                {/* <div className="FotterListIconBtn"> */}
                                <button className="FotterListIconBtn"  style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(255, 0, 0, 0.4) 0px 0px 0px 2px, rgba(255, 0, 0, 0.65) 0px 4px 6px -1px, rgba(255, 0, 0, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ff0000' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}><HiOutlineMail className='StepperchartIcon__Imagef' /></button>
                                {/* </div> */}
                                {/* <div className="FotterListIconLabel"> */}
                                <p className="FotterListIconLabel">Email us:</p>
                                <p className="FotterListIconLabel">sales@bestpropdeal.com</p>
                                {/* </div> */}
                            </div>
                        </Link>
                        <Link aria-label='call to bestpropdeal' to="/">
                            <div className="FotterListIcon">
                                {/* <div className="FotterListIconBtn"> */}
                                <button className="FotterListIconBtn"  style={{ transition: "box-shadow 0.3s", boxShadow: "none" }} onMouseOver={(e) => { e.target.style.boxShadow = "rgba(64, 227, 75, 0.4) 0px 0px 0px 2px, rgba(35, 205, 55, 0.65) 0px 4px 6px -1px, rgba(255, 0, 0, 0.08) 0px 1px 0px inset"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#00ff80' }} onMouseOut={(e) => { e.target.style.boxShadow = "none"; e.target.querySelector('.StepperchartIcon__Imagef').style.color = '#ffffff' }}><BiPhoneCall className='StepperchartIcon__Imagef' /></button>                                    {/* </div> */}
                                {/* <div className="FotterListIconLabel"> */}
                                <p className="FotterListIconLabel">Call us:</p>
                                <p className="FotterListIconLabel">+91-7969669900 </p>
                                {/* </div> */}
                            </div>
                        </Link>
                    </div>
                </div >
            </div >
            <hr className="FotterDivider"></hr>
            <p className='Fotter_Copyright'>@ copyright 2023 bestpropdeal</p>
            {/* </div> */}
        </div >
    </>
}

export default Footer