"use client";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Slider from "@/app/components/Slider/Slider";
import { singlePostData, userData } from "@/app/lib/dummyData";
import {
  FaBath,
  FaBed,
  FaBus,
  FaCommentDots,
  FaHeart,
  FaLocationDot,
  FaSchool,
} from "react-icons/fa6";
import { FaTools, FaDollarSign } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { MdPets, MdSquareFoot } from "react-icons/md";
import dynamic from "next/dynamic";

const page = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/Map/Map"), {
        loading: () => <p>Map is loading</p>,
        ssr: false,
      }),
    []
  );
  const mapRef = useRef();
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  return (
    <div className="pt-[10vh] w-[100%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto h-auto pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
        <div className="h-full lg:col-span-3 p-6 overflow-y-auto">
          <Slider images={singlePostData.images} />
          <div className="py-6 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row justify-between py-6 gap-6 sm:gap-0">
              <div className="flex flex-col gap-3">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {singlePostData.title}
                </h1>
                <div className="flex items-center gap-2 font-light text-gray-500">
                  <FaLocationDot />
                  <span>{singlePostData.address}</span>
                </div>
                <p className="font-bold">${singlePostData.price}</p>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-4">
                <Image
                  src={userData.img}
                  width={100}
                  height={100}
                  alt=""
                  className="object-cover w-20 h-20 sm:w-24 sm:h-24 rounded-full"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {userData.name}
                </h2>
              </div>
            </div>
            <p className="text-gray-800 leading-7 text-sm sm:text-base">
              {singlePostData.description}
            </p>
          </div>
        </div>
        <div className="h-full xl:overflow-y-auto lg:col-span-2 p-6 flex flex-col gap-8 text-gray-800">
          <div className="flex flex-col gap-7">
            <p className="font-bold">General</p>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-center gap-3">
                <FaTools className="text-gray-500 size-5" />
                <div>
                  <span className="font-bold">Utilities</span>
                  <p className="font-light">Renter is responsible</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdPets className="text-gray-500 size-5" />
                <div>
                  <span className="font-bold">Pet Policy</span>
                  <p className="font-light">Pets allowed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaDollarSign className="text-gray-500 size-5" />
                <div>
                  <span className="font-bold">Property Fees</span>
                  <p className="font-light">
                    Must have income 3x the total household income
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Nearby Places</p>
            <div className="grid grid-cols-2 gap-4 text-sm md:text-md">
              <div className="flex items-center gap-2">
                <FaSchool className="text-gray-500 size-5" />
                <span>School - 250m</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBus className="text-gray-500 size-5" />
                <span>Bus Stop - 100m</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdRestaurant className="text-gray-500 size-5" />
                <span>Restaurants - 200m</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Sizes</p>s{" "}
              <div className="grid grid-cols-2 gap-4  text-sm md:text-md">
                <div className="flex items-center gap-2">
                  <MdSquareFoot className="text-gray-500 size-5" />
                  <span>80 sqft</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-gray-500 size-5" />
                  <span>2 Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-gray-500 size-5" />
                  <span>1 Bathroom</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-40 sm:h-48 z-10">
            <Map
              locations={[singlePostData]}
              mapRef={mapRef}
              selectedLocationId={selectedLocationId}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button className="flex gap-2 items-center bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
              <FaHeart className="text-gray-500" />
              <p>Save</p>
            </button>
            <button className="flex gap-2 items-center bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
              <FaCommentDots className="text-gray-500" />
              <p>Message</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
