"use client";

import { useState, useEffect } from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/pagination";
import DeleteVoyagebutton from "@/components/DeleteVoyage/DeleteVoyagebutton";
const VoyagePage = () => {
  const [voyage, setVoyage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function formatDate(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/Voyage", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setVoyage(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user... " />
        <Link href="/dashboard/voyage/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Ville</td>
            <td>Description</td>
            <td>Transport</td>
            <td>Nbr_Personne</td>
            <td>Hebergement</td>
            <td>activity</td>
            <td>Prix</td>
            <td>date_debut</td>
            <td>date_fin</td>
          </tr>
        </thead>
        <tbody>
          {voyage.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  {/* <Image
                    src="/avatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  /> */}
                  {user.name}
                </div>
              </td>
              <td>{user.ville}</td>
              <td>{user.description}</td>
              <td>{user.transport}</td>
              <td>{user.nbr_per}</td>
              <td>{user.hebergement}</td>
              <td>{user.activity}</td>
              <td>{user.prix}</td>
              <td>{formatDate(user.date_fin)}</td>
              <td>{formatDate(user.date_debut)}</td>
              <td>
                

                <DeleteVoyagebutton
                  
                  voyageid={user.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default VoyagePage;
