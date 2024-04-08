import React from 'react'
import { FaHome } from 'react-icons/fa'
import "./TopDeveloperMobile.css"
import Properties from "../../Data/Property.json"
import { useNavigate } from 'react-router-dom'

const TopDeveloperMobile = () => {

  const navigate = useNavigate();

  const handleDeveloperClick = (Partner) => {
    const filteredResults = Properties.filter((property) => {
      return property.partner === Partner
    })
    navigate("/search", { state: { filteredResults: filteredResults } })
  }

  return <>
    <section id='TopDeveloperMobile'>
      <div className="TopDev_Mobileslider">
        <ul className="TopDev_MobileDevelopers">
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Dashmesh Infra copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Audumber Flower Valley") }}>
            <img alt={`Company logo of Audumber Flower Valley`} loading='lazy' src='../../images/Flowervalley copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Fulora copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/JP Corp copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/JP Hormony copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/SPM Lakecity copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Kothari copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Nano City copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Pinnacle Group") }}>
            <img alt={`Company logo of Pinnacle Group`} loading='lazy' src='../../images/Pinnacle copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Pinnacle Group copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Sadguru Group") }}>
            <img alt={`Company logo of Sadguru Group`} loading='lazy' src='../../images/Sadguru Group copy.webp' height="70px" width="70px"></img>
          </li>

          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Dashmesh Infra copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Audumber Flower Valley") }}>
            <img alt={`Company logo of Audumber Flower Valley`} loading='lazy' src='../../images/Flowervalley copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Fulora copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/JP Corp copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/JP Hormony copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/SPM Lakecity copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Kothari copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Nano City copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Pinnacle Group") }}>
            <img alt={`Company logo of Pinnacle Group`} loading='lazy' src='../../images/Pinnacle copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Dashmesh Infrastructure") }}>
            <img alt={`Company logo of Dashmesh Infrastructure`} loading='lazy' src='../../images/Pinnacle Group copy.webp' height="70px" width="70px"></img>
          </li>
          <li className="TopDev_MobileDeveloperLogo" onClick={() => { handleDeveloperClick("Sadguru Group") }}>
            <img alt={`Company logo of Sadguru Group`} loading='lazy' src='../../images/Sadguru Group copy.webp' height="70px" width="70px"></img>
          </li>


        </ul>
      </div>
    </section>
  </>
}

export default TopDeveloperMobile