"use client";
import React from "react";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const AddReservation = () => {
  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const usertoken = localStorage.getItem("token");
    fetch("http://localhost:8080/api/reservation", {
      method: "post",
      body: formData,
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "success") {
          alert("success");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.container}>
      <form method="post" className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Fist Name" name="firstname" required />
        <input type="text" placeholder="Last Name" name="lastname" required />
        <select name="Role" id="cat">
          <option value="general">Choose a Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <div className="Image">
          <input type="file" placeholder="Image" className="pa" name="image" />
        </div>
        <button type="submit">Save User</button>
      </form>
    </div>
  );
};

export default AddReservation;
