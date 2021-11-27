import React from 'react'
import styles from './AboutUs.module.css'
import logo from './9borden_logo_white.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { titles } from '../../Text/mainTitles'
import { aboutUsText } from '../../Text/aboutUsText'


function AboutUs({ menuOpen, openMenu, closeMenu, toEnglish, toJapanese, isEnglish}) {
    return(
        <div className={styles.aboutUsSection}>
            
            <div className={styles.mobileNavbar}>
                <p onClick={openMenu} className={styles.hamburgerButton}><GiHamburgerMenu /></p>
                <a href="/"><img className={styles.logoMobile} src={logo} alt=""/></a>
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

            <div className={styles.flexContainer}>
                <div className={styles.textArea}>
                    <h1 className={styles.aboutUsTitle}>{titles.aboutUs}</h1>
                    <p className={isEnglish ? styles.aboutUsTextEn : styles.aboutUsTextJp}>{isEnglish ? aboutUsText.englishText1 : aboutUsText.japaneseText1 }</p>
                    <br />
                    <p className={isEnglish ? styles.aboutUsTextEn : styles.aboutUsTextJp}> {isEnglish ? aboutUsText.englishText2 : aboutUsText.japaneseText2}</p>
                    <br />
                    <p onClick ={isEnglish ? toJapanese : toEnglish} className={`${isEnglish ? styles.aboutUsTextJp : styles.aboutUsTextEn} ${styles.clickable}`}>{isEnglish ? "日本語で見る" : "See English version"}</p>
                </div>
            </div> 
        </div>
    )
}

export default AboutUs