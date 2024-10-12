import React, { useRef } from 'react'
import sideProjects from '../../data/sideProjects.json'
import { getPhotoUrl } from '../../utils'
import styles from './SideProjects.module.css'


export const SideProjects = () => {

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.sideProjects}>

                {
                    sideProjects.map((sideProject, id) => {
                        return <div key={id} className={styles.cardContainer}>
                            <img src={getPhotoUrl(sideProject.imageSrc)} alt={`Image of ${sideProject.title}`} className={styles.image} />
                            <h3 className={styles.cardTitle}>{sideProject.title}</h3>
                            <p className={styles.cardDescription}>{sideProject.description}</p>
                            <ul className={styles.skills}>{
                                sideProject.skills.map((skill, id) => {
                                    return <li key={id} className={styles.skill}>{skill}</li>
                                })}
                            </ul>
                        


                        </div>
                    })

                }
            </div>
        </section>
    )
}
