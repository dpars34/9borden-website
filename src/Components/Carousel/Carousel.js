import React, { useState } from 'react'
import styles from './Carousel.module.css'
import carouselData from './carouselData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


function Carousel() {

    const [ currentImage, setCurrentImage ] = useState(0)

    return(
        <div className={styles.carouselArea}>
            <AiOutlineLeft className={styles.arrowLeft} />
            <AiOutlineRight className={styles.arrowRight}/>

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