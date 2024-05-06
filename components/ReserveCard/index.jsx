import React from "react";
import "./index.css";
export default function index({ dtvoyage }) {
  return (
    <>
      {dtvoyage.map((data, index) => {
        return (
          <div className="reserve-card" key={index}>
            <div className="time">
              <p>{data.date_debut}</p>
              <p>{data.date_fin}</p>
            </div>
            <div className="ville">
              <p>{data.ville}</p>
            </div>
            <div className="totalhours">
              <p>2h</p>
            </div>
            <div className="price">
              <p>{data.prix}</p>
            </div>
            <div className="reserver">
              <button className="btn">Reserver</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
