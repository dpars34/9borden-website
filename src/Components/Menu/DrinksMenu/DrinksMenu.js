import React from 'react'
import styles from './DrinksMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'
import { drinksMenuLeftEnglish, drinksMenuRightEnglish, drinksMenuLeftJapanese, drinksMenuRightJapanese } from '../../../Data/menuData'
import image1 from './drinks_menu_images/drinks_img1.jpg'
import image2 from './drinks_menu_images/drinks_img2.jpg'
import image3 from './drinks_menu_images/drinks_img3.jpg'
import { titles } from '../../../Data/mainTitles'


function DrinksMenu({isEnglish}) {
    return (
        <div className={styles.drinksMenuArea}>
            <h2 className={styles.drinksMenuTitle}>{titles.drinks}</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    {isEnglish ? drinksMenuLeftEnglish.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    }) 
                    
                    : drinksMenuLeftJapanese.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })}
                </div>

                <div className={styles.menuRight}>
                    {isEnglish ? drinksMenuRightEnglish.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })
                
                    : drinksMenuRightJapanese.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })}
                </div>
            </div>

            <div className={styles.imagesArea}>
                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image1} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Ocean Breeze" : "オーシャンブリーズ"}<br />{isEnglish ? "500 yen" : "500円"}</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image2} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Hot Chocolate" : "ホットチョコレート"}<br />{isEnglish ? "600 yen" : "600円"}</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image3} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Hot Latte (Maple Cinnamon)" : "ホットラテ(メープルシナモン)"}<br />{isEnglish ? "600 yen" : "600円"}</p>
                </div>
            </div>
        </div>
    )
}

export default DrinksMenu
