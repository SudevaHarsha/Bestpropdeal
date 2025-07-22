import React, { useState } from 'react'
import { FaAirFreshener, FaCalendarPlus, FaFacebookSquare, FaXbox, FaUserCircle } from 'react-icons/fa'
import { IoIosCall } from "react-icons/io"
import { BiLogoGmail } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"
import { FcRating } from "react-icons/fc"
import minilogo from "../Assets/mini-logo.svg"
import Property from "../Data/Property.json"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import img from "../Assets/RM.jpg"
import { useParams } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

const BookForm = ({ callrm, setCallrm, CurrentProperty }) => {

    const TemplateID= CurrentProperty?.EmailJS?.templateID;
    const ServiceID= CurrentProperty?.EmailJS?.serviceID;
    const PublicKey= CurrentProperty?.EmailJS?.publicKey;

    console.log(ServiceID,TemplateID,PublicKey);

    const [name1, setName1] = useState('');
    const [remenberbox, setRemenberbox] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [call, setCall] = useState(false);
    const [mobileerror, setMobileError] = useState();

    const form = useRef();

    const HandlecallrmFormsubmit = () => {

        const isPhoneNumberValid = /^\d{10}$/.test(mobile);
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if (!name1) {
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
        const parameters = {...form.current,formType:callrm ? "Call RM" : "Book A Site Visit"};
        emailjs.sendForm(ServiceID, TemplateID, form.current, PublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(name1, mobile, email);
        setName1("");
        setMobile("");
        setEmail("");
        setMobileError();
        setCall(true);
    }

    const handleCallClick = () => {
        window.open(`tel:${CurrentProperty.ContactNO}`, '-self');
        setCall(false);
    }

    return <>
        <div className="rm_part" style={{
            width: '800px',
            height: '450px'
        }}>
            <button className='rm_button' onClick={() => setCallrm(!callrm)} ><GrFormClose /></button>
            <div className="rm_p" style={{
                width: '450px',
                height: '450px'
            }}>
                <p className='rm_p_text'>Interested in learning more about our properties? Fill out the form below to schedule a meeting with one of our real estate experts. We look forward to helping you find your dream home or investment property!</p>
                <div className='rm_t_des'>
                    <div className="rm_p_img">
                        <img style={{ width: "130px", height: "150px", background: "transparent" }} src={CurrentProperty?.RMPhoto || img}></img>
                    </div>
                    <div className="rm_p_texttt">
                        <p>{CurrentProperty?.RMName || "Alpesh"}
                        </p>
                        <p><FcRating /> 4.8</p>
                    </div>
                </div>
            </div>
            {!call && <div style={{
                width: '350px',
                height: '450px'
            }} className='rm_white'>
                <div className="property_Deatiles_enquirycard">
                    <div className="rm_r_c" >
                        <h2 className='rm_r_heading'>Enquiry form</h2>
                        {mobileerror && <div className="FormErrorMsgCont" /* style={{ marginLeft: '26px' }} */>
                            <div className="FormErrorMsg">Wrong {mobileerror}</div>
                        </div>
                        }
                        <form ref={form} onSubmit={HandlecallrmFormsubmit}>
                            <div className='rm_r_cont'>
                                <div className='inputbox_rm'>
                                    <FaUserCircle className="icon_rm" />
                                    <input type="text" required name="uname" value={name1} onChange={(e) => setName1(e.target.value)} />
                                    <label htmlFor="" className={`${name1 && "labeltop"}`}>Name</label>
                                </div>
                                <div className='inputbox_rm'>
                                    <IoIosCall className="icon_rm" />
                                    <input type="tel" required name="contact" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <label htmlFor="" className={`${mobile && "labeltop"}`}>Mobile number</label>
                                </div>

                                <div className='inputbox_rm'>
                                    <BiLogoGmail className="icon_rm" />
                                    <input type="tel" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="" className={`${email && "labeltop"}`}>Email</label>
                                </div>
                                {/* <input type='text' disabled name='formType' value="Call RM" /> */}
                            </div>
                            <div className='forget_rm'>
                                <label htmlFor=""><input type="checkbox" value={remenberbox} onChange={(e) => setRemenberbox(e.target.value)} />Remember me</label>
                            </div>

                            {/*                         <div className='property_Deatiles_rmcard_content_button_content' >
 */}                            <button className='property_Deatiles_rmcard_content_button VisitBtn' onClick={() => HandlecallrmFormsubmit()}>
                                <IoIosCall className='cllrm_callicon' />CALL RM
                            </button>
                        </form>
                        {/*                         </div>
 */}                    </div>
                </div>
            </div>}
            {call &&
                <div style={{
                    width: '350px',
                    height: '450px'
                }} className='rm_white'>
                    <button className='CallImmedietluBtn' onClick={() => handleCallClick()}>Call Immedietly</button>
                </div>
            }
        </div>
        <div className="rm_part_mobile" style={{
            width: '100%',
            height: '100%'
        }}>
            <div className="Mobilerm_Cont">
                <div className="Mobilerm_CloseLogoCont">
                    <img src={minilogo}></img>
                    <AiFillCloseCircle className='Mobilerm_closeIcon' onClick={() => setCallrm(!callrm)} />
                </div>
                <div className="Mobilerm_descriptionCont">Interested in learning more about our properties? Fill out the form below to schedule a meeting with one of our real estate experts. We look forward to helping you find your dream home or investment property!</div>
                <div className='rm_t_des'>
                    <div className="rm_p_img">
                        <img style={{ width: "130px", height: "150px", background: "transparent" }} src={CurrentProperty?.RMPhoto || img}></img>
                    </div>
                    <div className="rm_p_texttt">
                        <p>{CurrentProperty?.RMName || "Alpesh"}
                        </p>
                        <p><FcRating /> 4.7</p>
                    </div>
                </div>
                {!call && <div style={{
                    width: '350px',
                    height: '300px',
                    margin: "auto"
                }} className='Mobilerm_FormCont'>
                    <div className="property_Deatiles_enquirycard">
                        <div className="rm_r_c" >
                            <h2 className='rm_r_heading Mobilerm_r_heading'>Contact Our RM For More Details</h2>
                            {mobileerror && <div className="FormErrorMsgCont formErrorMsgMobile" /* style={{ marginLeft: '26px' }} */>
                                <div className="FormErrorMsg">Wrong {mobileerror}</div>
                            </div>
                            }
                            <form ref={form} onSubmit={HandlecallrmFormsubmit}>
                                <div className='rm_r_cont'>
                                    <div className='inputbox_rm Mobilerm_inputbox'>
                                        <FaFacebookSquare className="icon_rm Mobilerm_icon" />
                                        <input type="text" required name="uname" value={name1} onChange={(e) => setName1(e.target.value)} />
                                        <label htmlFor="" className={`${name1 && "labeltop"} Mobilerm_label`}>Name</label>
                                    </div>
                                    <div className='inputbox_rm Mobilerm_inputbox'>
                                        <IoIosCall className="icon_rm Mobilerm_icon" />
                                        <input type="tel" required name="contact" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        <label htmlFor="" className={`${mobile && "labeltop"} Mobilerm_label`}>Mobile number</label>
                                    </div>
                                    <div className='inputbox_rm Mobilerm_inputbox'>
                                        <BiLogoGmail className="icon_rm Mobilerm_icon" />
                                        <input type="tel" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="" className={`${email && "labeltop"} Mobilerm_label`}>Email</label>
                                    </div>
                                </div>
                                <div className='forget_rm Mobilerm_forgetrm'>
                                    <label htmlFor=""><input type="checkbox" value={remenberbox} onChange={(e) => setRemenberbox(e.target.value)} />Remember me</label>
                                </div>
                                <div className='property_Deatiles_rmcard_content_button_content' onClick={() => HandlecallrmFormsubmit()}>
                                    <button className='property_Deatiles_rmcard_content_button Mobilerm_Btn ' onClick={() => HandlecallrmFormsubmit()}>
                                        <IoIosCall />CALL RM
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>}
                {call &&
                    <div style={{
                        width: '350px',
                        height: '300px',
                        margin: "auto"
                    }} className='rm_white Mobilerm_FormCont'>
                        <button className='CallImmedietluBtn Mobilerm_callimmedietlyBtn' onClick={() => handleCallClick()}>Call Immedietly</button>
                    </div>
                }
            </div>
        </div>
    </>
}
export default BookForm