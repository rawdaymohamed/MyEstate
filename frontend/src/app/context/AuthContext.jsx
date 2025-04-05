"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // Use effect to only access localStorage on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []); // Runs only on the client-side after initial render

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only try to set items in localStorage if we're on the client
      if (token && currentUser) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [token, currentUser]);

  // Debugging logs
  useEffect(() => {
    console.log("CurrentUser:", currentUser);
    console.log("Token:", token);
  }, [currentUser, token]);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
