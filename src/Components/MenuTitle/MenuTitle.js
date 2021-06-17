import React from 'react'
import styles from './MenuTitle.module.css'

function MenuTitle({ isEnglish }) {
    return(
        <div className={styles.menuTitleArea}>
            <div className={styles.navDiv} id="menu"></div>
            <div className={styles.flexContainer}>
                <div className={styles.textArea}>
                    <h1 className={styles.menuTitle}>Menu</h1>
                    <p className={styles.menuTitleText}>{isEnglish ? "We serve speciality coffee roasted by TAOCA COFFEE and Mel Coffee Roasters. We also have 3 different kinds of toasted sandwiches and different flavor sodas to quench that thirst in the summer.": "コーヒーはTAOCA COFFEEとMel Coffee Roastersのスペシャルティコーヒーを使いお淹れしています。応援している大好きなロースターさんたちです。他にはカラフルなソーダや、食べ物は3種類のホットサンドイッチなどもあります。"}</p>
                    <br />
                    <p className={styles.menuTitleText}>{isEnglish ? "For the time being we are also serving our take of Hawaiian Acai Bowl (Vegan) and Mexican Chicken Burrito (Vegan and Vegetarian option available).": "アサイーボウルとブリトーはヴィーガンの方も召し上がっていただけます。"}</p>
                </div>
            </div>
            
        </div>
    )
}

export default MenuTitle