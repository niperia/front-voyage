import { Router, User } from "lucide-react";
import React from "react";

export default function reservebutton({ voyage_id }) {
  function reserver() {
    const user_id = localStorage.getItem("user_id");
    const usertoken = localStorage.getItem("token");
    console.log("user_id:", user_id);
    console.log("user_id:", usertoken);
    if (!usertoken) {
      alert("Vous avez besoin de se connecter ");
      return;
    }
    fetch("http://localhost:8080/api/reservation", {
      method: "post",
      body: JSON.stringify({ User: user_id, voyage: voyage_id }),
      headers: {
        Authorization: "Bearer " + usertoken,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => (data.id ? alert("reservee") : ""));
  }
  return (
    <button onClick={reserver} className="btn">
      Reserver
    </button>
  );
}
