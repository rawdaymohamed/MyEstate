import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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

  return (
    <MapContainer
      ref={mapRef}
      center={[-6.2088, 106.8456]}
      zoom={13}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          ref={(ref) => {
            if (ref) {
              markerRefs.current[location.id] = ref;
            }
          }}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
