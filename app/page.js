"use client";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Backpic from "@/components/Backpic/Backpic";
import ReserveCard from "@/components/ReserveCard";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./page.css";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "./layout";

const App = () => {
  const [islogged, setIslogged] = useState(false);
  const [Voyagedata, setVoyagedata] = useState([]);
  const [ville, setVille] = useState();
  const [datedepart, setDatedepart] = useState();
  const router = useRouter();
  const [datearrive, setDatearrive] = useState();
  const handleCountryChange = (event) => {
    setVille(event.target.value);
  };
  const handledatearrivechange = (event) => {
    setDatearrive(event.target.value);
  };
  const handledatedepartchange = (event) => {
    setDatedepart(event.target.value);
  };

  function getvoyage() {
    let url = "http://localhost:8080/api/Voyage?";
    if (ville) {
      url += "ville=" + ville + "&";
    }
    if (datedepart) {
      url += "Date_debut=" + datedepart.replaceAll("-", "/") + "&";
    }

    if (datearrive) {
      url += "Date_fin=" + datearrive.replaceAll("-", "/") + "&";
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVoyagedata(data));
  }

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
      <Backpic
        getvoyage={getvoyage}
        handleCountryChange={handleCountryChange}
        handledatedepartchange={handledatedepartchange}
        handledatearrivechange={handledatearrivechange}
      />

      <div className="list-reserve">
        <ReserveCard dtvoyage={Voyagedata} />
        {/* <ReserveCard />
        <ReserveCard /> */}
      </div>

      <div className="subbackpic">
        <p>Nos Services a Bord</p>
        <ul className="service">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72H144V56zm176 72H288V56c0-30.9-25.1-56-56-56H152C121.1 0 96 25.1 96 56v72H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32H256c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <span>Bagages</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
            </svg>
            <span>Wifi</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
            </svg>
            <span>Chargeur</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
            </svg>
            <span>Divertissement</span>
          </li>
        </ul>
      </div>
      <div className="All-cards">
        {" "}
        <div class="card">
          <img src="./Ouarzazate.jpg"></img>
          <div class="card-content">
            <h3 class="card-title">
              Les 8 choses incontournables à faire à Fès
            </h3>
            <p class="card-text">
              Fès est la ville culturelle et spirituelle du Maroc qui abrite la
              plus ancienne et la plus grande médina d'Afrique du Nord, classée
              au patrimoine mondial de l’UNESCO. Avant tout, la ville était la
              capitale du Maroc et est encore largement considérée comme la
              capitale spirituelle du pays.{" "}
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./Marrakech.jpg"></img>
          <div class="card-content">
            <h3 class="card-title">
              4 bonnes raisons pour visiter la Médina de Marrakech
            </h3>
            <p class="card-text">
              La Médina de Marrakech est le cœur historique de la ville ocre,
              inscrite sur la liste du patrimoine mondial de l'UNESCO. La Médina
              est l'un des lieux incontournables de la ville qu'il ne faut
              surtout pas rater.{" "}
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./Fes-1.jpg"></img>
          <div class="card-content">
            <h3 class="card-title">
              Ouarzazate, découvrez la porte du désert marocain
            </h3>
            <p class="card-text">
              Ouarzazate et les oasis du sud Ouarzazate est une destination
              authentique regorgeant de mille et une merveilles à couper le
              souffle. Elle offre des vues spectaculaires combinant déserts et
              vallées verdoyantes.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
