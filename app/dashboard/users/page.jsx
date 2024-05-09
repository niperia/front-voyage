import styles from '@/app/ui/dashboard/users/users.module.css'
import React from 'react'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'

const UsersPage = () => {
    return (
    <div className={styles.container}>
    <div className={styles.top}>
        <Search placeholder="Search for a user... "/>
        <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
    </div>
    <table className={styles.table}>
        <thead>
        <tr>
            <td>Name</td>
            <td>Created at</td>
            <td>Email</td>
            <td>Role</td>
            <td>Action</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image  src="/avatar.png" alt="" 
                        width={40} height={40}
                        className={styles.userImage} />
                        User1
                    </div>
                </td>
                <td>
                    <Link href="/">
                        <button 
                        className={`${styles.button} ${styles.modify}`}>Modify</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    )
}

export default UsersPage