import React from 'react'
/* import {IoDiamondOutline} from 'react-icons/io' */
import {IoDiamondOutline} from 'react-icons/io5'
import {BsHouseDoor} from 'react-icons/bs'
import {GoThumbsup} from 'react-icons/go'
import {LiaPhoneVolumeSolid} from 'react-icons/lia'
import {TbBrandBooking} from 'react-icons/tb'

const StepperChartListItem = () => {
    return <>
        <div className="Bestpropdeal_Stepperchartcont">
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <IoDiamondOutline className='StepperchartIcon__Image'/>
                                    </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Featured Properties</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat, illo, non illum cumque dolorem qui enim odit eos
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                <BsHouseDoor className='StepperchartIcon__Image'/>
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Site Visit</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat, illo, non illum cumque dolorem qui enim odit eos
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                <GoThumbsup className='StepperchartIcon__Image'/>
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">0% Brokerage</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat, illo, non illum cumque dolorem qui enim odit eos
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                <LiaPhoneVolumeSolid className='StepperchartIcon__Image'/>
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Constant Connect</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat, illo, non illum cumque dolorem qui enim odit eos
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                <TbBrandBooking className='StepperchartIcon__Image'/>
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Online Booking</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat, illo, non illum cumque dolorem qui enim odit eos
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default StepperChartListItem