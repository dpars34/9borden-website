import React from 'react'
import styles from './DrinksMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'
import { drinksMenuLeftEnglish, drinksMenuRightEnglish } from '../menuData'
import image1 from './drinks_menu_images/drinks_img1.jpg'
import image2 from './drinks_menu_images/drinks_img2.jpg'
import image3 from './drinks_menu_images/drinks_img3.jpg'


function DrinksMenu() {
    return (
        <div className={styles.drinksMenuArea}>
            <h2　className={styles.drinksMenuTitle}>Drinks</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    {drinksMenuLeftEnglish.map((item) => {
                        return (
                            <SingleItem itemData={item} key={item.name}/>
                        )
                    })}
                </div>

                <div className={styles.menuRight}>
                    {drinksMenuRightEnglish.map((item) => {
                        return (
                            <SingleItem itemData={item} key={item.name}/>
                        )
                    })}
                </div>
            </div>

            <div className={styles.imagesArea}>
                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image1} alt="Food menu"/>
                    <p className={styles.caption}>Description</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image2} alt="Food menu"/>
                    <p className={styles.caption}>Description</p>
                </div>

                <div className={styles.singleImage}>
                    <img className={styles.menuImage}src={image3} alt="Food menu"/>
                    <p className={styles.caption}>Description</p>
                </div>
            </div>
        </div>
    )
}

export default DrinksMenu
