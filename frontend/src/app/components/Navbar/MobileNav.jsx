"use client";
import { mobileMenuItems } from "@/app/lib/constants";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <div
        className="m-3 p-1 bg-black rounded-full"
        onClick={() => setOpen(!open)}
      >
        <MdOutlineMenu className="text-white size-6 z-50 relative cursor-pointer" />
      </div>

      <div
        className={`transition-all ease-in-out duration-500 absolute h-[100vh] bg-black text-white w-[70%] top-0 z-40 
        ${
          open
            ? "right-0 opacity-100 pointer-events-auto"
            : "-right-[50%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-1 flex-col gap-10 p-10 items-center justify-center h-full">
          {mobileMenuItems.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.url}>
              {menuItem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
