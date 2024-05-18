import React from 'react'
import styles from '@/app/ui/dashboard/voyage/AddVoyage/addVoyage.module.css'

const AddVoyage = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="" placeholder=' Name'
            name='title' required />
            <input type="" placeholder='Ville'
name='title' required />
            <input type="" placeholder='Number of Person'
name='title' required />
            <select name='cat' id='cat'>
            <option value= "general">Transport</option>
                <option value= "Admin">Bus</option>
                <option value= "User">None</option>
            </select>
            <textarea name="desc" id="desc" rows="16"
            placeholder='Description' ></textarea>
        <button type="submit">Save Trip</button>
        </form>
        </div>
    )
}

export default AddUsers