import React from 'react'
import styles from './Menu.module.css'
import DrinksMenu from './DrinksMenu/DrinksMenu'
import FoodMenu from './FoodMenu/FoodMenu'

function Menu() {
    return(
        <div className={styles.menuArea}>
            <DrinksMenu />
        </div>
    )
}

export default Menu