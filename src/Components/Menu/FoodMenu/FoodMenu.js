import React from 'react'
import styles from './FoodMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'

function FoodMenu() {
    return (
        <div className={styles.foodMenuArea}>
            <h2>Food Menu</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    <SingleItem />
                </div>

                <div className={styles.menuLeft}>
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default FoodMenu
