"use client";
import Chat from "@/app/components/Chat/Chat";
import List from "@/app/components/List/List";
import { apiRequest } from "@/app/lib/apiRequest";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleLogout = async (e) => {
    const res = await apiRequest.post("/auth/logout");
    localStorage.removeItem("user");
    router.push("/");
  };
  return (
    <div className="pt-[5vh] md:pt-[12vh] w-[95%] lg:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 h-screen">
      {/* Details Section */}
      <div className="col-span-3 flex flex-col gap-8 p-6 md:p-8 bg-white shadow-xl rounded-2xl border border-gray-200 max-h-full overflow-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              User Information
            </h2>
            <button className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
              Update Profile
            </button>
          </div>

          <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md border border-gray-100">
            <div className="grid gap-4 md:gap-5">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Avatar:</span>
                <Image
                  src="/avatar.jpg"
                  width={90}
                  height={90}
                  className="w-16 h-16 object-cover rounded-full border-4 border-gray-300 shadow-md"
                  alt="User Avatar"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Username:</span>
                <span className="text-gray-600">rawdayasser</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Email:</span>
                <span className="text-gray-600">test1@test.com</span>
              </div>
              <button
                onClick={(e) => handleLogout(e)}
                className="w-fit cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* My List */}
        <div className="flex flex-col gap-6 w-full flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            My List
          </h2>
          <div className="w-full min-h-[200px]">
            <List />
          </div>
        </div>

        {/* Saved List */}
        <div className="flex flex-col gap-6 w-full flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Saved List
            </h2>
            <button className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
              Create New Post
            </button>
          </div>
          <div className="w-full min-h-[200px]">
            <List />
          </div>
        </div>
      </div>

      {/* Chat Section */}

      <Chat />
    </div>
  );
};

export default Page;
