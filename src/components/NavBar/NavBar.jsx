import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
const NavBar = () => {
  return (    
    <nav>
      <div className={styles.navLogo}>
          <NavLink to="/">
              <img src="src/assets/Icon-rounded-black-border.svg" alt="logo"  />
          </NavLink>    
      </div>

      <ul className={styles.navLinks}>
        <li className={styles.links}>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/">
            Services
          </NavLink>
        </li>
     
        <li className={styles.links}>
          <NavLink to="/">
            About
          </NavLink>
        </li>
      </ul>
      <button className="btn">Hire Me</button>
    </nav>

  )
}

export default NavBar
