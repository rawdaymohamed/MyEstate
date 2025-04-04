"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // Check for client-side rendering (CSR) to ensure this only runs on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state to true once the component is mounted on the client
  }, []);

  // On initial load, retrieve the token and user data from localStorage
  useEffect(() => {
    if (isClient) {
      // Only run this after the component has mounted on the client
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
    }
  }, [isClient]); // Only execute this once the component has mounted on the client

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

  // Don't render anything while waiting for CSR
  if (!isClient) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
