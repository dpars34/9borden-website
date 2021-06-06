import React from 'react'
import styles from './MenuTitle.module.css'

function MenuTitle() {
    return(
        <div className={styles.menuTitleArea}>
             <div className={styles.textArea}>
                <h1 className={styles.menuTitle}>Menu</h1>
                <p className={styles.menuTitleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis enim ut erat auctor, in egestas nisl euismod. Phasellus vitae aliquam mi. Aliquam euismod urna massa, quis tempor justo egestas et. Aliquam quis tellus ac ex vulputate condimentum eget quis justo. Nulla semper justo nec ante consequat varius.</p>
            </div>
        </div>
    )
}

export default MenuTitle