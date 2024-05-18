import React from 'react'
import styles from "./sidebar.module.css"
import Image from 'next/image'; 
import MenuLink from './menuLink/menuLink';

import {
    MdDashboard,
    MdAirplanemodeActive as ImAirplane,
    MdLocalHotel,
    MdLocalActivity,
    MdAnalytics,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,

} from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { FaUser } from "react-icons/fa";

const menuItems = [
    {
        title: "Pages",
        list:[
        {
            title:"Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
        },
        {
            title:"Users",
            path: "/dashboard/users",
            icon: <FaUser/>,
        },
        {
            title:"Voyages",
            path: "/dashboard/voyage",
            icon: <ImAirplane/>,
        },
        {
            title:"Reservation",
            path: "/dashboard/reservation",
            icon: <GrAdd/>,
        },
        {
            title:"Hebergement",
            path: "/dashboard/hebergement",
            icon: <MdLocalHotel/>,
        },
        {
            title:"Activities",
            path: "/dashboard/activities",
            icon: <MdLocalActivity/>,
        },
      ], 

    },

    {
        title: "User",
        list:[
        {
            title:"Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
        },
        {
            title:"Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter/>,
        },
        {
            title:"Repports",
            path: "/dashboard/repports",
            icon: <MdAnalytics/>,
        },
      ], 
    },

];
const Sidebar= () => {
    return (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image className ={styles.userImage}src="/avatar.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
            <span className={styles.username}>Admin1</span>
            <span className={styles.userTitle}>Administator</span>
        </div>
        </div>
        
        <ul className={styles.list}>
        {menuItems.map((cat)=>(
        <li key={cat.title}>
        <span  className={styles.cat}>{cat.title}</span>
        {cat.list.map((item)=>(
            <MenuLink item={item} key={item.title}/>
        ))}
            </li>
    ))}
        </ul>
        <button className={styles.logout}>
            <MdLogout/> 
            Logout
            </button>
    </div>
    );
};

export default Sidebar;
