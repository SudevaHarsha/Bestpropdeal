import React, { useRef, useState } from 'react'
import "./contactus.css"
import "../../forms/forms.css"
import Navbar from '../../layout/Navbar/Navbar'
import logo from "../../Assets/newp.webp"

import emailjs from '@emailjs/browser';
import { FaFacebookSquare } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'

import * as L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Footer from '../../layout/Footer/Footer'

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const [name1, setName1] = useState('');
    const [rememberBox, setRememberBox] = useState(false);
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [call, setCall] = useState(false);
    const [mobileError, setMobileError] = useState();

    const form = useRef();

    const isNameValid = () => name.trim() !== '';
    const isPhoneNumberValid = () => /^\d{10}$/.test(phoneNumber);

    const handleCallRmFormSubmit = (event) => {
        event.preventDefault();
        const isPhoneNumberValid = /^\d{10}$/.test(mobile);
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if (!name1) {
            setMobileError("Name entered, please check your name");
            return;
        }
        if (!isPhoneNumberValid && (email && !isValidEmail)) {
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
        emailjs.sendForm('service_3hgs8bs', 'template_egdvnj8', form.current, 'nUcv7KqJIhJ5RUjZg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(name1, mobile, email);
        setName1("");
        setMobile("");
        setEmail("");
    }

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    return <>
        <Navbar type="fixed" bcolor="#342f30" />
        <section className='contact_section'>
            <div className="contact_cont">
                <div className="heading_cont">
                    <div className="heading_text">Contact US</div>
                    <img src={logo} alt='bestpropdeal_logo'></img>
                </div>
                <div className="contact_form_cont">
                    <div className="form_location_cont">
                        <div className="property_Deatiles_enquirycard_contactus">
                            <div className="property_Deatiles_enquirycard_cont_contactus" style={{ width: '328px' }}>
                                <h2 className='property_Deatiles_enquirycard_heading'>Enquiry form</h2>
                                <form ref={form} onSubmit={handleCallRmFormSubmit}>
                                    <div className='property_Deatiles_enquirycard_month'>
                                        <div className='inputbox'>
                                            <input 
                                                type="text" 
                                                value={name1} 
                                                name="uname" 
                                                onChange={(e) => setName1(e.target.value)} 
                                                required 
                                            />
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className='inputbox'>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={email} 
                                                onChange={(e) => setEmail(e.target.value)} 
                                                required 
                                            />
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <div className='inputbox'>
                                            <input 
                                                type="text" 
                                                name="contact" 
                                                value={mobile} 
                                                onChange={(e) => setMobile(e.target.value)} 
                                                required 
                                            />
                                            <label htmlFor="">Contact No</label>
                                        </div>
                                        <div className='inputbox'>
                                            <input 
                                                type="text" 
                                                name="message" 
                                                required 
                                            />
                                            <label htmlFor="">Message</label>
                                        </div>
                                    </div>
                                    <div className='forget'>
                                        <label htmlFor="">
                                            <input 
                                                type="checkbox" 
                                                checked={rememberBox} 
                                                onChange={(e) => setRememberBox(e.target.checked)} 
                                            />Remember me
                                        </label>
                                    </div>
                                    <div className='property_Deatiles_rmcard_content_button_content'>
                                        <button className='property_Deatiles_rmcard_content_button' type="submit">
                                            <IoIosCall className='cllrm_callicon' />CALL RM
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="location_cont" style={{ height: '400px' }}>
                            <MapContainer center={[19.144760, 73.245843]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[19.144760, 73.245843]}>
                                    <Popup>Bestpropdeal</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default ContactUs
