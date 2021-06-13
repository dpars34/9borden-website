import React from 'react'
import styles from './SingleItem.module.css'

function SingleItem({ itemData }) {

    const { name, price, extraInfo1, extraInfo2 } = itemData

    return (
        <div className={styles.singleItem}>
            <div className={styles.infoArea}>
                <p className={styles.itemTitle}>{name}</p>
                {extraInfo1 ? <p className={styles.extraInfo1}>{extraInfo1}</p> : null}
                {extraInfo2 ? <p className={styles.extraInfo2}>{extraInfo2}</p> : null}
            </div>
                        
            <div className={styles.priceArea}>
                <p className={styles.itemPrice}>{price}</p>
            </div>
        </div>
    )
}

export default SingleItem
