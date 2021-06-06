import React from 'react'
import styles from './Header.module.css'
import logo from './9borden_logo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header({ menuOpen, onHomeScreen, firstLoadNavbar, openMenu, closeMenu }) {

    return(
        <header className={firstLoadNavbar ? styles.headerPreload : onHomeScreen ? styles.headerNone : styles.header}>
            <div className={styles.mobileNavbar}>
                <p onClick={openMenu} className={styles.hamburgerButton}><GiHamburgerMenu /></p>
                <img className={styles.logoMobile} src={logo} alt=""/>
                <p className={styles.dummy}></p>
            </div>

            <div className={menuOpen ? styles.navbarOpen : styles.navbar}> {/* Navbar split into two sides, left and right */}
                <div className={styles.leftSide}>
                    <p onClick={closeMenu}className={styles.closeButton}><AiOutlineClose /></p>
                    <img className={styles.logo}src={logo} alt=""/>
                    <a className={styles.navLink} href="#instagram_feed">Instagram Feed</a>
                    <a className={styles.navLink} href="#menu">Menu</a>
                    <a className={styles.navLink} href="#access">Access</a>
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.socialMediaLinks}>
                        <a className={`${styles.navLink} ${styles.facebookIcon}`} href="#facebook"><FaFacebook /></a>
                        <a className={`${styles.navLink} ${styles.instagramIcon}`} href="#instagram"><FaInstagram /></a>
                    </div>

                    <div className={styles.langButtons}>
                        <p className={`${styles.navLink} ${styles.englishButton}`}>English</p>
                        <p className={styles.navLink}>|</p>
                        <p className={`${styles.navLink} ${styles.japaneseButton}`}>日本語</p>
                    </div>

                </div>
            </div>
        </header>
        
    )
}

export default Header