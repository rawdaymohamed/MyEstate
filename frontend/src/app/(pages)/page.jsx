"use client";
import MyHome from "../components/Home/Home";
import { AuthProvider } from "../context/AuthContext";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <MyHome />
      </AuthProvider>
    </>
  );
}
