"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";

const UserProfile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
      {/* User Profile Button (Click to Toggle Dropdown) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center gap-2 p-1 rounded-lg transition"
      >
        <Image
          src="/avatar.jpg"
          width={50}
          height={50}
          className="h-12 w-12 rounded-full object-cover border-2 border-amber-400"
          alt="User Avatar"
        />
        <span className="text-gray-800 text-sm font-bold">John Doe</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[110%] w-[180px] shadow-lg rounded-lg overflow-hidden transition-all duration-300 text-gray-800 bg-white">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 text-sm transition"
          >
            <FiUser className="text-lg" />
            Profile
          </Link>
          <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition">
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
