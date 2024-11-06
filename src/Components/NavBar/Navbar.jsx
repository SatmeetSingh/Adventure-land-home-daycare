import { Link } from 'react-scroll';
import styles from './navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            {/* <img src="/path/to/logo.png" alt="Adventure Land Logo" className={styles.logoImage} /> */}
            <span className={styles.logoText}>Adventure Land</span>
            <span className={styles.subText}>Home DayCare</span>
          </Link>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          &#x22EE; {/* 3 vertical dots */}
        </div>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li>
            <Link to="/" smooth={true} duration={500} offset={-50}>
              Home
            </Link>
          </li>
          <li>
            <Link to="feature" smooth={true} duration={500} offset={-50}>
              Why Us
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} duration={500} offset={-50}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="location" smooth={true} duration={500} offset={-50}>
              Enroll
            </Link>
          </li>
          {/* <li> */}
          {/* <a href="#Feedback">Feedback</a> */}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
