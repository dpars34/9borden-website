import React, { useState } from 'react'
import styles from './Carousel.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


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
        </div>
    )   
}

export default Carousel