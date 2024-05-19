"use client";

import { useState, useEffect } from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/pagination";
import DeleteReservationbutton from "@/components/DeleteReservation/DeleteReservationbutton";
const ReservationPage = () => {
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/reservation", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setReservation(data);
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
        <Link href="/dashboard/reservation/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Created At</td>
            <td>User ID</td>
            <td>Voyage ID</td>
          </tr>
        </thead>
        <tbody>
          {reservation.map((user) => (
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
                  {user.id}
                </div>
              </td>
              <td>{user.date}</td>
              <td>{user.user}</td>
              <td>{user.voyage}</td>

              <td>
                <DeleteReservationbutton
                  className={`${styles.button} ${styles.delete}`}
                  reservationid={user.id}
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
export default ReservationPage;
