import React from 'react'
import { getPhotoUrl } from '../../utils'
import styles from './contact.module.css'

export const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2>Get in touch!</h2>
                <p>Feel Free to reach out</p>

            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getPhotoUrl('contact/emailIcon.png')} alt="Email icon" />
                    <a href="mailto:muskansrivastava023@gmail.com" target='_blank'>muskansrivastava023@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getPhotoUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/muskan-srivastava-27781921a" target='_blank'>linkedin.com/muskansrivastava</a>
                </li>
                <li className={styles.link}>
                    <img src={getPhotoUrl('contact/githubIcon.png')} alt="Github icon" />
                    <a href="https://www.github.com/muskansrivastava023" target='_blank'>github.com/muskansrivastava023</a>
                </li>
            </ul>
        </footer>
    )
}
