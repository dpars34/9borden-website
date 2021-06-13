import React from 'react'
import styles from './AboutUs.module.css'
import logo from './9borden_logo_white.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'


function AboutUs({ menuOpen, openMenu, closeMenu }) {
    return(
        <div className={styles.aboutUsSection}>
            
            <div className={styles.mobileNavbar}>
                <p onClick={openMenu} className={styles.hamburgerButton}><GiHamburgerMenu /></p>
                <img className={styles.logoMobile} src={logo} alt=""/>
                <p className={styles.dummy}></p>
            </div>

            <div className={menuOpen ? styles.navbarOpen : styles.navbar}> {/* Navbar split into two sides, left and right */}
                <div className={styles.leftSide}>
                    <p onClick={closeMenu}className={styles.closeButton}><AiOutlineClose /></p>
                    <a href="/"><img className={styles.logo}src={logo} alt=""/></a>
                    <a onClick={closeMenu} className={styles.navLink} href="#instagram-feed">Instagram Feed</a>
                    <a onClick={closeMenu} className={styles.navLink} href="#menu">Menu</a>
                    <a onClick={closeMenu} className={styles.navLink} href="#access">Access</a>
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.socialMediaLinks}>
                        <a onClick={closeMenu} className={`${styles.navLink} ${styles.facebookIcon}`} target="_blank" href="https://www.facebook.com/9bordencoffee/"><FaFacebook /></a>
                        <a onClick={closeMenu} className={`${styles.navLink} ${styles.instagramIcon}`} target="_blank" href="https://www.instagram.com/9bordencoffee/?hl=en"><FaInstagram /></a>
                    </div>

                    <div className={styles.langButtons}>
                        <p onClick={closeMenu} className={`${styles.navLink} ${styles.englishButton}`}>English</p>
                        <p className={styles.navLink}>|</p>
                        <p onClick={closeMenu} className={`${styles.navLink} ${styles.japaneseButton}`}>日本語</p>
                    </div>
                </div>
            </div>

            <div className={styles.flexContainer}>
                <div className={styles.textArea}>
                    <h1 className={styles.aboutUsTitle}>About Us</h1>
                    <p className={styles.aboutUsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis enim ut erat auctor, in egestas nisl euismod. Phasellus vitae aliquam mi. Aliquam euismod urna massa, quis tempor justo egestas et. Aliquam quis tellus ac ex vulputate condimentum eget quis justo. Nulla semper justo nec ante consequat varius.</p>
                </div>
            </div> 
        </div>
    )
}

export default AboutUs