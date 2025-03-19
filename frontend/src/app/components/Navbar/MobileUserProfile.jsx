"use client";
import Image from "next/image";
import Link from "next/link";

const MobileUserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 rounded-lg">
      {/* Avatar */}
      <Image
        src="/avatar.jpg"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover border-2 border-amber-400"
        alt="User Avatar"
      />

      {/* Profile Link */}
      <Link
        href="/profile"
        className="text-white text-sm font-medium hover:underline"
      >
        {user?.name || "John Doe"}
      </Link>
    </div>
  );
};

export default MobileUserProfile;
