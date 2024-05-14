import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from '../ui/dashboard/dashboard.module.css'
import Transactions from '../ui/dashboard/transactions/transactions'

const Dashboard= () => {
    return (
    <div>
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
        </div>
        <Transactions/>

    </div>
    )
}

export default Dashboard
