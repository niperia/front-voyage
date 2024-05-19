import React from "react";
import { useEffect, useState } from "react";
import "./Backpic.css";
export default function Backpic({
  getvoyage,
  handleCountryChange,
  handledatearrivechange,
  handledatedepartchange,
}) {
  const [records, setRecords] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [datedepart, setDatedepart] = useState("");

  useEffect(() => {
    fetch(
      "https://countriesnow.space/api/v0.1/countries/cities/q?country=morocco"
    )
      .then((response) => response.json())
      .then((data) => setRecords(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="backpic">
      <div className="Backpic">
        <p className="txt">Planifier votre Safariya</p>
        <ul className="ulback">
          <li>
            <select
              name="origine"
              id="origin"
              // value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option selected hidden>
                Selectionner depart
              </option>
              {records.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </li>
          {/* <li>
            <select
              name="origine"
              id="origin"
              value={selectedCountry2}
              onChange={handleCountryChange2}
            >
              <option selected hidden>
                Selectionner ville destination
              </option>
              {records.map((city) => (
                <option key={1} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </li> */}
          <li>
            <input
              id="depart"
              type="date"
              // value={datedepart}
              onChange={handledatedepartchange}
            />
          </li>
          <li>
            <input
              id="depart"
              type="date"
              placeholder="date d'arrive"
              onChange={handledatearrivechange}
            />
          </li>
          {/* <li>
            <input
              id="personne"
              type="number"
              max={4}
              min={1}
              placeholder="Nombre de personne"
            />
          </li> */}
          <li>
            <button className="btn" type="button" onClick={getvoyage}>
              Rechercher
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
