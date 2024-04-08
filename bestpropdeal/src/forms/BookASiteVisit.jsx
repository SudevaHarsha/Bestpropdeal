import React, { useState } from 'react'
import { FaCalendarPlus, FaClosedCaptioning, FaFacebookSquare, FaHome, FaUserCircle, FaXbox } from 'react-icons/fa'
import minilogo from "../Assets/mini-logo.svg"
import { IoIosCall } from "react-icons/io"
import { BiLogoGmail } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"
import { AiFillCloseCircle } from "react-icons/ai"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const BookASiteVisit = ({ bookASiteVist, setBookASiteVist }) => {

    const [name, setName] = useState();
    const [mobileNum, setMobileNum] = useState();
    const [email, setEmail] = useState();
    const [mobileerror, setMobileError] = useState();

    const form = useRef();

    const handleClose = (e) => {
        e.stopPropagation();
        console.log("sudeva");
        setBookASiteVist(!bookASiteVist)
        setName();
        setEmail();
        setMobileNum();
        setMobileError();
    }
    console.log(bookASiteVist);

    const HandlevisitFormsubmit = () => {
        const isPhoneNumberValid = /^\d{10}$/.test(mobileNum);
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if (!name) {
            setMobileError("name entered, please check your name");
            return
        }
        if (!isPhoneNumberValid && (email && !isValidEmail)) {
            setMobileError("Phone Number and Email");
            return
        }
        if (!isPhoneNumberValid) {
            setMobileError("Phone Number");
            return
        }
        if (email && !isValidEmail) {
            setMobileError("Email");
            return
        }
        emailjs.sendForm('service_3hgs8bs', 'template_egdvnj8', form.current, 'nUcv7KqJIhJ5RUjZg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(name, mobileNum, email);
        setName("");
        setMobileNum("");
        setEmail("");
        setMobileError();
    }

    return <>
        <div className="rm_part Book_A_SiteVisit" style={{
            width: '800px',
            height: '450px'
        }}>
            {/* <div className="BookAVisitImage">
                <img className='BookAVisitImg' src='https://www.bestpropdeal.com/wp-content/uploads/2020/09/omkar-2-Copy-488x326.jpg'></img>
            </div> */}
            <div className="BookAVisit_formContainer">
                {/*                 <button className='book_Closebtn' onClick={handleClose} ><FaXbox /></button> */}
                <button className='rm_x_butt book_Closebtn' onClick={(e) => handleClose(e)}><AiFillCloseCircle /></button>
                <div className="BookASiteImgCont">
                    <img src="/assets/Property-001/freecompress-Property-0011.webp" alt='Bestpropdeal-BookASiteVisit_Form'></img>
                </div>
                <div className="rm_r_c" >
                    <div className="BookVisit_TitleLogoCont">
                        <img src={minilogo} alt='Bestpropdeal-Logo'></img>
                        <h2 className='BookVisitTitle'>BestPropDeal</h2>
                    </div>

                    <h2 className='rm_r_heading Bookk_A_SIte_VISIT_Hesding'>Wanna get a home Like that ?</h2>
                    <h2 className='rm_r_heading Bookk_A_SIte_VISIT_Hesding'><FaHome className='Home_Icon' /> Book A Ste Visit</h2>
                    <form ref={form} onSubmit={HandlevisitFormsubmit}>
                        <div className='rm_r_cont BookASiteVisitCont'>
                            {mobileerror && <div className="FormErrorMsgCont" /* style={{ marginLeft: '26px' }} */>
                                <div className="FormErrorMsg">Wrong {mobileerror}</div>
                            </div>
                            }
                            <div className='inputbox_rm inputbox_bookasitevisit MobileVisit_inputbox'>
                                {/* <FaFacebookSquare className="icon_rm icon_bookASIteVisit" /> */}
                                <FaUserCircle className="icon_rm Visitip_icon" />
                                <input type="text" required name="uname" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="" className={`${name && "labeltop"}`}>Name</label>
                            </div>
                            <div className='inputbox_rm inputbox_bookasitevisit'>
                                <IoIosCall className="icon_rm Visitip_icon" />
                                <input type="tel" required name="contact" value={mobileNum} onChange={(e) => setMobileNum(e.target.value)} />
                                <label htmlFor="" className={`${mobileNum && "labeltop"}`}>Mobile number</label>
                            </div>
                            <div className='inputbox_rm inputbox_bookasitevisit'>
                                <BiLogoGmail className="icon_rm Visitip_icon" />
                                <input type="tel" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="" className={`${email && "labeltop"}`}>Email</label>
                            </div>

                        </div>
                        <div className='forget_rm forget_Visit'>
                            <label htmlFor=""><input type="checkbox" />I trust the BestPropDeal</label>
                        </div>
                        <div className='property_Deatiles_rmcard_content_button_content' onClick={HandlevisitFormsubmit}>
                            <button className='property_Deatiles_rmcard_content_button VisitBtn'>
                                <FaHome />Book A Site Visit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="rm_part rm_part_mobile" style={{
            width: '100%',
            height: '100%'
        }}>
            <div className="Mobilerm_Cont">
                <div className="MobileVisitImage">
                    <div className="Mobilerm_CloseLogoCont">
                        <img src={minilogo} alt='Bestpropdeal-Logo'></img>
                        <AiFillCloseCircle className='Mobilerm_closeIcon' onClick={(e) => handleClose(e)
                        } />
                    </div>
                </div>
                <div className="MobileVisit_VisitText">get a home like that</div>
                <div className="MobileVisit_formcont">
                    {mobileerror && <div className="FormErrorMsgCont" /* style={{ marginLeft: '26px' }} */>
                        <div className="FormErrorMsg">Wrong {mobileerror}</div>
                    </div>
                    }
                    <form ref={form} onSubmit={HandlevisitFormsubmit}>
                        <div className='rm_r_cont BookASiteVisitCont'>
                            <div className='inputbox_rm inputbox_bookasitevisit MobileVisit_inputbox'>
                                {/* <FaFacebookSquare className="icon_rm icon_bookASIteVisit" /> */}
                                <FaUserCircle className="icon_rm Mobilerm_icon" />
                                <input type="text" required name="uname" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="" className={`${name && "labeltop"}`}>Name</label>
                            </div>
                            <div className='inputbox_rm inputbox_bookasitevisit '>
                                <IoIosCall className="icon_rm Mobilerm_icon" />
                                <input type="tel" required name="contact" value={mobileNum} onChange={(e) => setMobileNum(e.target.value)} />
                                <label htmlFor="" className={`${mobileNum && "labeltop"}`}>Mobile number</label>
                            </div>
                            <div className='inputbox_rm inputbox_bookasitevisit'>
                                <BiLogoGmail className="icon_rm Mobilerm_icon" />
                                <input type="tel" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="" className={`${email && "labeltop"}`}>Email</label>
                            </div>

                        </div>
                        <div className='forget_rm forget_Visit'>
                            <label htmlFor=""><input type="checkbox" />I trust the BestPropDeal</label>
                        </div>
                        <div className='property_Deatiles_rmcard_content_button_content MobileVisit_VisitBtn' onClick={HandlevisitFormsubmit}>
                            <button className='property_Deatiles_rmcard_content_button MobileVisitBtn'>
                                <FaHome />Book A Site Visit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default BookASiteVisit