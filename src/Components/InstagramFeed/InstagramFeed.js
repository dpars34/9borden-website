import React from 'react'
import styles from './InstagramFeed.module.css'
import { titles } from '../../Text/mainTitles'

function InstagramFeed() {
    return(
        <div className={`instagram-feed ${styles.instagramArea}` }>
            <h1 className={styles.instagramFeedTitle}>{titles.instagramFeed}</h1>
            <div id="curator-feed-default-feed-layout" className={styles.instagramFeed}><a href="https://curator.io" rel="noopener noreferrer" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
        </div>
    )
}

export default InstagramFeed