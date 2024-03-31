import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import propertyItems from "../../Data/Property.json"
 /* squareBox  in line 6 it is another class*/
const SeoCard = () => {;
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    /* const [values, setvalues] = useState([MIN, MAX]); */
    const [searchFilters, setSearchFilters] = useState([]);
    const [type, setType] = useState([]);
    const [filteredTypes, setFilteredTpes] = useState([]);
    const [filteredFilters, setFlteredFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchLocation, setSearchLocation] = useState("");
    const [foundLocations, setFoundLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [shouldNavigate, setShouldNavigate] = useState(false); 
    const handleSearch = (size,filter) => {
        /* setType([...type,size]);
        setSearchFilters([...searchFilters,filter]); */
        const filteredResults = propertyItems.filter((item) => {
            /* const Price = parseInt(item.Price.replace(/,/g, ''), 10); */
            console.log(size,filter);
            /* const isLocationMatch = searchLocation
                ? selectedLocation.includes(item.location.split(',')[0])
                : true; */
            const isTypeMatch = type.length > 0
                ? size===item.Type
                : true;

            const isSizeMatch = searchFilters.length > 0
                ? item.SearchFilters.includes(filter)
                : true;

            /* const isPriceMatch = values
                ? Price > values[0] && Price < values[1]
                : true; */

            return isTypeMatch && isSizeMatch;
        });
        setShouldNavigate(true);
        console.log(type,filteredResults);
        navigate("/search", { state: { filteredResults: filteredResults, searchFilters: searchFilters, type: type, selectedLocation: selectedLocation } })
        setFilteredItems(filteredResults)
    }
    const handleSearchTrigger = (size,filter)=>{
        setType([...type,size]);
        setSearchFilters([...searchFilters,filter]);
        handleSearch();
    }

 /*    useEffect(() => {
        // When type and searchFilters change, trigger the search function
        if(shouldNavigate){
        handleSearch();}
      }, [shouldNavigate,type, searchFilters]); */
    

    return <>
        <div className='SeoCard'>       
            <h2 className="SeoLinks_Title">
                Flats By Bedrooms In Mumbai
            </h2>
            <ul>
                <li><div onClick={()=>{
                    handleSearch("Apartment","1BHK")
                }}>BHK apartments in mumbai</div></li>
                <li><div onClick={()=>{
                    handleSearch("Duplex","1BHK")
                }}>BHK duplex in mumbai</div></li>
                <li><div onClick={()=>{
                    handleSearch("Independenthouse","1BHK")
                }}>BHK independenthouse in mumbai</div></li>
                <li><div onClick={()=>{
                    handleSearch("Villa","1BHK")
                }}>BHK villa in mumbai</div></li>
                {/* <li><Link to='/'>BHK apartments in mumbai</Link></li> */}
            </ul>
        </div>
    </>
}

export default SeoCard