import React from 'react'
import styles from './Header.module.css'
import logo from './9borden_logo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header({ menuOpen, onHomeScreen, firstLoadNavbar, openMenu, closeMenu, toEnglish, toJapanese, isEnglish}) {

    return(
        <header className={firstLoadNavbar ? styles.headerPreload : onHomeScreen ? styles.headerNone : styles.header}>
            <div className={styles.mobileNavbar}>
                <p onClick={openMenu} className={styles.hamburgerButton}><GiHamburgerMenu /></p>
                <a href="/"><img className={styles.logoMobile} src={logo} alt=""/></a>
                <p className={styles.dummy}></p>
            </div>

            <div className={menuOpen ? styles.navbarOpen : styles.navbar}> {/* Navbar split into two sides, left and right */}
                <div className={styles.leftSide}>
                    <p onClick={closeMenu} className={styles.closeButton}><AiOutlineClose /></p>
                    <a href="/"><img className={styles.logo}src={logo} alt=""/></a>
                    <a onClick={closeMenu} className={styles.navLink} href="#instagram-feed">Instagram Feed</a>
                    <a onClick={closeMenu} className={styles.navLink} href="#menu">Menu</a>
                    <a onClick={closeMenu} className={styles.navLink} href="#access">Access</a>
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.socialMediaLinks}>
                        <a onClick={closeMenu} className={`${styles.navLink} ${styles.facebookIcon}`} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/9bordencoffee/"><FaFacebook /></a>
                        <a onClick={closeMenu} className={`${styles.navLink} ${styles.instagramIcon}`} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/9bordencoffee/?hl=en"><FaInstagram /></a>
                    </div>

                    <div className={styles.langButtons}>
                        <p onClick={() => { closeMenu(); toEnglish();}} className={isEnglish ? `${styles.navLink} ${styles.bolder}` : styles.navLink}>English</p>
                        <p className={styles.navLink}>|</p>
                        <p onClick={() => { closeMenu(); toJapanese();}} className={isEnglish ? styles.navLink : `${styles.navLink} ${styles.bolder}`}>日本語</p>
                    </div>

                </div>
            </div>
        </header>
        
    )
}

export default Header