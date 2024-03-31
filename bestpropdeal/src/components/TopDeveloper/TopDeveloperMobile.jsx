import React from 'react'
import { FaHome } from 'react-icons/fa'
import "./TopDeveloperMobile.css"
import Properties from "../../Data/Property.json"
import { useNavigate } from 'react-router-dom'

const TopDeveloperMobile = () => {

  const navigate = useNavigate();

  const TopDevListItems_Row_1 = [
    { label: '../../images/Dashmesh Infra copy.PNG',name: "Dashmesh Infrastructure" },
    { label: '../../images/Flowervalley copy.PNG',name: "Audumber Flower Valley" },
    { label: '../../images/Fulora copy.PNG',name: "Dashmesh Infrastructure" },
    { label: '../../images/JP Corp copy.PNG',name: "Dashmesh Infrastructure" },
    { label: '../../images/JP Hormony copy.PNG',name: "Dashmesh Infrastructure" },
    { label: '../../images/SPM Lakecity copy.png',name: "Dashmesh Infrastructure" },
];

const TopDevListItems_Row_2 = [
    { label: '../../images/Kothari copy.PNG',name: "Dashmesh Infrastructure" },
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

  return <>
    <section id='TopDeveloperMobile'>
        <div className="TopDev_Mobileslider">
            <ul className="TopDev_MobileDevelopers">
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Dashmesh Infra copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Audumber Flower Valley")}}><img src='../../images/Flowervalley copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Fulora copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/JP Corp copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/JP Hormony copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/SPM Lakecity copy.png' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Kothari copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Nano City copy.png' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Pinnacle Group")}}><img src='../../images/Pinnacle copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Pinnacle Group copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Sadguru Group")}}><img src='../../images/Sadguru Group copy.PNG' height="70px" width="70px"
                ></img></li>
                
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Dashmesh Infra copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Audumber Flower Valley")}}><img src='../../images/Flowervalley copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Fulora copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/JP Corp copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/JP Hormony copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/SPM Lakecity copy.png' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Kothari copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Nano City copy.png' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Pinnacle Group")}}><img src='../../images/Pinnacle copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Dashmesh Infrastructure")}}><img src='../../images/Pinnacle Group copy.PNG' height="70px" width="70px"
                ></img></li>
                <li className="TopDev_MobileDeveloperLogo" onClick={()=>{handleDeveloperClick("Sadguru Group")}}><img src='../../images/Sadguru Group copy.PNG' height="70px" width="70px"
                ></img></li>

                
            </ul>
        </div>
    </section>
  </>
}

export default TopDeveloperMobile