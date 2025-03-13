import Image from "next/image";
import React from "react";

const MyHome = () => {
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex h-screen">
      {/* Text container */}
      <div className="flex-1 flex flex-col gap-4 p-10 items-center justify-center ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Find Your Perfect Home, Effortlessly.
        </h1>
        <p className="font-light leading-7 text-gray-600">
          We understand that finding the right home is more than just a
          transaction—it's about finding your place. That's why we've created a
          user-friendly platform with powerful search filters and local insights
          to guide you every step of the way. Begin your search and unlock your
          future.
        </p>
      </div>
      {/* Image container */}
      <div className="flex-1 h-screen relative">
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
