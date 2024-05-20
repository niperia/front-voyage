"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./page.css";

export default function Page() {
  const [isLogged, setIsLogged] = useState(false);
  const [reserveData, setReserveData] = useState([]);

  function formatDate(dateArray) {
    const [year, month, day] = dateArray;

    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  }

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
      <h1 className="reserve-text">Mes Reservations</h1>
      {reserveData.map((data, index) => (
        <div className="blyat" key={index}>
          <div className="reserve-info2">
            {/* <div className="ville">
              <img src={`http://localhost:8080/api/images/${data.image}`}></img>
            </div> */}
            <p>{data.nom_voyage}</p>
            <div className="time">
              <p>{formatDate(data.date)}</p>
            </div>
            {/* <div className="ville">
              <p>{data.ville}</p>
            </div>
            <div className="Nbr personnes">
              <p>Nbr personnes:{data.nbr_per}</p>
            </div> */}
            <div className="price">
              <p>{data.prix}DH</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
