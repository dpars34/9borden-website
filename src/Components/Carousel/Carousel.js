import React, { useState } from 'react'
import styles from './Carousel.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import image1 from './carousel_images/IMG_7619.jpg'
import image2 from './carousel_images/IMG_7629.jpg'
import image3 from './carousel_images/IMG_8435.jpg'
import image4 from './carousel_images/IMG_7556.jpg'


function Carousel() {

    const [ currentImage, setCurrentImage ] = useState(1)
    const imageStyles = [styles.null, styles.image1, styles.image2, styles.image3, styles.image4]

    const nextImage = () => {
        if (currentImage === (imageStyles.length - 1)) {
            setCurrentImage(0)
            setTimeout(function() {
                setCurrentImage(1)
            }, 10)
        }
        else {
            setCurrentImage(0)
            setTimeout(function() {
                setCurrentImage(currentImage + 1)
            }, 10)
        }
    }    

    const prevImage = () => {
        if (currentImage === 1) {
            setCurrentImage(0)
            setTimeout(function() {
                setCurrentImage(imageStyles.length - 1)
            }, 1)
        }
        else {
            setCurrentImage(0)
            setTimeout(function() {
                setCurrentImage(currentImage - 1)
            }, 1)
        }
    }

    return(
        <div>
            <div className={styles.carouselContainer} >
                <div className={imageStyles[currentImage]}>
                    
                </div>
                <AiOutlineLeft className={styles.arrowLeft} onClick={prevImage}/>
                <AiOutlineRight className={styles.arrowRight} onClick={nextImage}/>
            </div>
            <img className={styles.imageLoad} src={image1} alt=""/>
            <img className={styles.imageLoad} src={image2} alt=""/>
            <img className={styles.imageLoad} src={image3} alt=""/>
            <img className={styles.imageLoad} src={image4} alt=""/>
        </div>
    )   
}

export default Carousel