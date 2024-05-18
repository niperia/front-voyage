"use client"

import styles from '@/app/ui/dashboard/voyage/voyage.module.css'
import React from 'react'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/pagination/pagination'

import { useState, useContext, useEffect } from "react";


const VoyagePage = () => {

    const [voyages, setVoyage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/Voyage', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
        return <div>Error loading Trips</div>;
    }


    return (
    <div className={styles.container}>
    <div className={styles.top}>
        <Search placeholder="Search for a trip... "/>
        <Link href="/dashboard/voyage/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
    </div>
    <table className={styles.table}>
        <thead>
        <tr>
        <td></td>
        <th>Description</th>
            <th>Name</th>
            <th>Price</th>
            
            <th>Persons number</th>
            <th>Transport</th>
            <th>Action</th>

        </tr>
        </thead>
        <tbody>
            {voyages.map (voyage => ( 
            <tr key= {voyage.id}>
                <td>
                    <div className={styles.voyage}>
                        <Image  src='/public/Marrakech.jpg' 
                        alt={voyage.name} 
                        width={40} height={40}
                        className={styles.voyageImage}
                        />
                        
                    </div>
                </td>
                 
                <td>{voyage.description}</td>
                <td>{voyage.name}</td> 
                <td>{voyage.prix}</td>
                <td>{voyage.nbr_per}</td>
                <td>{voyage.transport}</td>
                
                <td>
                    <Link href="/">
                        <button 
                        className={`${styles.button} ${styles.modify}`}>Modify</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    <Pagination/>
    </div>
    )
}

export default VoyagePage

