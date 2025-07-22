import * as L from "leaflet";
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const MapSection = React.memo(({ property, activeLoc, activeCategory }) => {
  const blueIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png", 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png", 
    shadowSize: [41, 41]
  });

  const greenIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png", 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png", 
    shadowSize: [41, 41]
  });

  const redIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  const centerLat = parseFloat(activeLoc?.Lattitude || property?.Lattitude) || 0;
  const centerLng = parseFloat(activeLoc?.Longitude || property?.Longitude) || 0;

  const [filteredLocations, setFilteredLocations] = useState(property.Locality.Locations); 
  const mapRef = useRef(null);

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    mapRef.current = map; // Store the map instance in the ref
    return null;
  }

  useEffect(() => {
    if (!activeCategory || activeCategory.length === 0) {
      setFilteredLocations(property.Locality.Locations); 
    } else {
      let filtered = property.Locality.Locations.filter((location) =>
        activeCategory.includes(location.Category) 
      );

      // Remove activeLoc from filteredLocations
      /* if (activeLoc) {
        filtered = filtered.filter((location) => 
          !(location.Lattitude === activeLoc.Lattitude && location.Longitude === activeLoc.Longitude)
        );
      } */

      setFilteredLocations(filtered);
    }
  }, [activeCategory, property.Locality.Locations, activeLoc]); 

  return (
    <MapContainer center={[centerLat, centerLng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
        position={[property.Lattitude, property.Longitude]} 
        icon={blueIcon}
      > 
        <Popup>{property.Title}</Popup>
      </Marker>
      {filteredLocations.map((item) => (
        <Marker 
          key={item.Name}
          position={[item.Lattitude, item.Longitude]} 
          icon={greenIcon}
        >
          <Popup>{item.Name}</Popup>
        </Marker>
      ))}
      {/* {activeLoc && (
        <Marker 
          key={activeLoc?.Name}
          position={[activeLoc?.Lattitude, activeLoc?.Longitude]} 
          icon={redIcon}
        >
          <Popup>{activeLoc?.Name}</Popup>
        </Marker>
      )} */}
      <SetViewOnClick coords={[centerLat, centerLng]} />
    </MapContainer>
  );
});

export default MapSection;