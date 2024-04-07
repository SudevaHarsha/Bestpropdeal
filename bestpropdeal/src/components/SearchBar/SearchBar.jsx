import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from "react-slider"
import OngoingPropertyItems from "../../Data/OngoingPropertyItems.json"
import CompletedPropertyItems from "../../Data/CompletedPropertyItems.json"
import properties from "../../Data/Property.json"
import { FaAccusoft, FaSearch } from 'react-icons/fa'
import { FcSearch } from 'react-icons/fc'
import { MdKeyboardArrowDown } from 'react-icons/md'

const SearchBar = () => {

    const Locations = ["Badlapur", "Kharvani", "Vangani", "Ambernath", "Dombivali", "Dombiva", "Thakurli"]

    const propertyItems = properties;
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
    const handleLocationClick = (loc) => {
        setSelectedLocation([...selectedLocation, loc])
        const filteredResults = propertyItems.filter((item) => {
            return loc == item.location.split(',')[0]
        })
        navigate("/search", { state: { filteredResults: filteredResults,selectedLocation: selectedLocation } })
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
        const foundLocations = Locations.filter((location) => location.toLowerCase().includes(searchLocation.toLowerCase()));
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

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    useEffect(() => {
        LocationSearch();
    }, [searchLocation])

    return <>

        <div className="Searchbar_Desktop__Primary Searchbar_Desktop__Outercont" ref={dropdownRef}>
            {/* <div></div> */}
            <div>
                <div className="SearchBar_Desktop__HorizantalDivider"></div>
                <div>
                    <div className={`SearchDropdown_OuterCont ${open ? 'active' : 'inactive'}`}>
                        <div className="SearchDropdown_leftcont">
                            <div className="SearchDropdown_ResultCont">
                                {
                                    searchLocation
                                        ? <div>
                                            <div className="SearchDropdown_SectionTitle">
                                                <FaSearch />
                                                <div className="SearchDropdown_LocationText">LOCATION</div>
                                            </div>
                                            <div className="SearchResultCont">
                                                {searchLocation && foundLocations.map((loc, index) => {
                                                    return <div className="ResultedLocations" key={index} onClick={() => setSelectedLocation([...selectedLocation, loc])}><div>{loc}</div><div className={`ResultedLocationsIcon ${selectedLocation && selectedLocation.includes(loc) ? "show" : "hide"}`}><FaAccusoft /></div></div>
                                                })}
                                            </div>
                                        </div>
                                        : <div>
                                            <div className="SearchDropdown_SectionTitle">
                                                <FaSearch />
                                                <div className="SearchDropdown_LocationText">LOCATION</div>
                                            </div>
                                            <div className="SearchDropdown_NoResultsCont">
                                            {/* <img src='https://blox.xyz/_next/image?url=%2Fassets%2Fimages%2Fsearch%2Fdefault-search.png&w=256&q=75'></img> */}
                                            <FaSearch />
                                            <div className="SearchDropDown_NoSearchText">Your search results will display here</div>
                                            {/* {Locations.map((loc, index) => {
                                                return <div className="ResultedLocations" key={index} onClick={() => setSelectedLocation([...selectedLocation, loc])}><div>{loc}</div><div className={`ResultedLocationsIcon ${selectedLocation && selectedLocation.includes(loc) ? "show" : "hide"}`}><FaAccusoft /></div></div>
                                            })} */}
                                        </div>
                                        </div>}
                            </div>
                        </div>
                        <div className="SearchDropdown_HorizantalDivider"></div>
                        <div className="SearchDropdown_Rightcont">
                            <div className="InvertoryFilters_InventoryTitle">Inventory</div>
                            <div className="InventoryFilters_FilterCont">
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Apartment") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Apartment")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Apartment</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Pent House") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Pent House")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">PentHouse</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Studio") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Studio")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Studio</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Villa") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Villa")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Villa</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Independent House") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Independent House")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Independent House</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Independent Floor") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Independent Floor")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Independent Floor</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${type.includes("Duplex") ? "filterBtnActive" : ""}`} onClick={() => handleSearchTypeClick("Duplex")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">Duplex</div>
                                    </div>
                                </div>
                            </div>
                            <div className="InventoryFilters_VerticalDivider"></div>
                            <div className="InventoryFilters_FilterCont">
                                <div className={`InventoryFilters_FilterBtn ${searchFilters.includes("1RK") ? "filterBtnActive" : ""}`}>
                                    <div className="InventoryFilters_FilterBtnTextCont" onClick={() => handleSearchFilterClick("1RK")}>
                                        <div className="InventoryFilters_FilterBtnText">1Rk</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${searchFilters.includes("1BHK") ? "filterBtnActive" : ""}`} onClick={() => handleSearchFilterClick("1BHK")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">1BHK</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${searchFilters.includes("2BHK") ? "filterBtnActive" : ""}`} onClick={() => handleSearchFilterClick("2BHK")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">2BHK</div>
                                    </div>
                                </div>
                                <div className={`InventoryFilters_FilterBtn ${searchFilters.includes("3BHK") ? "filterBtnActive" : ""}`} onClick={() => handleSearchFilterClick("3BHK")}>
                                    <div className="InventoryFilters_FilterBtnTextCont">
                                        <div className="InventoryFilters_FilterBtnText">3BHK</div>
                                    </div>
                                </div>
                            </div>
                            <div className="SearchDropdown_VerticalDivider"></div>
                            <div className="BudgetSlider_HeadingCont">
                                <div className="BudgetSlider_Title">BUDGET</div>
                                <div className="BudgetSlider_PriceRange">{values[0]}-{values[1]}</div>
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
                    </div>
                </div>
                <div className="SearchbarDesktop_SearchleftCont">
                    <div className="SearchbarDesktop_Searchbar ">
                        <FcSearch className='SearchbarDesktop_Searchbar2'/>
                        <div className="SearchbarDesktop_InputOutercont" onClick={() => setOpen(!open)}>
                            <div className="SearchbarDesktop_LabelHeading">FIND YOUR DREAM HOME</div>
                            <div className="SearchbarDesktop_inputCont">
                                <div className="Searchbar_input__inputcontent">
                                    <input type="text" className="Input_Text-sm__VH_0e Input_InputField__L01BX Input_primary___ZVfL SearchBarDesktop_InputCls__WFBcs SearchBarDesktop_primary__doY22" placeholder="Search for Developers, Location, Projects" maxlength="500" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
                                </div>
                                <div className="SearchbarDesktop_Hidediv InputErrorMessageWrapper">
                                    <div className="InputErrorMessage text-mobilelabel"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SearchbarDesktop_SearchFilter">
                        <div className="SearchbarDesktop_PrimaryVerticalDivider"></div>
                        <div>
                            <div className="SearchbarDesktop_LabelHeading">INVENTORY</div>
                            <div className="SearchbarDesktop_FilterDropdown">
                                <div className="SearchbarDesktop_InputPlaceholder">Select Inventory</div>
                                <div className="SearchbarDesktop_IconPos">
                                    <div className='SearchbarDesktop_PrimaryIcon SearchbarDesktop_PrimaryIcon'>
                                        <div className="SearchesNo">{type.length ? `+ ${type.length}` : 0}</div>
                                    </div>
                                    <MdKeyboardArrowDown className='SearchbarDesktop_Searchbar2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SearchbarDesktop_SearchFilter">
                        <div className="SearchbarDesktop_PrimaryVerticalDivider"></div>
                        <div>
                            <div className="SearchbarDesktop_LabelHeading">INVENTORY</div>
                            <div className="SearchbarDesktop_FilterDropdown">
                                <div className="SearchbarDesktop_InputPlaceholder">Select Inventory</div>
                                <div className="SearchbarDesktop_IconPos">
                                    <div className='SearchbarDesktop_PrimaryIcon SearchbarDesktop_PrimaryIcon'>
                                        <div className="SearchesNo">{searchFilters.length ? `+ ${searchFilters.length}` : 0}</div>
                                    </div>
                                    <MdKeyboardArrowDown className='SearchbarDesktop_Searchbar2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Searchbar_DesktopPrimaryBtn Searchbar_DeasktopSearchBtn" onClick={() => handleSearch()}>
                <div className="SearchbarDesktop_SearchbtnText">SEARCH</div>
            </div>
        </div>
        <div className="Searchbar_DesktopSwiper">
            <div className="Searchbar_Slidercont">
                <div className="searchbarDesktop_SwiperWrapper">
                    <div className="SeatcnBardesktop_Slide" onClick={() => handleLocationClick("Badlapur")}>
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Badlapur</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide" onClick={() => handleLocationClick("Kharvani")}>
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Kharvani</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide" onClick={() => handleLocationClick("southeast")}>
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Ambernath</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide" onClick={() => handleLocationClick("Dombivali")}>
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Dombivali</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide" onClick={() => handleLocationClick("Thakurli")}>
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Thakurli</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SearchbarDesktop_NavigationBtncont"></div>
        </div>

    </>
}

export default SearchBar