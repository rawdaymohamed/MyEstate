"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Searchbar from "../Navbar/Searchbar/Searchbar";
import { AuthContext } from "@/app/context/AuthContext";

const MyHome = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col lg:flex-row h-screen">
      {/* Text container */}
      <div className="flex-1 w-[90%] sm:w-[70%] md:w-[50%] lg:max-w-md mx-auto flex flex-col gap-6 p-6 md:p-10 justify-center rounded-2xl shadow-lg bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
          Find Your Perfect Home, Effortlessly.
        </h1>
        <p className="font-light text-sm leading-7 text-gray-600 ">
          We understand that finding the right home is more than just a
          transaction—it's about finding your place. That's why we've created a
          user-friendly platform with powerful search filters and local insights
          to guide you every step of the way. Begin your search and unlock your
          future.
        </p>

        {/* Prevent squeezing */}
        <div className="w-full ">
          <Searchbar />
        </div>
      </div>

      {/* Image container - Hidden on small & medium screens */}
      <div className="hidden lg:block lg:flex-1 h-screen relative">
        <Image
          src="/bg3.jpg"
          fill
          alt="Background Image"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MyHome;
