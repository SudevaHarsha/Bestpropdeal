import React, { useState } from 'react'
import "./Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx"
import {MdOutlineOtherHouses} from "react-icons/md"
import {IoIosClose} from "react-icons/io"
import mini_logo from "../../Assets/mini-logo.svg"
import Properties from "../../Data/Property.json"
import ShareOnFacebook from '../../components/Shares/FacebookShare';

const Navbar = ({ type, bcolor }) => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    return <>
        <div className="Header_Header__HOME" style={{ '--type': type }}>
            <div className='Header_Header__container Header_Desktop__Header Actionbar_' style={{ '--color': bcolor }}>
                <div className="Actionbar_left__leftActionbar">
                    <div className="Header_DesktopLeftHeader">
                        <a href='/' className='Header_DesktopLeftHeader__BestpropDealLink'>
                            <div>
                                <h1>BestpropDeal</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='Header_HeaderRightContainer'>
                    {/* <div className="Header_DesktoRightHeader">
                <div className="Header_HeaderActions">
                    <select className="HeaderMenu_LocationMenu">
                        <option value="mumbai">Mumbai</option>
                        <option value="thane">thane</option>
                        <option value="navi-mumbai">Navi mumbai</option>
                    </select>
                    <div className="Header_HeaderMenu">
                        <div className="HeaderMenu_NavIcon">
                            <span>
                                <div className="Header_IconButton Header_IconButton__darkButton">
                                    <img src='https://blox.xyz/assets/icons/user-primary.svg'></img>
                                </div>
                            </span>
                            <div className='Header_IconButton Header_IconButton__darkButton Header_TransparentIcon'>
                                <img src='https://blox.xyz/assets/icons/arrow-down-primary.svg'></img>
                            </div>
                        </div>
                        <div className={`HeaderMenu__preMenu ${menuOpen ? 'HeaderMenu_open' : ""}`} onClick={()=> setMenuOpen(!menuOpen)}>
                            <div className="HeaderMenu_Container">
                                <div className="HeaderMenu_Text__Heading">"Discover.Experience.Buy"</div>
                                <div className="HeaderMenu_Text__Description">
                                    <div className="Header_DescriptionText">Get Personalized Experience</div>
                                    <div className="Header_DescriptionText">By Logging in</div>
                                </div>
                                <div className="HeaderMenu_Text__BtnGrid"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                    <div className="Header_DesktoRightHeader">
                        <NavLink to="/">Home</NavLink>
                        <div className="Header_DesktoRightHeaderp" onClick={()=>navigate("/search", { state: { filteredResults: Properties} })}>Properties</div>                    </div>
                </div>
            </div>
            <div className={`HeaderMobileNavBar_Container ${menuOpen ? "open" : "close"}`} style={{ '--color': bcolor }}>
                <div className="HeaderMobile_LeftSection">
                    <div className="HeaderMobile_LeftLogoCont">
                        <Link to="/">
                            <div>
                                <img src={mini_logo} alt='Bestpropdeal-logo'></img>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="HeaderMobile_RightSection">
                    <div className="HeaderMobile_RightSectionCont">
                        <div className="HeaderMobile_RightActions">
                            <div className="HeaderMobile_HeaderMenu">
                                <div className="HeaderMobile_RightIconBtn" onClick={()=>setMenuOpen(!menuOpen)}>
                                    {
                                        menuOpen ? <IoIosClose /> : <RxHamburgerMenu />
                                    }
                                </div>
                                <div className={`HeaderMenu_MenuCont ${menuOpen ? "open" : "close"}`}>
                                    <div className="HeaderMobileHeadingLoginCont">
                                        <div className="HeaderMobile_Heading">Discover Experience Buy</div>
                                        {/* <div className="HeaderMobile_SubHeading">
                                            <div className="HeaderMobile_SubHeadingText">Get Trusted Experience</div>
                                            <div className="HeaderMobile_SubHeadingText">Login To Fullfill Your Dreams</div>
                                        </div>
                                        <div className="HeaderMobile_ActionBtnGrid">
                                            <div className="HeaderMobile_LoginBtn">
                                                <div className="HeaderMobile_LoginBtnCont">
                                                    <div className="HeaderMobile_LoginBtnText">Login</div>
                                                </div>
                                            </div>
                                            <div className="HeaderMobile_LoginBtn HeaderMobile_SignupBtn">
                                                <div className="HeaderMobile_LoginBtnCont">
                                                    <div className="HeaderMobile_LoginBtnText">Sign Up</div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="HeaderMobile_MenuList">
                                        <ul>
                                            <li>
                                                <NavLink to="/">
                                                <div className="HeaderMobile_MenuLabel">
                                                    <MdOutlineOtherHouses />
                                                    Home
                                                </div>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <div className="HeaderMobile_MenuLabel" onClick={()=>navigate("/search", { state: { filteredResults: Properties} })}>
                                                    <MdOutlineOtherHouses />
                                                    Properties
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="HeaderMobile_MenuLabel">
                                                    <MdOutlineOtherHouses />
                                                    Developers
                                                </div>
                                            </li>
                                            <li>
                                                <div className="HeaderMobile_MenuLabel">
                                                    <MdOutlineOtherHouses />
                                                    Contact us
                                                </div>
                                            </li> */}
                                        </ul>
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

export default Navbar