import React from 'react'
import styles from './SingleItem.module.css'

function SingleItem({ itemData, isEnglish }) {

    const { name, price, extraInfo1, extraInfo2 } = itemData

    return (
        <div className={styles.singleItem}>
            <div className={styles.infoArea}>
                <p className={styles.itemTitle}>{name}</p>
                {extraInfo1 ? <p className={isEnglish ? styles.extraInfo1En : styles.extraInfo1Jp}>{extraInfo1}</p> : null}
                {extraInfo2 ? <p className={isEnglish ? styles.extraInfo2En : styles.extraInfo2Jp}>{extraInfo2}</p> : null}
            </div>
                        
            <div className={styles.priceArea}>
                {price ? <p className={styles.itemPrice}>{price}</p> : null}
            </div>
        </div>
    )
}

export default SingleItem
