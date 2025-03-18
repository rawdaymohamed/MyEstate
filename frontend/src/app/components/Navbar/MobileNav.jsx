"use client";
import { mobileMenuItems } from "@/app/lib/constants";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      {/* Menu Icon */}
      <div
        className="m-3 p-1 bg-black rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <MdOutlineMenu className="text-white size-6 z-50 relative" />
      </div>

      {/* Sidebar */}
      <div
        className={`transition-all ease-in-out duration-500 fixed h-screen bg-black text-white w-[50%] max-w-[400px] top-0 z-40 
        ${
          open
            ? "right-0 opacity-100"
            : "-right-[50%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-10 p-10 items-center justify-center h-full">
          {mobileMenuItems.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.url} className="text-lg">
              {menuItem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
