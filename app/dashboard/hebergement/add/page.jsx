"use client";
import React from "react";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const AddHebergement = () => {
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

    fetch("http://localhost:8080/api/hebergements", {
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
        <input type="text" placeholder="nom hebergement" name="nom" required />
        <input
          type="text"
          placeholder="ville hebergement"
          name="ville"
          required
        />
        <input type="text" placeholder="website" name="website" required />

        <button type="submit">Save User</button>
      </form>
    </div>
  );
};

export default AddHebergement;
