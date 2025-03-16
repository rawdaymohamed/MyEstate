import React from "react";
import Image from "next/image";
import Slider from "@/app/components/Slider/Slider";
import { singlePostData, userData } from "@/app/lib/dummyData";
import { FaLocationDot } from "react-icons/fa6";
const page = () => {
  return (
    <div className="pt-[10vh] w-[98%] lg:w-[80%] xl:w-[70%] mx-auto h-[90vh]">
      {/* Details */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
        <div className="h-full lg:col-span-3 p-6  ">
          <Slider images={singlePostData.images} />
          {/* Info */}
          <div className="py-6 flex flex-col gap-5">
            {/* Top */}
            <div className="flex flex-row justify-between py-6">
              {/* Left */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  {singlePostData.title}
                </h1>
                <div className="flex items-center gap-2 font-light text-gray-500">
                  <FaLocationDot />
                  <span>{singlePostData.address}</span>
                </div>
                <p className="font-bold">${singlePostData.price}</p>
              </div>
              {/* Right */}
              <div className="flex flex-col gap-4">
                <Image
                  src={userData.img}
                  width={300}
                  height={300}
                  alt=""
                  className="object-cover w-24 h-24 rounded-full"
                />
                <h2 className="text-lg w-fit font-semibold text-gray-800">
                  {userData.name}
                </h2>
              </div>
            </div>
            <p className="text-gray-800 leading-7">
              {singlePostData.description}
            </p>
          </div>
        </div>
        {/* Features */}
        <div className="h-full lg:col-span-2 p-4">Features</div>
      </div>
    </div>
  );
};

export default page;
