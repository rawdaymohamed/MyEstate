import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationCard from "../Location/Location";

export default function CoworkingMap({
  locations,
  mapRef,
  selectedLocationId,
}) {
  const markerRefs = useRef({});

  useEffect(() => {
    if (selectedLocationId && markerRefs.current[selectedLocationId]) {
      const marker = markerRefs.current[selectedLocationId];
      marker.openPopup();
    }
  }, [selectedLocationId]);
  const center = locations.length
    ? [locations[0].latitude, locations[0].longitude]
    : [51.5074, -0.1278]; // Default to London
  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={7}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          ref={(ref) => {
            if (ref) {
              markerRefs.current[location.id] = ref;
            }
          }}
        >
          <Popup>
            <LocationCard location={location} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
