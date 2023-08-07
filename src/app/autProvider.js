"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const email = "mdfan@gmail.com";
  const name = 'mdFaruk';
  
  const AuthUser = {
    email,
    name,

  }
   
  return (
    <ThemeContext.Provider value={AuthUser
    }>
      {children}
    </ThemeContext.Provider>
  );
}
