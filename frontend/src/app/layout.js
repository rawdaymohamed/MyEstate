
"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "MyEstate",
//   description: "MERN Stack Real Estate web app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="h-screen flex flex-col">
            <ResponsiveNav />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
