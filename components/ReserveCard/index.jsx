import React from "react";
import "./index.css";
import Reservebutton from "@/components/Reservebutton";
export default function index({ dtvoyage }) {
  return (
    <>
      {dtvoyage.map((data, index) => {
        return (
          <div className="reserve-card" key={index}>
            <div className="reserve-info">
              <div className="ville">
                <img
                  src={`http://localhost:8080/api/images/${data.image}`}
                ></img>
              </div>

              <div className="time">
                <p>{data.date_debut}</p>
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
            <div className="reserver">
              <Reservebutton voyage_id={data.id} />
            </div>
          </div>
        );
      })}
    </>
  );
}
