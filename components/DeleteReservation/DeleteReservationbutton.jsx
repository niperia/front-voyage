import { Delete } from "lucide-react";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import { useEffect } from "react";
export default function page({ reservationid }) {
  function deleteuser() {
    const userToken = localStorage.getItem("token");
    fetch("http://localhost:8080/api/reservation/" + reservationid, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });
  }
  return <button className={`${styles.button} ${styles.delete}`} onClick={deleteuser}>Delete</button>;
}
