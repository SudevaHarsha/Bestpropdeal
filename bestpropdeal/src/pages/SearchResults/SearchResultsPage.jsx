import React, { useState } from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import "./SearchResultsPage.css"
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import SeoLinks from '../../components/SEO Links/SeoLinks'
import Footer from '../../layout/Footer/Footer'
import SearchResultsPropertycard from '../../components/SearchResultsPropertycard/SearchResultsPropertycard'
import SearchPageCardCont from './SearchPageCardCont'
import Slide from '../../components/Slide'
import "../Homepage/HomePage.css"
import BookASiteVisit from '../../forms/BookASiteVisit'

const SearchResultsPage = () => {

  const { state } = useLocation();
  const [bookASiteVistHome, setBookASiteVistHome] = useState(0);
  const { filteredResults, searchFilters, type, selectedLocation } = state;
  const Navigation = ["home", `${searchFilters && searchFilters.map((item) => { return item })} ${type && type.map((item) => { return item })} Properties ${"at " + selectedLocation || 'mumbai'} in mumbai`];
  console.log(filteredResults, Navigation);

  const centerLattitude = filteredResults[0].Lattitude;
  const centerLongitude = filteredResults[0].Longitude;

  return <>
    <Navbar type="sticky" bcolor="#342f30" />
    <div className="SearchPage_SearchCont">
      <div className="SearchResults_SearchOverviewCont">
        <div>
          <div className="SearchResults_NavigationCont">
            {
              Navigation.map((item) => {
                return <div className="SearchResults_NavigationBtn">
                  <Link to="/"></Link>
                  <div className="SearchResults_NavigationBtnText">{item}</div>
                  <div className="SearchResults_NavigationBtnText">{'>'}</div>
                </div>
              })
            }
          </div>
        </div>
        <div className="SearchResults_SearchOverview_HeadingCont">
          <span>
            <h2 className="SearchResults_SearchOverview_Heading">
              <div className="SearchResults_SearchOverview_HeadingText">Property in {selectedLocation && selectedLocation} for Sale</div>
            </h2>
          </span>
        </div>
        <div className="SearchBar_DesktopCont">
          <SearchBar />
        </div>
        <div className="SearchResults_SubHeaderCont">
          <div className="SearchResults_TruncatedTextCont">
            <div className="SearchResults_TruncatedText">
              <div className="SearchResults_SubheaderText">Buy Property in malabar hill mumbai with Blox. Verified Inventory | Direct from Developers | Dedicated Relationship Manager </div>
              <div className="SearchResults_SubheaderReadmoreBtn">read more</div>
            </div>
          </div>
          <div className="SearchResults_PropertyCountCont">
            <div className="SearchResults_PropertyCountText">Showing 1-{filteredResults.length} of {filteredResults.length} properties</div>
          </div>
        </div>
      </div>
      <div>
        <div className="SearchResults_ResultCardCont">
          <div style={{ height: "100%", width: "calc(100vw - 700px)", "z-index": "-123" }}>
            <MapContainer center={[centerLattitude, centerLongitude]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {
                filteredResults.map((result) => {
                  return <Marker position={[result.Lattitude, result.Longitude]}>
                    <Popup>
                      {result.Title}
                    </Popup>
                  </Marker>
                })
              }
            </MapContainer>
          </div>
          {/* <SearchPageCardCont filteredResults={filteredResults} /> */}
          <div className="SearchResults_PropertyCard__PropertyCardCont">
            {
              filteredResults.map((property, index) => {
                return <SearchResultsPropertycard property={property} index={index} />
              })
            }
          </div>

        </div>
        <div className="SearchResults_PropertyCard__PropertyCardContMobile">
          {
            filteredResults.map((property, index) => {
              return <Slide property={property} index={index} setBookASiteVist={setBookASiteVistHome} />
            })
          }
        </div>
        <div className={`${bookASiteVistHome ? "property_Deatiles_rmcard_callrm_form_container" : "property_Deatiles_rmcard_callrm_form_containerdisplay"}`}>
          <BookASiteVisit bookASiteVist={bookASiteVistHome} setBookASiteVist={setBookASiteVistHome} />
        </div>
      </div>
    </div>
    {/* <div className="SearchPage_SearchSeoLinks"></div> */}
    <div className="propertyseoLinks">
      <SeoLinks />
    </div>
    <div className="Fottercont">
      <Footer />
    </div>
  </>
}

export default SearchResultsPage