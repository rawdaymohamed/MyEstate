import Image from "next/image";
import React from "react";
import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaTag,
  FaHeart,
  FaCommentDots,
} from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-[250px]">
        {item.img ? (
          <Image
            src={item.img}
            width={350}
            height={250}
            alt={item.title}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}

        {/* Floating Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
            <FaHeart className="text-gray-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
            <FaCommentDots className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {item.title}
        </h2>

        {/* Address */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaMapMarkerAlt className="text-amber-500" />
          <span className="truncate">{item.address}</span>
        </div>

        {/* Features */}
        <div className="flex gap-6 text-gray-700 text-sm mt-2">
          <div className="flex items-center gap-1">
            <FaBed className="text-amber-500" />
            <span>{item.bedroom} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-amber-500" />
            <span>{item.bathroom} Bath</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-lg font-bold text-amber-500">
            ${item.price}
            <FaTag className="ml-2" />
          </div>
          <button className="cursor-pointer bg-amber-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
