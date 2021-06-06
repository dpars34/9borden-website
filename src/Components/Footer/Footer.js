import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
    return(
        <footer className={styles.footerArea}>
            <p>2021 © 9Borden Coffee</p>
            <div className={styles.socialMediaButtons}>
                <a className={styles.facebookIcon} href="#facebook"><FaFacebook /></a>
                <a className={styles.instagramIcon} href="#instagram"><FaInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer