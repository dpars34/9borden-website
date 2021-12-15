import React from 'react'
import styles from './NewsItem.module.css'

function NewsItem( {itemData} ) {
    return(
        <div className={styles.newsItemArea}>
            <h2 className={styles.title}>{itemData.title}</h2>
            <p className={styles.info}>{itemData.info}</p>
            <a className={styles.link} href={itemData.link} target="_blank" rel="noopener noreferrer">{itemData.linkText}</a>
            <p className={styles.date}>{itemData.date}</p>
        </div>
    )
}

export default NewsItem