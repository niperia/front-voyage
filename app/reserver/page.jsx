"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./page.css";

export default function Page() {
  const [isLogged, setIsLogged] = useState(false);
  const [reserveData, setReserveData] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setIsLogged(true);
    }
    fetch("http://localhost:8080/api/reservation/my", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReserveData(data);
      });
  }, []);

  return (
    <div>
      <Navbar logged={isLogged} />
      <h1>Mes Reservations</h1>
      {reserveData.map((data, index) => (
        <div className="blyat" key={index}>
          <div className="reserve-info">
            <div className="ville">
              <img src={`http://localhost:8080/api/images/${data.image}`}></img>
            </div>

            <div className="time">
              <p>{data.user}</p>
              <p>{data.date_fin}</p>
            </div>
            <div className="ville">
              <p>{data.ville}</p>
            </div>
            <div className="Nbr personnes">
              <p>Nbr personnes:{data.nbr_per}</p>
            </div>
            <div className="price">
              <p>{data.prix}DH</p>
            </div>

            <div className="transport">
              <p>{data.transport}</p>
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
