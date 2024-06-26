"use client"
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { useState } from 'react'; 
import React from "react";
export const UserContext = React.createContext(null); 
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [islogged, setislogged] = useState(null);

  return (
    <html lang="en">
      
      <UserContext.Provider value={{ islogged:islogged, setislogged: setislogged }}><body className={inter.className}>{children}
      </body>
      </UserContext.Provider>
    </html>
  );
}
