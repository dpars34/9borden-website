import React from 'react'
import styles from './FoodMenu.module.css'

function FoodMenu() {
    return (
        <div className={styles.foodMenuArea}>
            <h2>Food Menu</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    <div className={styles.singleItem}>
                        <div className={styles.infoArea}>
                            <p className={styles.itemTitle}>Pour Over</p>
                            <p className={styles.extraInfo1}>Hot/Iced</p>
                            <p className={styles.extraInfo2}>Choose from a selection of beans</p>
                        </div>
                        
                        <div className={styles.priceArea}>
                            <p className={styles.itemPrice}>450</p>
                        </div>
                    </div>

                    <div className={styles.singleItem}>
                        <div className={styles.infoArea}>
                            <p className={styles.itemTitle}>Pour Over</p>
                            <p className={styles.extraInfo1}>Hot/Iced</p>
                            <p className={styles.extraInfo2}>Choose from a selection of beans</p>
                        </div>
                        
                        <div className={styles.priceArea}>
                            <p className={styles.itemPrice}>450</p>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.menuLeft}>
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default FoodMenu
