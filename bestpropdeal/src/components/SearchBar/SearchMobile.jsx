import React from 'react'
import "./search.css"
import { FaSearch } from 'react-icons/fa'
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import properties from "../../Data/Property.json"
import { useNavigate } from 'react-router-dom'

const SearchMobile = () => {
    const propertyItems = properties;
    const navigate = useNavigate();
    const handleLocationClick = (loc) => {
        /*  setSelectedLocation([...selectedLocation, loc])
         handleSearch(); */
        const filteredResults = propertyItems.filter((item) => {
            return loc == item.location.split(',')[0]
        })
        navigate("/search", { state: { filteredResults: filteredResults } })
    }
    return <>
        <div className="SearchMobileCont">
            <div className="SearchMobileSmallCont">
                <div className="SearchIconCont">
                    {/* <FaSearch /> */}
                    <div className="SearchText">Search for property, location</div>
                </div>
                <div className="SearchMobile_LocCont">
                    <div className="SearchMobile_LocBtn">
                        <div className="SearchMobile_LocBtnText" onClick={() => handleLocationClick("Badlapur")}>Badlapur</div>
                    </div>
                    <div className="SearchMobile_LocBtn">
                        <div className="SearchMobile_LocBtnText" onClick={() => handleLocationClick("Vangani")}>Vangani</div>
                    </div>
                    <div className="SearchMobile_LocBtn">
                        <div className="SearchMobile_LocBtnText" onClick={() => handleLocationClick("Ambernath")}>Ambernath</div>
                    </div>
                    <div className="SearchMobile_LocBtn">
                        <div className="SearchMobile_LocBtnText" onClick={() => handleLocationClick("Dombivali")}>Dombivali</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SearchMobile