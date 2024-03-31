import React, { useState } from 'react'
import "./forms.css"
import { FaAccessibleIcon, FaCalendarPlus, FaFacebookSquare, FaHome } from 'react-icons/fa';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosCall } from 'react-icons/io';

import img from "../Assets/RM.jpg"

const Enquiry = ({ bookASiteVist, setBookASiteVist, callrm, setCallrm }) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const [name1, setName1] = useState('');
    const [remenberbox, setRemenberbox] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [call, setCall] = useState(false);
    const [mobileerror, setMobileError] = useState();

    const form = useRef();

    const isNameValid = () => name.trim() !== '';
    const isPhoneNumberValid = () => /^\d{10}$/.test(phoneNumber);
    const isFormValid = isNameValid() && isPhoneNumberValid() && isChecked;

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
        emailjs.sendForm('service_3hgs8bs', 'template_egdvnj8', form.current, 'nUcv7KqJIhJ5RUjZg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(name1, mobile, email);
        setMobile("");
        setEmail("");
    }

    return <div className='property_Deatiles_cont'>

        <div className="property_Deatiles_rmcard">
            <div className=" property_Deatiles_rmcard property_Deatiles_rmcard_cont" style={{ width: '328px' }}>
                <h2 className="property_Deatiles_rmcard_content_title">Hi! I'm here to answer all your queries.</h2>
                <div className='property_Deatiles_rmcard_content_name'>
                    <div className='property_Deatiles_rmcard_content_rating'>
                        <p>Alpesh</p>
                        <div className='property_Deatiles_rmcard_content_row'>
                            <FaAccessibleIcon />
                            <p>4.7</p>
                        </div>
                    </div>
                    <div className="property_Deatiles_rmcard_content_img">
                        <img style={{ width: "130px", height: "150px", background: "transparent" }} src={img}></img>
                    </div>
                </div>
                <div className='property_Deatiles_rmcard_content_button_container'>
                    <div className='property_Deatiles_rmcard_content_button_cont'>
                        <button className='property_Deatiles_rmcard_content_button' onClick={() => setCallrm(!callrm)}>
                            <IoIosCall className='cllrm_callicon' />CALL RM
                        </button>
                    </div>
                    <div className='property_Deatiles_rmcard_content_button_cont'>
                        <button className='property_Deatiles_rmcard_content_button' onClick={() => setBookASiteVist(!bookASiteVist)}>
                            <FaHome />BOOK A SITE VISIT
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div className="property_Deatiles_enquirycard">
            <div className="property_Deatiles_enquirycard_cont" style={{ width: '328px' }}>
                <h2 className='property_Deatiles_enquirycard_heading'>Enquiry form</h2>
                <form ref={form} onSubmit={HandlecallrmFormsubmit}>
                    <div className='property_Deatiles_enquirycard_month'>
                        <div className='inputbox'>
                            <FaFacebookSquare className="icon" />
                            <input type="text" value={name1} name="uname" required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className='inputbox'>
                            <input type="text" name="contact" value={mobile} required />
                            <label htmlFor="">contactNo</label>
                        </div>
                    </div>
                    <div className='forget'>
                        <label htmlFor=""><input type="checkbox" />Remember me</label>
                    </div>
                    <div className='property_Deatiles_rmcard_content_button_content'>
                        <button className='property_Deatiles_rmcard_content_button'>
                            <IoIosCall className='cllrm_callicon' />CALL RM
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Enquiry