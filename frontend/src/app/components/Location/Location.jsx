import Image from "next/image";
import Link from "next/link";
import React from "react";

const LocationCard = ({ location }) => {
  return (
    <Link
      href={`/${location.id}`}
      className="flex items-center gap-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-all p-3 w-64"
      aria-label={`View details for ${location.title}`}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          width={80}
          height={80}
          src={location.img}
          alt={location.title}
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 text-sm min-w-0">
        <span className="font-semibold text-blue-600 hover:underline truncate whitespace-nowrap overflow-hidden">
          {location.title}
        </span>
        <div className="text-gray-600">{location.bedroom} Bedrooms</div>
        <div className="font-medium text-gray-900">${location.price}</div>
      </div>
    </Link>
  );
};

export default LocationCard;
