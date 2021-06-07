import React from 'react'
import styles from './Access.module.css'
import { HiLocationMarker } from 'react-icons/hi'
import { MdTrain } from 'react-icons/md'

function Access() {
    return(
        <div className={styles.accessArea}>
            <h1 className={styles.accessTitle}>Access</h1>

            <div className={styles.flexContainer}>
                <div className={styles.locationArea}>
                    <h3>Location</h3>
                    
                    <div className={styles.mapContainer}>
                        <iframe className={styles.map}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0008018847548!2d135.43078111523104!3d34.654682680446186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e88afbf2901b%3A0x69f4b578889abcd6!2s9%20Borden%20Coffee!5e0!3m2!1sen!2sjp!4v1622963201144!5m2!1sen!2sjp" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
            
                    <p>3 Chome-7-15 Chikko, Minato Ward, Osaka, 552-0021</p>
                    <p>2 minute walk from Osakako Station (Chuo Line)</p>
                    <p>080-1234-5678</p>
                </div>

                <div className={styles.openingTimesArea}>
                    <h3>Opening Times</h3>

                    <div className={styles.openingTimesFlexContainer}>
                        <div className={styles.weekdays}>
                            <p>Monday</p>
                            <p>Tuesday</p>
                            <p>Wednesday</p>
                            <p>Thursday</p>
                            <p>Friday</p>
                            <p>Saturday</p>
                            <p>Sunday</p>
                        </div>

                        <div className={styles.times}>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                            <p>7:30 - 18:30</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Access