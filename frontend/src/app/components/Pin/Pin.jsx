import React from "react";

const Pin = ({ location }) => {
  return (
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
  );
};

export default Pin;
