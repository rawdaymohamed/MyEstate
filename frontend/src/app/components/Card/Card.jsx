import Image from "next/image";
import React from "react";
import { FaBed, FaBath, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-sm">
      {/* Property Image */}
      <div className="relative w-full h-56">
        <Image
          src={item.img}
          layout="fill"
          objectFit="cover"
          alt={item.title}
          className="rounded-t-xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title with Fixed Height & Truncation */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight max-h-[48px] overflow-hidden line-clamp-2">
          {item.title}
        </h2>

        {/* Address */}
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <FaMapMarkerAlt className="text-amber-500 mr-1" />
          <span className="truncate">{item.address}</span>
        </div>

        {/* Features (Bedrooms & Bathrooms) */}
        <div className="flex justify-between mt-3 text-gray-700 text-sm">
          <div className="flex items-center">
            <FaBed className="mr-1 text-amber-500" />
            <span>{item.bedroom} Bed</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-amber-500" />
            <span>{item.bathroom} Bath</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-lg font-bold text-amber-500">
            <FaTag className="mr-1" />${item.price}
          </div>

          {/* View Details Button */}
          <button className="cursor-pointer bg-amber-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
