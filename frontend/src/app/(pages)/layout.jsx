import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      {/* <ResponsiveNav /> */}
      {children}
    </div>
  );
}
