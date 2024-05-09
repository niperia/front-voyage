"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useContext, useEffect } from "react";
import "./page.css";
export default function page() {
  const [islogged, setIslogged] = useState(false);
  useEffect(() => {
    const usertoken = localStorage.getItem("token");
    if (usertoken) {
      // router.push("/login");
      setIslogged(true);
    }
  });
  return (
    <div>
      <Navbar logged={islogged} />
      <h1>Mes Reservation</h1>
      <div className="reserve-card">
        <div className="time">
          <p>25-05-2024</p>
          <p>25-05-2024</p>
        </div>
        <div className="ville">
          <p>Agadir</p>
        </div>
        <div className="Nbr personnes">
          <p>Nbr personnes:60</p>
        </div>
        <div className="price">
          <p>600DH</p>
        </div>

        <div className="transport">
          <p>Bus</p>
        </div>
        <div className="description">
          <p>Thisis a very good place</p>
        </div>
      </div>
    </div>
  );
}
