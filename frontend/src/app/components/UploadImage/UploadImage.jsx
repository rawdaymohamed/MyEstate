"use client";
import React from "react";

const UploadImage = ({ setAvatarFile }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
    }
  };

  return (
    <div className="mt-3">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Upload Image
      </label>
    </div>
  );
};

export default UploadImage;
