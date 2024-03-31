import React from 'react'

const Searchbar2 = () => {
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
                                                <img src="https://blox.xyz/assets/icons/map-pin-secondary.svg" className='SearchDropdown_LocationImg'></img>
                                                <div className="SearchDropdown_LocationText">LOCATION</div>
                                            </div>
                                            <div className="SearchResultCont">
                                                {searchLocation && foundLocations.map((loc, index) => {
                                                    return <div className="ResultedLocations" key={index} onClick={() => setSelectedLocation([...selectedLocation, loc])}>{loc}</div>
                                                })}
                                            </div>
                                        </div>
                                        : <div className="SearchDropdown_NoResultsCont">
                                            <img src='https://blox.xyz/_next/image?url=%2Fassets%2Fimages%2Fsearch%2Fdefault-search.png&w=256&q=75'></img>
                                            <div className="SearchDropDown_NoSearchText">Your search results will display here</div>
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
                    <div className="SearchbarDesktop_Searchbar">
                        <img src='https://blox.xyz/assets/icons/search-primary.svg'></img>
                        <div className="SearchbarDesktop_InputOutercont" onClick={() => setOpen(!open)}>
                            <div className="SearchbarDesktop_LabelHeading">FIND YOUR DREAM HOME</div>
                            <div className="SearchbarDesktop_inputCont">
                                <div className="Searchbar_input__inputcontent">
                                    <input type="text" class="Input_Text-sm__VH_0e Input_InputField__L01BX Input_primary___ZVfL SearchBarDesktop_InputCls__WFBcs SearchBarDesktop_primary__doY22" placeholder="Search for Developers, Location, Projects" maxlength="500" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
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
                                    <img className='SearchbarDesktop_PrimaryIcon SearchbarDesktop_PrimaryIcon' src="https://blox.xyz/assets/icons/arrow-down-primary.svg"></img>
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
                                    <img className='SearchbarDesktop_PrimaryIcon SearchbarDesktop_PrimaryIcon' src="https://blox.xyz/assets/icons/arrow-down-primary.svg"></img>
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
                    <div className="SeatcnBardesktop_Slide">
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Badlapur</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide">
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Vangani</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide">
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Ambernath</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide">
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Dombivali</div>
                            </div>
                        </div>
                    </div>
                    <div className="SeatcnBardesktop_Slide">
                        <div className="SeatcnBardesktop_SlideBtn">
                            <div className="Searchbar_SliderBtn__textcont">
                                <div className="Searchbar_SliderBtn__text">Thakurli</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <din className="SearchbarDesktop_NavigationBtncont"></din>
        </div>

    </>
}

export default Searchbar2