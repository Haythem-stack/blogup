"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("user");
    return value || null;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setUser(user);
  };

  
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <ThemeContext.Provider value={{ user, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};