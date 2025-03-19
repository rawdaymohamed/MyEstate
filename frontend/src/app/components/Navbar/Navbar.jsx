"use client";
import { menuItems } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserProfile from "./UserProfile";

const Nav = ({ user }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-[10vh] transition-all duration-200 
       shadow-xl bg-white z-50 `}
    >
      <div className="flex items-center h-full">
        <nav className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="mr-0.5 -mt-1 font-extrabold text-gray-700 text-3xl ">
              My
            </span>
            <div className="text-lg font-bold uppercase tracking-wider">
              Estate
            </div>
          </Link>
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className="relative text-gray-800 w-fit after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400 after:w-full after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 hover:after:origin-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {user ? (
            <UserProfile />
          ) : (
            <Link
              href="/"
              className="px-6 py-1.5 bg-amber-400 hover:bg-amber-500 transition-all duration-500 ease-in-out text-white rounded-full font-normal"
            >
              Join Now
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
