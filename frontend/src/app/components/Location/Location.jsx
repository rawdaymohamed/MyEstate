import React from "react";

const LocationCard = ({ location, onClick, isActive }) => {
  return (
    <li
      onClick={() => onClick(location)}
      className={`p-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-200 ${
        isActive ? "border-l-4 border-blue-500" : ""
      }`}
    >
      <img
        src={location.image}
        alt={location.name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{location.name}</h3>
      <p className="text-sm text-gray-600">{location.address}</p>
    </li>
  );
};

export default LocationCard;
