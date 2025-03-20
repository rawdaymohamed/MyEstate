import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const user = false;
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar user={user} />
      </div>
      <div className="block lg:hidden">
        <MobileNav user={user} />
      </div>
    </div>
  );
};

export default ResponsiveNav;
