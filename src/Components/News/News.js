import React from 'react'
import styles from './News.module.css'
import { MdWifi } from 'react-icons/md'
import { BsPlug } from 'react-icons/bs'
import NewsItem from './NewsItem/NewsItem'

import { titles } from '../../Text/mainTitles'
import { englishText, japaneseText } from '../../Text/newsText'

function News ( {isEnglish} ) {
    return(
        <div className={styles.newsArea}>
            <div className={styles.navDiv} id="instagram-feed"><MdWifi className={styles.icon}/><BsPlug className={styles.icon}/></div>
            <h1 className={styles.newsTitle}>{titles.news}</h1>
            {isEnglish ? englishText.map((item) => {
                return (<NewsItem itemData={item} key={item.title}/>)
            })
        
            : japaneseText.map((item) => {
                return (<NewsItem itemData={item} key={item.title}/>)
            })}
            <hr className={styles.hr}/>
        </div>
    )
}

export default News