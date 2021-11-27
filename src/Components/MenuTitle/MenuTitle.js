import React from 'react'
import styles from './MenuTitle.module.css'

import { titles } from '../../Text/mainTitles'
import { menuText } from '../../Text/menuText'

function MenuTitle({ isEnglish }) {
    return(
        <div className={styles.menuTitleArea}>
            <div className={styles.navDiv} id="menu"></div>
            <div className={styles.flexContainer}>
                <div className={styles.textArea}>
                    <h1 className={styles.menuTitle}>{titles.menu}</h1>
                    <p className={isEnglish ? styles.menuTitleTextEn : styles.menuTitleTextJp}>{isEnglish ? menuText.englishText1 : menuText.japanesetext1}</p>
                    <br />
                    <p className={isEnglish ? styles.menuTitleTextEn : styles.menuTitleTextJp}>{isEnglish ? menuText.englishText2 : menuText.japaneseText2}</p>
                </div>
            </div>
            
        </div>
    )
}

export default MenuTitle