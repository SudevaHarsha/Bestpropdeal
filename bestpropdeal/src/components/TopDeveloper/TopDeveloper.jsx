import React, { useEffect, useState } from 'react'
import TopDevListItem from '../TopDevListItem'
import { Link, useNavigate } from 'react-router-dom';
import Properties from "../../Data/Property.json"
import TopDeveloperMobile from './TopDeveloperMobile';

const TopDeveloper = () => {

    const [activeItem, setActiveItem] = useState(0);
    const navigate = useNavigate();

    const TopDevListItems_Row_1 = [
        { label: '../../images/Dashmesh Infra copy.PNG',name: "Dashmesh Infrastructure" },
        { label: '../../images/Flowervalley copy.PNG',name: "Audumber Flower Valley" },
        { label: '../../images/Fulora copy.PNG',name: "Dashmesh Infrastructure" },
        { label: '../../images/JP Corp copy.PNG',name: "Dashmesh Infrastructure" },
        { label: '../../images/JP Hormony copy.PNG',name: "Dashmesh Infrastructure" },
    ];

    const TopDevListItems_Row_2 = [
        { label: '../../images/Nano City copy.png',name: "Dashmesh Infrastructure" },
        { label: '../../images/Pinnacle copy.PNG',name: "Pinnacle Group" },
        { label: '../../images/Pinnacle Group copy.PNG',name: "Dashmesh Infrastructure" },
        { label: '../../images/Sadguru Group copy.PNG',name: "Sadguru Group" },
    ];

    const handleDeveloperClick = (Partner)=>{
        const filteredResults = Properties.filter((property)=>{
            return property.partner===Partner
        })
        navigate("/search", { state: { filteredResults: filteredResults } })
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (activeItem === TopDevListItems_Row_1.length - 1) {
                setActiveItem(0);
            } else {
                setActiveItem(activeItem + 1)
            }
        }, 2000)

        return (() => clearTimeout(timeoutId))
    })

    return <>
        <div className="TopDeveloper__TopDevCont">
            <div className="TOPDeveloper__TopDevTitle">
                <h2 className="TopDeveloper_topDevTitle__texttitle">
                    <div className="TopDeveloper__DesktopTitle">Our Top Developer Patners</div>
                </h2>
            </div>
            <div className="TopDeveloper__TopDevListCont">
                <div className="TopDeveloper_TODevListRow">
                    {
                        TopDevListItems_Row_1.map((listItem) => {
                            return <TopDevListItem image={listItem.label} handleDeveloperClick={handleDeveloperClick} name={listItem.name} />
                        })
                    }
                </div>
                <div className="TopDeveloper_TODevListRow">
                    {
                        TopDevListItems_Row_2.map((listItem) => {
                            return <TopDevListItem image={listItem.label} handleDeveloperClick={handleDeveloperClick} name={listItem.name} />
                        })
                    }
                </div>
            </div>
            
            {/* <div>
                <Link to="/">
                    <div className="TopDeveloper_SeeAllBtn">
                        <div className="TopDeveloper_SeeAllBtn__Title">
                            <div className="TopDeveloper_SeeAllBtn__Text">SEE All</div>
                        </div>
                    </div>
                </Link>
            </div> */}
        </div>
        {/* <div className="TopDeveloperMobileCont" style={{ transform: `translateX(-${activeItem * 100}%)` }}>
                <div className='suchi'>
                    {
                        TopDevListItems_Row_1.map((item, index) => {
                            return <div className={`TopdevElement ${activeItem === index ? "active" : "inactive"}`}>
                                <TopDevListItem />
                            </div>
                        })
                    }
                </div>
                
                
                <div className='suchi'>
                    {
                        TopDevListItems_Row_1.map((item, index) => {
                            return <div className={`TopdevElement ${activeItem === index ? "active" : "inactive"}`}>
                                <TopDevListItem />
                            </div>
                        })
                    }
                </div>
            </div> */}
            <div className="TopDeveloperMobileCont">
                <TopDeveloperMobile />
            </div>
    </>
}

export default TopDeveloper