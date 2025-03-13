import Link from "next/link";
import React from "react";
import { RiBuilding2Fill } from "react-icons/ri";
import { menuItems } from "@/app/lib/constants";
const Navbar = () => {
  return (
    <nav className="h-[8vh] bg-[#0d1b2a] flex items-center shadow-3xl text-gray-200 sticky ">
      <div className="flex items-center justify-between w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="flex gap-8 flex-3">
          <Link href="/" className="flex items-center gap-3">
            <RiBuilding2Fill className="size-6" />
            <div className="font-bold">MyEstate</div>
          </Link>

          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.url}
              key={menuItem.id}
              className="relative group w-fit"
            >
              {menuItem.label}
              <span className="absolute block h-[1.5px] bg-amber-400 w-full scale-x-0 group-hover:scale-x-100 origin-right transition duration-200"></span>
            </Link>
          ))}
        </div>

        <div className="flex gap-3 flex-2 justify-end">
          <Link href="/" className="px-4 py-2 hover:text-white">
            Login
          </Link>
          <Link
            href="/"
            className="bg-amber-300 hover:bg-amber-400 transition duration-300 ease-in-out text-gray-900 px-4 py-2"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
