import React from 'react'
import styles from './FoodMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'
import { foodMenuLeftEnglish, foodMenuRightEnglish, foodMenuLeftJapanese, foodMenuRightJapanese } from '../../../Text/menuData'
import image1 from './food_menu_images/food_img1.jpg'
import image2 from './food_menu_images/food_img2.jpg'
import image3 from './food_menu_images/food_img3.jpg'
import { titles } from '../../../Text/titles'

function FoodMenu({isEnglish}) {
    return (
        <div className={styles.foodMenuArea}>
            <h2　className={styles.foodMenuTitle}>{titles.food}</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    {isEnglish ? foodMenuLeftEnglish.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })
                
                    :foodMenuLeftJapanese.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })}
                </div>

                <div className={styles.menuRight}>
                    {isEnglish ? foodMenuRightEnglish.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })
                
                    : foodMenuRightJapanese.map((item) => {
                        return (
                            <SingleItem isEnglish={isEnglish} itemData={item} key={item.name}/>
                        )
                    })}
                </div>
            </div>

            <div className={styles.imagesArea}>
                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image1} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Burrito (Carnitas -Limited-)" : "ブリトー（期間限定のポーク）"}<br />{isEnglish ? "1200 yen" : "1200円"}</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image2} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Açaí Bowl" : "アサイーボウル"}<br />{isEnglish ? "750 yen" : "750円"}</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image3} alt="Food menu"/>
                    <p className={styles.caption}>{isEnglish ? "Affogato" : "アフォガード"}<br />{isEnglish ? "650 yen" : "650円"}</p>
                </div>
            </div>

        </div>
    )
}

export default FoodMenu
