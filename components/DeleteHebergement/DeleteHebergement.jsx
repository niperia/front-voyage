import { Delete } from "lucide-react";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import { useEffect } from "react";
export default function page({ heberid }) {
  function deleteuser() {
    const userToken = localStorage.getItem("token");
    fetch("http://localhost:8080/api/hebergements/" + heberid, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });
  }
  return <button className={`${styles.button} ${styles.delete}`} onClick={deleteuser}>Delete</button>;
}
