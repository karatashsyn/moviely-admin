import React, { useState } from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import HamburgerMenuIcon from '../UI/Icons/HamburgerMenuIcon'
import HomeIcon from '../UI/Icons/NavBar/HomeIcon'
import AddMovieIcon from '../UI/Icons/NavBar/AddMovieIcon'
import ArtistsIcon from '../UI/Icons/NavBar/ArtistsIcon'
import LibraryIcon from '../UI/Icons/NavBar/LibraryIcon'
import SettingsIcon from '../UI/Icons/NavBar/SettingsIcon'
import LogoutIcon from '../UI/Icons/NavBar/LogoutIcon'

type props = {
  admin: {
    name: string
    surname: string
    email: string
  }
}
export default function Navbar({ admin }: props) {
  const [opened, setOpened] = useState(false)
  const handleOpen = () => {
    setOpened((opened) => !opened)
  }
  return (
    <div className={!opened ? `${styles.navbar}` : `${styles.navbar} ${styles.opened}`}>
      <div className={styles.adminContainer}>
        <div className={styles.heroContainer}>
          <img
            className={styles.heroImg}
            src="https://avatars.githubusercontent.com/u/81769362?v=4"
            alt=""
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.adminFullName}>Huseyin Karatas</h1>
          <h2 className={styles.adminRole}>Cofounder</h2>
        </div>
        <div className={styles.closerContainer}>
          <div onClick={handleOpen} className={styles.closerButton}>
            <HamburgerMenuIcon/>
          </div>
        </div>
      </div>

      <div className={styles.mainOptionsContainer}>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <HomeIcon/>
          </div>
          <NavLink to={'/'}>
            <h2 className={styles.optionName}>Home</h2>
          </NavLink>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <AddMovieIcon/>
          </div>
          <NavLink to={'/add'}>
            <h2 className={styles.optionName}>Add Movie</h2>
          </NavLink>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
        <ArtistsIcon/>
          </div>
          <h2 className={styles.optionName}>Artists</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
           <LibraryIcon/>
          </div>
          <h2 className={styles.optionName}>Genres</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <SettingsIcon/>
          </div>
          <h2 className={styles.optionName}>Settings</h2>
        </div>
      </div>

      <div className={styles.logOutContainer}>
        <div className={styles.logouticonwrapper}>
        <LogoutIcon/>
        </div>
        <h2 className={styles.logout}>Log Out</h2>
      </div>
    </div>
  )
}
