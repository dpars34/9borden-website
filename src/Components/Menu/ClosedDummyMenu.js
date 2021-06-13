import React from 'react'
import styles from './ClosedDummyMenu.module.css'

const ClosedDummyMenu = ( {firstLoad} ) => {
    return (
        <div className={firstLoad ? null : styles.dummyMenu}>
            
        </div>
    )
}

export default ClosedDummyMenu
