import React from 'react'
/* import {IoDiamondOutline} from 'react-icons/io' */
import { IoDiamondOutline } from 'react-icons/io5'
import { BsHouseDoor } from 'react-icons/bs'
import { GoThumbsup } from 'react-icons/go'
import { LiaPhoneVolumeSolid } from 'react-icons/lia'
import { TbBrandBooking } from 'react-icons/tb'

const StepperChartListItem = () => {
    return <>
        <div className="Bestpropdeal_Stepperchartcont">
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <IoDiamondOutline className='StepperchartIcon__Image' />
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Affordability</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                             The best property deals offer competitive pricing or favorable financing options that make purchasing a property feasible and within reach for the average buyer.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <BsHouseDoor className='StepperchartIcon__Image' />
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Location</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                             Customers often seek properties in safe, convenient, and desirable neighborhoods. Proximity to essential amenities such as schools, hospitals, supermarkets, and public transportation hubs adds value to the deal.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <GoThumbsup className='StepperchartIcon__Image' />
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Quality and Condition</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                             Customers want assurance that the property they are investing in is of high quality and in good condition. Factors such as construction quality, materials used, and maintenance history play a significant role in determining the value of the property deal.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <LiaPhoneVolumeSolid className='StepperchartIcon__Image' />
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Transparency and Legal ComplianceApproach</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                        The best property deals are transparent about pricing, legal documentation, and any associated fees or costs. Ensuring that the property deal complies with all legal regulations and requirements gives customers peace of mind and confidence in their investment.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bestpropdeal_Stepperchartctn Bestpropdeal_Stepperchartctn__active">
                <div className="Bestpropdeal_Stepperchart__Iconcont">
                    <TbBrandBooking className='StepperchartIcon__Image' />
                </div>
                <div className="Bestpropdeal_Stepperchart__Textcont">
                    <div className="stepperchartCard_HeaderText">
                        <h3 className="StepperChartHeading_Text">
                            <div className="StepperChartHeading_Text__Desktopheading">Zero Brokerage and Consultation Fees</div>
                        </h3>
                    </div>
                    <div className="stepperchartCard_DescriptionText">
                        <div className="StepperchartCard_Description">
                        BestPropDeal distinguishes itself by offering customers the advantage of zero brokerage fees and no charges for consulting services. This feature not only saves customers money but also enhances trust and transparency in the deal.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default StepperChartListItem