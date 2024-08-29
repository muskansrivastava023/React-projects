import React from 'react'
import { getPhotoUrl } from '../../utils'
import experience from '../../data/experience.json'
import styles from './Experience.module.css'

export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <img src={getPhotoUrl('experience/aboutImage.png')} alt="Happy image" className={styles.aboutImage} />
                    <ul className={styles.experience}>{
                        experience.map((expItem, id) => {
                            return <li key={id} className={styles.expItem}>
                                <div className={styles.expItemContent}>
                                    <h3>{`${expItem.role}, ${expItem.organisation}`}</h3>
                                    <p>{`${expItem.startDate} - ${expItem.endDate}`}</p>
                                    <ul>{expItem.experiences.map((experience, id) => {
                                       return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                    </ul>
            </div>
        </section>
    )
}
