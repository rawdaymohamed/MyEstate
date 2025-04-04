"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // On initial load, retrieve the token and user data from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setLoading(false); // Set loading to false once data is fetched
  }, []);

  // Whenever the currentUser or token changes, update localStorage
  useEffect(() => {
    if (token && currentUser) {
      localStorage.setItem("token", token); // Store token in localStorage
      localStorage.setItem("user", JSON.stringify(currentUser)); // Store user data in localStorage
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [currentUser, token]);

  // Render loading state until user and token are set
  if (loading) {
    return <div>Loading...</div>; // Or a spinner/loading component
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
