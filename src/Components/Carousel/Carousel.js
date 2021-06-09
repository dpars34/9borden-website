import React, { useState } from 'react'
import styles from './Carousel.module.css'
import carouselData from './carouselData'


function Carousel() {

    const [ currentImage, setCurrentImage ] = useState(0)

    return(
        <div className={styles.carouselArea}>
            {carouselData.map((image, index) => {
                if (index === currentImage) {
                    return (
                        <img className={styles.image} src={image.imageSrc} alt="shop"/>
                    )
                }
            })}
        </div>
    )   
}

export default Carousel