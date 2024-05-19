"use client";
import React from "react";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const Addvoyages = () => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const usertoken = localStorage.getItem("token");

    // Convert FormData to JSON
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    fetch("http://localhost:8080/api/Voyage", {
      method: "POST",
      body: JSON.stringify(formDataObject),
      headers: {
        "Content-Type": "application/json",
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
        <input type="text" placeholder="Nom Voyage" name="name" required />
        <input type="text" placeholder="Ville" name="ville" required />
        <input
          type="text"
          placeholder="Description"
          name="description"
          required
        />
        <select name="transport" id="cat2">
          <option value="">Choose a Transport</option>
          <option value="Bus">Bus</option>
          <option value="miniBus">miniBus</option>
          <option value="avion">avion</option>
          <option value="Bateau">Bateau</option>
        </select>
        <select name="activity" id="cat">
          <option value="">Choose an activity</option>
          <option value="cultures">cultures</option>
          <option value="urbain">urbain</option>
          <option value="rural">rural</option>
          <option value="gastronomic">gastronomic</option>
          <option value="adventure">adventure</option>
          <option value="santé">santé</option>
          <option value="sportif">sportif</option>
          <option value="religieux">religieux</option>
          <option value="écologique">écologique</option>
          <option value="balnéaire">balnéaire</option>
        </select>
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
