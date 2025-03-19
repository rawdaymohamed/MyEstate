"use client";
import { useState, useRef, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "New message from admin",
    "Your listing was approved",
    "You have a new follower",
  ]);
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
    <div className="relative" ref={dropdownRef}>
      {/* Notification Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
      >
        <IoNotificationsOutline className="text-gray-700 text-2xl" />

        {/* Notification Badge */}
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300">
          {notifications.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto">
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="px-4 py-2  text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  {notification}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No new notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
