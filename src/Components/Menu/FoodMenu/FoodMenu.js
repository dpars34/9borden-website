import React from 'react'
import styles from './FoodMenu.module.css'
import SingleItem from '../SingleItem/SingleItem'
import { foodMenuLeftEnglish, foodMenuRightEnglish } from '../menuData'
import image1 from './food_menu_images/drinks_img1.jpg'
import image2 from './food_menu_images/drinks_img2.jpg'
import image3 from './food_menu_images/drinks_img3.jpg'

function FoodMenu() {
    return (
        <div className={styles.foodMenuArea}>
            <h2　className={styles.foodMenuTitle}>Food</h2>
            <div className={styles.flexContainer}>
                <div className={styles.menuLeft}>
                    {foodMenuLeftEnglish.map((item) => {
                        return (
                            <SingleItem itemData={item} key={item.name}/>
                        )
                    })}
                </div>

                <div className={styles.menuRight}>
                    {foodMenuRightEnglish.map((item) => {
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

export default FoodMenu
