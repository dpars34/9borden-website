import React, { useState } from 'react'
import styles from './Carousel.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


function Carousel() {

    const [ currentImage, setCurrentImage ] = useState(0)
    const imageStyles = [styles.image1, styles.image2, styles.image3, styles.image4]

    const nextImage = () => {
        if (currentImage === (imageStyles.length - 1)) {
            setCurrentImage(0)
        }
        else {
            setCurrentImage(currentImage + 1)
        }

        console.log(currentImage)
    }    

    return(
        <div>
            <div className={styles.carouselContainer} >
                <div className={imageStyles[currentImage]}>
                    <AiOutlineLeft className={styles.arrowLeft} />
                    <AiOutlineRight className={styles.arrowRight} onClick={nextImage}/>
                </div>
            </div>
            
            
        </div>
    )   
}

export default Carousel