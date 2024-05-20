"use client";
import { useState, useEffect } from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/pagination";
import DeleteHebergement from "@/components/DeleteHebergement/DeleteHebergement";
const Hebergement = () => {
  const [hebergement, setHebergement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/hebergements", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setHebergement(data);
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
        <Link href="/dashboard/hebergement/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Ville</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          {hebergement.map((user) => (
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
                  {user.nom}
                </div>
              </td>
              <td>{user.ville}</td>
              <td>{user.website}</td>

              <td>
               

                <DeleteHebergement
                  className={`${styles.button} ${styles.delete}`}
                  heberid={user.id}
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
export default Hebergement;
