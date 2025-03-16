"use client";
import Image from "next/image";
import React, { useState } from "react";

const Slider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Big Image */}
      <div className="relative w-full h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
        <Image
          src={selectedImage}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          alt="Selected"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(image)}
            className={`relative w-[100px] h-[80px] rounded-md overflow-hidden border-2 ${
              selectedImage === image ? "border-gray-800" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              width={100}
              height={80}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80 cursor-pointer"
              alt={`Thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
