import React from 'react'
import styles from './Access.module.css'
import { HiLocationMarker } from 'react-icons/hi'
import { MdTrain } from 'react-icons/md'
import { RiPhoneFill } from 'react-icons/ri'

import { titles } from '../../Text/mainTitles'
import { accessText } from '../../Text/accessText'


function Access({isEnglish}) {
    return(
        <div className={styles.accessArea}>
            <div className={styles.navDiv} id="access"></div>
            <h1 className={styles.accessTitle}>{titles.access}</h1>

            <div className={isEnglish ? styles.flexContainerEn : styles.flexContainerJp}>
                <div className={styles.locationArea}>
                    <h3>{isEnglish ? "Location" : "所在地"}</h3>
                    
                    <div className={styles.mapContainer}>
                        <iframe title="9 Borden Coffee Location" className={styles.map}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0008018847548!2d135.43078111523104!3d34.654682680446186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e88afbf2901b%3A0x69f4b578889abcd6!2s9%20Borden%20Coffee!5e0!3m2!1sen!2sjp!4v1622963201144!5m2!1sen!2sjp" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                        
                    <div className={styles.locationDetails}>
                        <HiLocationMarker className={styles.icon}/>
                        <p>{isEnglish ? accessText.englishLocation : accessText.japaneseLocation}</p>
                    </div>
                        
                    <div className={styles.locationDetails}>
                        <MdTrain className={styles.icon}/>
                        <p>{isEnglish ? accessText.englishTransport : accessText.japaneseTransport}</p>
                    </div>
                        
                    <div className={styles.locationDetails}>
                        <RiPhoneFill className={styles.icon}/>
                        <p>{isEnglish ? accessText.englishPhone : accessText.japanesePhone}</p>
                    </div>
                    
                </div>

                <div className={styles.openingTimesArea}>
                    <h3>{isEnglish ? "Opening Times" : "営業時間"}</h3>

                    <div className={styles.openingTimesFlexContainer}>
                        <div className={styles.weekdays}>
                            <p>{isEnglish ? "Monday" : "月曜日"}</p>
                            <p>{isEnglish ? "Tuesday" : "火曜日"}</p>
                            <p>{isEnglish ? "Wednesday" : "水曜日"}</p>
                            <p>{isEnglish ? "Thursday" : "木曜日"}</p>
                            <p>{isEnglish ? "Friday" : "金曜日"}</p>
                            <p>{isEnglish ? "Saturday" : "土曜日"}</p>
                            <p>{isEnglish ? "Sunday" : "日曜日"}</p>
                        </div>

                        <div className={styles.times}>
                            <p>{isEnglish ? accessText.englishMonday : accessText.japaneseMonday}</p>
                            <p>{isEnglish ? accessText.englishTuesday : accessText.japaneseTuesday}</p>
                            <p>{isEnglish ? accessText.englishWednesday : accessText.japaneseWednesday}</p>
                            <p>{isEnglish ? accessText.englishThursday : accessText.japaneseThursday}</p>
                            <p>{isEnglish ? accessText.englishFriday : accessText.japaneseFriday}</p>
                            <p>{isEnglish ? accessText.englishSaturday : accessText.japaneseSaturday}</p>
                            <p>{isEnglish ? accessText.englishSunday: accessText.japaneseSunday}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Access