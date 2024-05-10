import React from 'react'
import styles from '@/app/ui/dashboard/users/addUsers/addUsers.module.css'

const AddUsers = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="" placeholder='Fist Name'
            name='title' required />
            <input type="" placeholder='Last Name'
name='title' required />
            <select name='cat' id='cat'>
            <option value= "general">Choose a Role</option>
                <option value= "Admin">Admin</option>
                <option value= "User">User</option>
            </select>
            <input type="" placeholder='Email'
name='title' required />
        <button type="submit">Save User</button>
        </form>
        </div>
    )
}

export default AddUsers