import React from 'react'
import styles from './DrinksMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'
import { drinksMenuLeftEnglish, drinksMenuRightEnglish } from './drinksMenuData'

function DrinksMenu() {
    return (
        <div className={styles.drinksMenuArea}>
            <h2>Drinks Menu</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    {drinksMenuLeftEnglish.map((item) => {
                        return (
                            <SingleItem itemData={item}/>
                        )
                    })}
                </div>

                <div className={styles.menuRight}>
                    {drinksMenuRightEnglish.map((item) => {
                        return (
                            <SingleItem itemData={item}/>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default DrinksMenu
