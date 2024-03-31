import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookSquare ,FaAmazon} from 'react-icons/fa'
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
                            
                            <ul>
                                <li><h3>Overview</h3></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Terms and Conditions</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                            </ul>
                        {/* </div> */}
                        {/* <div> */}
                            
                            <ul>
                                <li><h3>Overview</h3></li>
                                <li><Link to="/">Developers</Link></li>
                                <li><Link to="/">Blogs</Link></li>
                                <li><Link to="/">Press Mentions</Link></li>
                                <li><Link to="/">Bestpropdeal labs</Link></li>
                            </ul>
                        {/* </div> */}
                    </div>
                    <div className="FotterCont_FotterInfo">
                        <div className="Fottercol">
                            <div className="fotterSocialIcons">
                                <Link to="http://www.facebook.com/bestpropdeal">                                   
                                        <button className="FotterSocialIcons_IconBtn"><FaFacebookSquare className='StepperchartIcon__Imagef'/></button>                                  
                                </Link>
                                <Link to="/">
                                        <button className="FotterSocialIcons_IconBtn"><BsTwitter className='StepperchartIcon__Imagef'/></button>
                                </Link>
                                <Link to="http://www.instagram.com/bestpropdeal">
                                        <button  className="FotterSocialIcons_IconBtn"><BsInstagram className='StepperchartIcon__Imagef' /></button>                           
                                </Link>
                                <Link to="/">                                   
                                        <button className="FotterSocialIcons_IconBtn"><BsWhatsapp className='StepperchartIcon__Imagef'/></button>
                                </Link>
                                <Link to="http://www.youtube.com/bestpropdeal">
                                        <button className="FotterSocialIcons_IconBtn"><BsYoutube className='StepperchartIcon__Imagef'/></button>
                                </Link>
                            </div>
                            <div className="FotterGreyCard">
                                <span className="FotterCard_FotterOrangeText">RERA ID:</span>
                                <span className="FotterCard_FotterReraText">A51700007696</span>
                                <p>Method & Madness Technology Pvt Ltd 1107, Lodha Supremus 2, Senapati Bapat Marg, Opp. Kamala Mills Compound, Lower Parel, Mumbai, Maharashtra 400013</p>
                            </div>
                        </div>
                        <div className="Fottercol2">
                            <Link to="/">
                                <div className="FotterListIcon">
                                    {/* <div className="FotterListIconBtn"> */}
                                        <button className="FotterListIconBtn" ><HiOutlineMail className='StepperchartIcon__Imagef'/></button>
                                    {/* </div> */}
                                    {/* <div className="FotterListIconLabel"> */}
                                        <p className="FotterListIconLabel">Email us:</p>
                                        <p className="FotterListIconLabel">sales@bestpropdeal.com</p>
                                    {/* </div> */}
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="FotterListIcon">
                                    {/* <div className="FotterListIconBtn"> */}
                                    <button className="FotterListIconBtn" ><BiPhoneCall className='StepperchartIcon__Imagef'/></button>                                    {/* </div> */}
                                    {/* <div className="FotterListIconLabel"> */}
                                        <p className="FotterListIconLabel">Call us:</p>
                                        <p className="FotterListIconLabel">+91 07969669900</p>
                                    {/* </div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="FotterDivider"></hr>
                <p className='Fotter_Copyright'>@ copyright 2023 bestpropdeal</p>
            {/* </div> */}
        </div>
    </>
}

export default Footer