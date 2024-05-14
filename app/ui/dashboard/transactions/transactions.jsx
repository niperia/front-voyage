import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'; 

const Transactions = () => {
    return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Use </h2>
        <table className={styles.table}>
        <thead>
        <tr>
            <td>Users</td>
            <td>Status</td>
            <td>Date</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <Image src="/avatar.png" 
                    alt="" width={40} height={40}
                    className={styles.userImage}/>
                    User1
                </td>
                <td>
                    <span className={`${styles.status}
                    ${styles.online}`}>online</span>
                </td>
                <td>14.02.2024</td>
            </tr>
            <tr>
    <td>
        <Image src="/avatar.png" 
        alt="" width={40} height={40}
        className={styles.userImage}/>
        User2
    </td>
    <td>
        <span className={`${styles.status}
        ${styles.offline}`}>offline</span>
    </td>
    <td>15.02.2024</td>
</tr>
<tr>
    <td>
        <Image src="/avatar.png" 
        alt="" width={40} height={40}
        className={styles.userImage}/>
        User3
    </td>
    <td>
        <span className={`${styles.status}
        ${styles.offline}`}>offline</span>
    </td>
    <td>17.02.2024</td>
</tr>
        </tbody>
        </table>
        </div>
    )
}

export default Transactions