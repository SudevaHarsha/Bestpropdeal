import * as L from "leaflet";
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const MapSection = React.memo(({ property, activeLoc, activeCategory }) => {
    const blueIcon = new L.Icon({
        iconUrl: "https://maps.app.goo.gl/X5TnDQtLruL9WJCw8?g_st=iwb",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    const greenIcon = new L.Icon({
        iconUrl: "https://ibb.co/VqTTDBr",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    const centerLat = activeLoc?.Lattitude || property?.Lattitude;
    const centerLng = activeLoc?.Longitude || property?.Longitude;

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    return (
        <MapContainer center={[centerLat, centerLng]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[property.Lattitude, property.Longitude]}>
                <Popup>{property.Title}</Popup>
            </Marker>
            {property.Locality.Locations.map((item) => (
                <Marker
                    key={item.Name}
                    position={[item.Lattitude, item.Longitude]}
                    icon={blueIcon}
                >
                    <Popup>{item.Name}</Popup>
                </Marker>
            ))}
            <SetViewOnClick coords={[centerLat, centerLng]} />
        </MapContainer>
    );
});

export default MapSection;
