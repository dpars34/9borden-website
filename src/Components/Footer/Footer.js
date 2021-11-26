import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
    return(
        <footer className={styles.footerArea}>
            <p className={styles.copyright}>© 9Borden Coffee</p>
            <div className={styles.socialMediaButtons}>
                <a className={styles.facebookIcon} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/9bordencoffee/"><FaFacebook /></a>
                <a className={styles.instagramIcon} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/9bordencoffee/?hl=en"><FaInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer