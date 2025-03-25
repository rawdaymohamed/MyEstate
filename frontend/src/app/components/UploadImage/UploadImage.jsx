"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadImage = ({ setAvatar }) => {
  return (
    <CldUploadWidget
      uploadPreset="cloudinary"
      onSuccess={(result) => {
        if (result.info && result.info.secure_url) {
          setAvatar(result.info.secure_url); // Save the uploaded image URL
        }
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()} // Ensure open() is called correctly
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadImage;
