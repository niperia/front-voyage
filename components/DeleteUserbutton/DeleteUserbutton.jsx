import { Delete } from "lucide-react";
import React from "react";
import { useEffect } from "react";
export default function page({ userid }) {
  function deleteuser() {
    const userToken = localStorage.getItem("token");
    fetch("http://localhost:8080/api/users/" + userid, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });
  }
  return <button onClick={deleteuser}>Delete</button>;
}
