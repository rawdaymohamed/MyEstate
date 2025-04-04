"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiRequest } from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  let { setCurrentUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userInfo));
        router.push("/");
      } else {
        console.log("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col lg:flex-row h-screen">
      {/* Login Form Container */}
      <div className="flex-1 w-[90%] sm:w-[70%] md:w-[50%] lg:max-w-md mx-auto flex flex-col gap-6 p-6 md:p-10 justify-center rounded-2xl shadow-lg bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center">Login to continue</p>
        {error && (
          <span className="text-red-500 text-sm text-center">{error}</span>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
          <button
            disabled={isLoading}
            className="w-full p-3 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-500">
            Sign up
          </Link>
        </p>
      </div>

      {/* Image container - Hidden on small & medium screens */}
      <div className="hidden lg:block lg:flex-1 h-screen relative">
        <Image
          src="/bg3.jpg"
          width={700}
          height={700}
          alt="Background Image"
          className="object-cover h-full w-[400px]"
        />
      </div>
    </div>
  );
};

export default Login;
