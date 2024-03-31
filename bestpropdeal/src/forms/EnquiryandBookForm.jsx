import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdStars } from 'react-icons/md';

import img from "../Assets/RM.jpg"

const EnquiryandBookForm = ({ bookASiteVist, setBookASiteVist, callrm, setCallrm }) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const isNameValid = () => name.trim() !== '';
    const isPhoneNumberValid = () => /^\d{10}$/.test(phoneNumber);
    const isFormValid = isNameValid() && isPhoneNumberValid() && isChecked;

    return <>


        <div className="property_Deatiles_rmcard">
            <div className="property_Deatiles_rmcard_cont" style={{ width: '328px' }}>
                            <h2 className="property_Deatiles_rmcard_content_title">Hi! I'm here to answer all your queries.
                            </h2>

                    

                   {/*  <div className="property_Deatiles_rmcard_content_space"></div> */}
                    {/* <div className="property_Deatiles_rmcard_middle_container"> */}
                        <div className="property_Deatiles_rmcard_middle_text">
                            {/* <div className="property_Deatiles_rmcard_middle_cont"> */}
                                {/* <div className="property_Deatiles_rmcard_middle_content"> */}
                                    <p className="property_Deatiles_rmcard_middle_cont_head">Alpesh</p>
                                    {/* <div className="property_Deatiles_rmcard_middle_cont_head_space"></div> */}
                                    {/* <div className="property_Deatiles_rmcard_middle_cont_head_star"> */}
                                        
                                        <div className="property_Deatiles_rmcard_middle_cont_head_text">
                                        {/* <img src="	https://blox.xyz/assets/icons/green-star.svg"></img> */}
                                        <MdStars />
                                            <span>4.7</span></div>
                                    {/* </div> */}
                                    <div className="property_deatiles_callrm_button_container">
                                        <div className="property_deatiles_callrm_button">
                                            <img src="https://blox.xyz/_next/image?url=%2Fassets%2Ficons%2Fphone-ring-secondary.gif&w=16&q=75"></img>
                                            <div className="property_deatiles_callrm_buttontext ">CALL RM</div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            {/* </div> */}
                            <div className="property_Deatiles_rmcard_middle_img">
                            <img className='property_Deatiles_rmcard_middle_image' width="160px" height='120px' src={img}></img>
                        </div>
                        </div>
                        
                    {/* </div> */}

                {/* </div> */}

            </div>
            <div className="property_Deatiles_rmcard_bottom_container">
                <div className="property_Deatiles_rmcard_bottom_cont">
                    <div className="property_Deatiles_rmcard_bottom_callrm_butt">
                        <IoIosCall />
                        <div className="property_Deatiles_rmcard_bottom_callrm_butt_text" onClick={() => setCallrm(!callrm)}>CALL RM</div>
                    </div>
                </div>
                <div className='property_Deatiles_rmcard_bottom_cont_space'></div>
                <div className="property_Deatiles_rmcard_bottom_content">
                    <div className="property_Deatiles_rmcard_bottom_callrm_butt">
                        <FaHome />
                        <div className="property_Deatiles_rmcard_bottom_callrm_butt_text" onClick={() => setBookASiteVist(!bookASiteVist)} >Book A Visit</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="property_Deatiles_enquirycard">
            <div className="property_Deatiles_enquirycard_cont" style={{ width: '100%', height: '100%' }}>
                <div className="property_Deatiles_enquirycard_form">
                    <div className="property_Deatiles_enquirycard_form_header">
                        <div className="property_Deatiles_enquirycard_form_header_cont">
                            <h2 className='property_Deatiles_enquirycard_form_heading'>
                                <div>Enquire Now</div>
                            </h2>
                        </div>
                        <div className="property_Deatiles_enquirycard_form_header_box">
                            
                        </div>
                    </div>
                    <div className="property_Deatiles_enquirycard_form_body">
                        <div className="property_Deatiles_enquirycard_form_body_heading">Let us reach out to you at the earliest.</div>
                        <div className='property_Deatiles_enquirycard_form_body_input'>
                            <div className="property_Deatiles_enquirycard_form_body_input_icon">
                                <img width="18px" height="18px" src="	https://blox.xyz/assets/icons/user-primary.svg"></img>
                                <input type="text" className='property_Deatiles_enquirycard_form_body_input_text'
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            {!isNameValid() && <div className="property_Deatiles_enquirycard_form_body_input_errormsg" style={{ marginLeft: '26px' }}>
                                <div className="property_Deatiles_enquirycard_form_body_input_errormsg_cont"></div>
                            </div>
                            }
                        </div>
                        <div className='property_Deatiles_enquirycard_form_body_contact'>
                            <div className="property_Deatiles_enquirycard_form_body_contact_icon">
                                <div className="property_Deatiles_enquirycard_form_body_contact_icon_cont">
                                    <img src="https://blox.xyz/assets/icons/smartphone-primary.svg" alt=""></img>
                                    <select name="" id="" className="property_Deatiles_enquirycard_form_body_contact_icon_select">
                                        <option selected>+91</option>
                                    </select>
                                </div>
                            </div>
                            <div className="property_Deatiles_enquirycard_form_body_contact_cont">
                                <div className="property_Deatiles_enquirycard_form_body_input_icon">
                                    <input type="text" className='property_Deatiles_enquirycard_form_body_input_text'
                                        id="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                {phoneNumber && !isPhoneNumberValid() && <div className="property_Deatiles_enquirycard_form_body_input_errormsg" style={{ marginLeft: '26px' }}>
                                    <div className="property_Deatiles_enquirycard_form_body_input_errormsg_cont">error occured</div>
                                </div>
                                }
                            </div>
                        </div>
                        <div className='property_Deatiles_enquirycard_form_body_checkbox'>
                            <div className="property_Deatiles_enquirycard_form_body_checkbox_cont">
                                <div className="property_Deatiles_enquirycard_form_body_checkbox_content">
                                    <input type="checkbox" className="property_Deatiles_enquirycard_form_body_checkbox_checkplace" id="checkBox"
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)} />
                                </div>
                            </div>
                            <div className="property_Deatiles_enquirycard_form_body_checkbox_desc">I am happy to be contacted by BestPropDeal</div>
                            {/* {!isChecked && <div className="error">You must agree to the terms and conditions.</div>} */}
                        </div>
                        <div className='property_Deatiles_enquirycard_form_body_callback_btn'>
                            <div className="property_Deatiles_enquirycard_form_body_callback_btn_cont">
                                <div className="property_Deatiles_enquirycard_form_body_callback_btn_text " /* disabled={!isFormValid} onClick={handleSubmit} */>REQUEST A CALLBACK</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default EnquiryandBookForm