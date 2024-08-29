import React from 'react'
import { getPhotoUrl } from '../../utils'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.introContent}>
            <h1 className={styles.title}>Hi, I am Muskan </h1>
            <p className={styles.description}>I'm a frontend and backend engineer</p>
            <a className={styles.contactMeBtn} href="mailto:muskansrivastava023@gmail.com">Contact Me!</a>
        </div>
        <img src={getPhotoUrl('illustration/homeImage.png')} alt="Home Image" className={styles.homeImg} />
        <div className={styles.blurTop}></div>
        <div className={styles.blurBottom}></div>
    </section>
  )
}
