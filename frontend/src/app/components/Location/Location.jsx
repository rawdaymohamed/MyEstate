import React from "react";

const LocationCard = ({ location }) => {
  return (
    <li
      className={`p-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-200 
        
      `}
    >
      <img
        src={location.img}
        alt={location.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{location.title}</h3>
      <p className="text-sm text-gray-600">{location.address}</p>
    </li>
  );
};

export default LocationCard;
