import React from 'react'
import styles from './InstagramFeed.module.css'
import { MdWifi } from 'react-icons/md'
import { BsPlug } from 'react-icons/bs'

function InstagramFeed() {
    return(
        <div className={`instagram-feed ${styles.instagramArea}` }>
            <div className={styles.navDiv} id="instagram-feed"><MdWifi className={styles.icon}/><BsPlug className={styles.icon}/></div>
            <h1 className={styles.instagramFeedTitle}>Instagram Feed</h1>
            <div id="curator-feed-default-feed-layout" className={styles.instagramFeed}><a href="https://curator.io" rel="noreferrer" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
        </div>
    )
}

export default InstagramFeed