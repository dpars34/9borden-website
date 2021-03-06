import React, { useState } from 'react'
import styles from './Menu.module.css'
import DrinksMenu from './DrinksMenu/DrinksMenu'
import FoodMenu from './FoodMenu/FoodMenu'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import ClosedDummyMenu from './ClosedDummyMenu'

function Menu({isEnglish}) {

    const [ foodMenuOpen, setFoodMenuOpen ] = useState(false)
    const [ firstLoad, setFirstLoad ] = useState(true)

    const openMenu = () => {
        setFoodMenuOpen(!foodMenuOpen)
        setFirstLoad(false)
    }

    return(
        <div className={styles.menuArea}>
            <DrinksMenu isEnglish={isEnglish}/>
            {foodMenuOpen ? <FoodMenu isEnglish={isEnglish}/> : <ClosedDummyMenu firstLoad={firstLoad}/>}
            <div className={styles.flexContainer}>
                <div className={styles.buttonContainer} onClick={openMenu}>
                    <p className={styles.openMenuText}>{foodMenuOpen ? isEnglish ? "Close food menu" : "閉じる" : isEnglish ? "Open food menu" : "フードメニューを見る"}</p>
                    {foodMenuOpen ? <AiOutlineUp className={styles.arrow}/> : <AiOutlineDown className={styles.arrow}/>}
                </div>
            </div>
        </div>
    )
}

export default Menu