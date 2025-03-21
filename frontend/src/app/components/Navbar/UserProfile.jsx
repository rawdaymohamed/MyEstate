"use client";
import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";
import { apiRequest } from "@/app/lib/apiRequest";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
const UserProfile = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef(null);
  const handleLogout = async (e) => {
    await apiRequest.post("/auth/logout");
    setCurrentUser(null);
    router.push("/");
  };
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
        className="flex flex-row items-center gap-3 p-1 rounded-lg transition"
      >
        {/* <span className="text-gray-600 text-sm font-bold">
          {user?.username}
        </span> */}
        <Image
          src={`${user?.avatar || "/noavatar.jpg"}`}
          width={50}
          height={50}
          className="h-12 w-12 rounded-full object-cover border-2 border-amber-400"
          alt="User Avatar"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[110%] w-[180px] shadow-lg rounded-lg overflow-hidden transition-all duration-300 text-gray-800 bg-white">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 text-sm transition"
          >
            <FiUser className="text-lg" />
            {user.username}
          </Link>
          <button
            className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-400 transition"
            onClick={(e) => handleLogout(e)}
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
