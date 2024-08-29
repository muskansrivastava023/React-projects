import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react';
import {getPhotoUrl} from '../../utils'

export const Navbar = () => {
    const [openHamburgerMenu, setopenHamburgerMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>My Portfolio</a>
        <div className={styles.menu}> 
            <img src={openHamburgerMenu ? getPhotoUrl('nav/close.png'): getPhotoUrl('nav/hamburgerButton.png')} 
            alt="hamburger-button" 
            onClick={()=>setopenHamburgerMenu(!openHamburgerMenu)}
            className={styles.menuButton} />
            <ul className={`${styles.menuItems} ${openHamburgerMenu && styles.openHamburgerMenu}`} onClick={()=>setopenHamburgerMenu(false)}>
                <li><a href="#skills" >Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
