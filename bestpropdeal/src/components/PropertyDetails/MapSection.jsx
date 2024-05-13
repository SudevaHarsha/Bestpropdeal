import * as L from "leaflet";
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const MapSection = React.memo(({ property, activeLoc, activeCategory }) => {
    console.log(property.Locality.Locations);
    const LeafIcon = L.Icon.extend({
        options: {}
    });
    console.log(activeLoc)

    const activeIcon = {
        "Lattitude": "19.055394361702337",
        "Longitude": "72.82707968763982",
    }
    console.log(activeLoc.Lattitude);
    const blueIcon = new LeafIcon({
        iconUrl:
            "https://tse1.mm.bing.net/th?id=OIP.OFLlYhBrUK0hp2XGKzM8TAHaHa&pid=Api&P=0&h=180"
    });
    const greenIcon = new LeafIcon({
        iconUrl:
            "https://tse2.mm.bing.net/th?id=OIP.7Eq8gALCUrGCsDhf7HKtCgHaJh&pid=Api&P=0&h=180"
    });
    const locations = activeCategory ? property.Locality.Locations : property.Locality.Locations;

    const centerLattitude = activeLoc.Lattitude ? activeLoc.Lattitude : property.Lattitude
    const centerLongitude = activeLoc.Longitude ? activeLoc.Longitude : property.Longitude

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());

        return null;
    }

    const locationsonmap = activeLoc.Lattitude ? activeLoc : activeCategory

    console.log(centerLattitude, centerLongitude)

    return <>
        <MapContainer center={[centerLattitude, centerLongitude]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[property.Lattitude, property.Longitude]}>
                <Popup>
                    {property.Title}
                </Popup>
            </Marker>
            {activeCategory.length > 0 &&
                property.Locality.Locations.map((item) => {
                    return activeCategory.includes(item.Category) && <div><Marker className="marker_map" position={[item.Lattitude, item.Longitude]} icon={activeLoc.Lattitude === item.Lattitude && activeLoc.Longitude === item.Longitude ? blueIcon : greenIcon} >
                        {/*  icon={activeLoc.Lattitude === item.Lattitude && activeLoc.Longitude === item.Longitude ? blueIcon : greenIcon} */}
                        <Popup>
                            {item.Name}
                        </Popup>
                    </Marker>
                    </div>
                })
            }
            {activeCategory.length === 0 &&
                property.Locality.Locations.map((item) => {
                    return <Marker position={[item.Lattitude, item.Longitude]} icon={activeLoc.Lattitude === item.Lattitude && activeLoc.Longitude === item.Longitude ? blueIcon : greenIcon}>
                        {/*  icon={activeLoc.Lattitude === item.Lattitude && activeLoc.Longitude === item.Longitude ? blueIcon : greenIcon} */}
                        <Popup>
                            {item.Name}
                        </Popup>
                    </Marker>
                })
            }
            <SetViewOnClick
                coords={[
                    centerLattitude, centerLongitude
                ]}
            />
        </MapContainer >
    </>
})

export default MapSection