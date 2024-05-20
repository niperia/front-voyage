"use client";
import React, { useState } from "react";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const Addvoyages = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);

  function handleActivityChange(e) {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedActivities(selectedValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.set("activity", JSON.stringify(selectedActivities));

    const usertoken = localStorage.getItem("token");

    fetch("http://localhost:8080/api/Voyage", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          alert("success");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.container}>
      <form method="post" className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom Voyage" name="Name" required />
        <input type="text" placeholder="Ville" name="ville" required />
        <input
          type="text"
          placeholder="Description"
          name="Description"
          required
        />
        <select name="transport" id="cat2">
          <option value="">Choose a Transport</option>
          <option value="Bus">Bus</option>
          <option value="miniBus">miniBus</option>
          <option value="avion">avion</option>
          <option value="Bateau">Bateau</option>
        </select>
        {/* <select
          name="activity"
          id="cat"
          multiple
          value={selectedActivities}
          onChange={handleActivityChange}
        >
          <option value="cultures">Cultures</option>
          <option value="urbain">Urbain</option>
          <option value="rural">Rural</option>
          <option value="gastronomic">Gastronomic</option>
          <option value="adventure">Adventure</option>
          <option value="santé">Santé</option>
          <option value="sportif">Sportif</option>
          <option value="religieux">Religieux</option>
          <option value="écologique">Écologique</option>
          <option value="balnéaire">Balnéaire</option>
        </select> */}
        <input type="text" placeholder="activ" name="activity" />
        <input
          type="text"
          placeholder="Nombre de personne"
          name="nbr_per"
          required
        />

        <input
          type="text"
          placeholder="Exemple:DD-MM-YYYY"
          name="date_debut"
          required
        />
        <input
          type="text"
          placeholder="Exemple:DD-MM-YYYY"
          name="date_fin"
          required
        />
        <input type="text" placeholder="Hebergement" name="hebergement" />
        <input
          type="text"
          placeholder="Nombre de personne"
          name="nbr_per"
          required
        />
        <input type="text" placeholder="Prix Voyage" name="prix" required />
        {/* <div className="Image">
          <input type="file" placeholder="Image" className="pa" name="image" />
        </div> */}
        <button type="submit">Save User</button>
      </form>
    </div>
  );
};

export default Addvoyages;
