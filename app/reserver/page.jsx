"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useContext, useEffect } from "react";
import "./page.css";
export default function page() {
  const [islogged, setIslogged] = useState(false);
  const [reservedata, setReservedata] = useState("");
  const [user, setUser] = useState("");
  const [voyageid, setVoyageid] = useState("");
  useEffect(() => {
    const usertoken = localStorage.getItem("token");
    if (usertoken) {
      // router.push("/login");
      setIslogged(true);
    }
    fetch("http://localhost:8080/api/reservation", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + usertoken,
      },
    })
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setReservedata(data));
  });

  return (
    <div>
      <Navbar logged={islogged} />
      <h1>Mes Reservation</h1>

      {[reservedata].map((data, index) => {
        return (
          <div className="reserve-card">
            <div className="time">
              <p>{data.user}</p>
              <p>25-05-2024</p>
            </div>
            <div className="ville">
              <p>Agadir</p>
            </div>
            <div className="Nbr personnes">
              <p>Nbr personnes:40</p>
            </div>
            <div className="price">
              <p>600DH</p>
            </div>

            <div className="transport">
              <p>Bus</p>
            </div>
            <div className="description">
              <p>Agadir tour c joli</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
