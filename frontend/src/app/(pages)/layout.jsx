import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ResponsiveNav from "../components/Navbar/ResponsiveNav";

export const metadata = {
  title: "MyEstate",
  description: "MERN Stack Real Estate web app",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <ResponsiveNav />
      <div className="pt-[12vh] w-[98%] lg:w-[80%] xl:w-[70%] mx-auto">
        {children}
      </div>
    </div>
  );
}
