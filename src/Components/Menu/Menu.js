import React from 'react'
import styles from './Menu.module.css'
import FoodMenu from './FoodMenu/FoodMenu'

function Menu() {
    return(
        <div className={styles.menuArea}>
            <FoodMenu />
        </div>
    )
}

export default Menu