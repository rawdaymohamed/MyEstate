"use client";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { AuthContext } from "@/app/context/AuthContext";

const ResponsiveNav = () => {
  let { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="hidden lg:block">
        <Navbar user={currentUser} />
      </div>
      <div className="block lg:hidden">
        <MobileNav user={currentUser} />
      </div>
    </div>
  );
};

export default ResponsiveNav;
