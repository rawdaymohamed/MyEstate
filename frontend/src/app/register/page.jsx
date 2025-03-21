"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      router.push("/login");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col lg:flex-row h-screen">
      {/* Login Form Container */}
      <div className="flex-1 max-w-md mx-auto flex flex-col gap-6 p-6 md:p-10 justify-center rounded-2xl shadow-lg bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome</h1>
        <p className="text-gray-600 text-center">Create a new Account</p>
        {error && (
          <span className="text-red-500 text-sm text-center">{error}</span>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
          <button className="w-full p-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition cursor-pointer">
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-500">
            Login
          </Link>
        </p>
      </div>

      {/* Image container - Hidden on small & medium screens */}
      <div className="hidden lg:block lg:flex-1 h-screen relative">
        <Image
          src="/bg3.jpg"
          fill
          alt="Background Image"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
