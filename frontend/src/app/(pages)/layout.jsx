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
      <div className="">{children}</div>
    </div>
  );
}
