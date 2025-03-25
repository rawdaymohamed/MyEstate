"use client";
import UploadImage from "@/app/components/UploadImage/UploadImage";
import { AuthContext } from "@/app/context/AuthContext";
import { apiRequest } from "@/app/lib/apiRequest";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const EditPage = () => {
  const [error, setError] = useState("");
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [avatarFile, setAvatarFile] = useState(null);
  const router = useRouter();

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    // Append image file if available
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    try {
      const response = await apiRequest.put(
        `/users/${currentUser.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCurrentUser(response.data.data);
      router.push("/profile");
    } catch (err) {
      setError(
        err.response.data.message || "User edit failed. Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white shadow-xl rounded-lg p-6 sm:p-8 flex flex-col items-center">
        <h1 className="text-gray-800 text-2xl font-bold text-center mb-5">
          Edit Profile
        </h1>
        {error && (
          <span className="text-red-500 text-sm text-center">{error}</span>
        )}

        {/* Avatar */}
        <Image
          src={
            avatarFile
              ? URL.createObjectURL(avatarFile)
              : currentUser?.avatar || "/noavatar.jpg"
          }
          height={100}
          width={100}
          alt="Profile Avatar"
          className="object-cover h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-gray-300"
        />
        <UploadImage setAvatarFile={setAvatarFile} />

        {/* Form */}
        <form className="flex flex-col gap-5 w-full mt-5" onSubmit={handleEdit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              defaultValue={currentUser?.username}
              id="username"
              name="username"
              className="py-2 border-b-2 border-gray-300 focus:border-amber-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={currentUser?.email}
              className="py-2 border-b-2 border-gray-300 focus:border-amber-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="py-2 border-b-2 border-gray-300 focus:border-amber-500 focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-amber-500 text-white font-semibold py-2 rounded-md hover:bg-amber-600 transition-all"
          >
            Edit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
