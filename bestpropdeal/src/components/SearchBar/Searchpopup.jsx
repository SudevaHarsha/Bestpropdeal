import React, { useEffect, useState } from 'react'
import "./search.css"
import Slider from "react-slider"
import { FaClosedCaptioning, FaSearch } from 'react-icons/fa';
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import Properties from "../../Data/Property.json"
import { useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';

const Searchpopup = ({searchPopup,setSearchPopup}) => {

    const Locations = ["Badlapur", "Kharvani", "Vangani", "Ambernath", "Dombivali", "Dombiva", "Thakurli"]

    const propertyItems = Properties;
    console.log(propertyItems);

    const MIN = 100000;
    const MAX = 10000000;

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [values, setvalues] = useState([MIN, MAX]);
    const [searchFilters, setSearchFilters] = useState([]);
    const [type, setType] = useState([]);
    const [filteredTypes, setFilteredTpes] = useState([]);
    const [filteredFilters, setFlteredFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchLocation, setSearchLocation] = useState("");
    const [foundLocations, setFoundLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [filteredSearchItems, setFilteredSearchItems] = useState([]);
    const [FilteredLocationItems, setFileredLocationItems] = useState([]);

    console.log(values);
    console.log(values[0])

    const handleSearchTypeClick = (name) => {
        console.log(name);
        if (type.length) {
            const isType = type.find((filterItem) => filterItem === name);
            if (!isType) {
                setType([...type, name]);
                return
            }
            const filteredItems = type.filter((item) => item !== name);
            setType([...filteredItems]);
            return
        } else {
            setType([...type, name]);
        }
    }

    const handleSearchFilterClick = (name) => {
        console.log(name);
        if (searchFilters.length) {
            const isFilter = searchFilters.find((filterItem) => filterItem === name);
            if (!isFilter) {
                setSearchFilters([...searchFilters, name]);
                return
            }
            const filteredItems = searchFilters.filter((item) => item !== name);
            setSearchFilters([...filteredItems]);
            return
        } else {
            setSearchFilters([...searchFilters, name]);
        }
    }
    const handleClearAllClick = ()=>{
        setType();
        setSearchFilters();
        setSelectedLocation();
    }
    const handleLocationClick = (loc) => {
        /*  setSelectedLocation([...selectedLocation, loc])
         handleSearch(); */
        const filteredResults = propertyItems.filter((item) => {
            return loc == item.location.split(',')[0]
        })
        navigate("/search", { state: { filteredResults: filteredResults } })
    }
    const handleSearch = (name) => {
        const filteredResults = propertyItems.filter((item) => {
            const Price = parseInt(item.Price.replace(/,/g, ''), 10);
            const isLocationMatch = searchLocation
                ? selectedLocation.includes(item.location.split(',')[0])
                : true;
            const isTypeMatch = type.length > 0
                ? type.includes(item.Type)
                : true;

            const isSizeMatch = searchFilters.length > 0
                ? item.SearchFilters.some(filter => searchFilters.includes(filter))
                : true;

            const isPriceMatch = values
                ? Price > values[0] && Price < values[1]
                : true;

            return isLocationMatch && isTypeMatch && isSizeMatch && isPriceMatch;
        });
        navigate("/search", { state: { filteredResults: filteredResults, searchFilters: searchFilters, type: type, selectedLocation: selectedLocation } })
        setFilteredItems(filteredResults)
        /* if(type){
            const filteredTypes = propertyItems.filter((item)=>{
                const itemType = item.Type;
                const isType = type.includes(itemType);
                if(isType) return item;
            })
            navigate("/search",{state : {  filteredTypes:filteredTypes }});
            setFilteredTpes(filteredTypes);
        }
        if(searchFilters){
            const filteredFilters = propertyItems.filter((item)=>item.SearchFilters.some(filter => searchFilters.includes(filter)));
            setFlteredFilters(filteredFilters);
        } */
        /* if(searchFilters && type){      
            const filteredSearchItems = filteredFilters.filter((item)=>filteredTypes.includes(item));
            setFilteredItems(filteredSearchItems);
        } */
        /*  if(values){
             const filteredItems = propertyItems.filter((item)=>{
                 const Price = parseInt(item.Price.replace(/,/g, ''), 10);
                 const isInBudget = Price > values[0] && Price<values[1];
                 if(isInBudget) return item
             })
             setFilteredItems(filteredItems);
         }
  */
        /* if(filteredSearchItems && values){
            const filteredItems = filteredSearchItems.filter((item)=>{
                const Price = parseInt(item.Price.replace(/,/g, ''), 10);
                const isInBudget = Price > values[0] && Price<values[1];
                if(isInBudget) return item
            })
            setFilteredItems(filteredItems);
        }

        if(filteredFilters && values){
            const filteredItems = filteredFilters.filter((item)=>{
                const Price = parseInt(item.Price.replace(/,/g, ''), 10);
                const isInBudget = Price > values[0] && Price<values[1];
                if(isInBudget) return item
            })
            setFilteredItems(filteredItems);
        }

        if(filteredTypes && values){
            const filteredItems = filteredTypes.filter((item)=>{
                const Price = parseInt(item.Price.replace(/,/g, ''), 10);
                const isInBudget = Price > values[0] && Price<values[1];
                if(isInBudget) return item
            })
            setFilteredItems(filteredItems);
        } */

        /* if(searchLocation){
            const filteredItemsWithLocation = propertyItems.filter((item)=>{
                const locationStrings = item.location.split(',');
                const location = locationStrings[0];
                const isLocation = selectedLocation.includes(location);
                if(isLocation) return item
            });
            setFileredLocationItems(filteredItemsWithLocation);
        } */

        /* setSearchFilters([]);
        setType([]); */
    }

    const LocationSearch = () => {
        const foundLocations = Locations.filter((location) => location.includes(searchLocation));
        setFoundLocations(foundLocations);
    }

    /* console.log(values); */
    /* console.log(searchFilters);
    console.log(type);
    console.log(filteredTypes);
    console.log(filteredFilters); */
    console.log(filteredItems);
    /*   console.log(filteredSearchItems);
      console.log(searchLocation);
      console.log(foundLocations)
      console.log(selectedLocation);
      console.log(FilteredLocationItems) */

    /* let dropdownRef = useRef(); */

/*     useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }) */

    useEffect(() => {
        LocationSearch();
    }, [searchLocation])


    return (<div className='MobileSearchPopupCont'>
        <div className="MobilesearchPopup_ActionBtnCont">
            <GrFormClose onClick={()=>setSearchPopup(!searchPopup)} />
            <button onClick={()=>handleClearAllClick}>Clear All</button>
        </div>
        <h2 className="MobileSearchPopup_Heading">Search Your Properties With Various Filters</h2>
        <div className="SearchIconCont MobileSearchIconCont">
            <FaSearch />
            <div className="SearchText">Search for property, location</div>
        </div>
        <div className="searchpop">
            <p className='searchpopbuttconfirstheading'>Inventory</p>
            <div className='searchpopbuttconfirst marginbot'>
            <div className={`SearchMobile_FilterItemBtn ${type.includes("Apartment") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Apartment")}>
                    <div className="SearchMobile_LocBtnText">Apartments</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Pent House") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Pent House")}>
                    <div className="SearchMobile_LocBtnText">PentHouse</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Studio") ? "SearchMobile_FilterItemBtnActive" : ""}`}>
                    <div className="SearchMobile_LocBtnText" onClick={() => handleSearchTypeClick("Studio")}>Studio</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Villa") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Villa")}>
                    <div className="SearchMobile_LocBtnText" >Villa</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Independent House") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Independent House")}>
                    <div className="SearchMobile_LocBtnText" >Independent House</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Independent Floor") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Independent Floor")}>
                    <div className="SearchMobile_LocBtnText" >Independent Floor</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${type.includes("Duplex") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Duplex")}>
                    <div className="SearchMobile_LocBtnText">Duplex</div>
                </div>
            </div>
            <div className='searchpopbuttconfirst secondCont'>
                <div className={`SearchMobile_FilterItemBtn ${searchFilters.includes("1RK") ? "SearchMobile_FilterItemBtnActive" : ""}`}>
                    <div className="SearchMobile_LocBtnText" onClick={() => handleSearchFilterClick("1RK")}>1Rk</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${searchFilters.includes("1BHK") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchFilterClick("1BHK")}>
                    <div className="SearchMobile_LocBtnText">1BHK</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${searchFilters.includes("2BHK") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchFilterClick("2BHK")}>
                    <div className="SearchMobile_LocBtnText">2BHK</div>
                </div>
                <div className={`SearchMobile_FilterItemBtn ${searchFilters.includes("3BHK") ? "SearchMobile_FilterItemBtnActive" : ""}`} onClick={() => handleSearchFilterClick("3BHK")}>
                    <div className="SearchMobile_LocBtnText">3BHK</div>
                </div>
            </div>
            {/* <div className='searchpopbuttconfirst'>
                <p className='searchpopbuttconfirstheading'>Inventory</p>
                <button>suchi</button>
            </div> */}
        </div>
        <div className="searchpop MobileSearchRangeSlider">
            <div className="BudgetSlider_HeadingCont">
                <div className="BudgetSlider_Title">BUDGET</div>
                <div className="BudgetSlider_PriceRange">10L-10CR</div>
            </div>
            <div>
                <div className="RangeSlider">
                    <Slider
                        className={"sliderBudget"}
                        onChange={setvalues}
                        value={values}
                        min={MIN}
                        max={MAX}
                    />
                </div>
            </div>
        </div>
        <button className='MobileSearchPopup_ApplyBtn' onClick={() => handleSearch()}>Apply Now</button>
    </div>
    )
}

export default Searchpopup