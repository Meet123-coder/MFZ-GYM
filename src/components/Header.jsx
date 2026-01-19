import React, { useState, useEffect } from 'react';
import '../styles/Header.module.css';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  return (
    <header className={`${styles.header} ${isScrolling ? styles['scroll-header'] : ''}`} id="header">
      <nav className={styles.nav + ' container'}>
        <div className={styles.navWrapper}>
          <div className={styles.navLogo}>
            <img
              src="/assets/img/logo-nav.png"
              alt="MFZ Logo"
              className={styles.navLogoImg}
            />
            <div className={styles.navBrand}>
              <span className={styles.navBrandMain}>MFZ</span>
              <span className={styles.navBrandSub}>My Fitness Zone</span>
            </div>
          </div>

          <div className={`${styles.navMenu} ${showMenu ? styles.showMenu : ''}`} id="nav-menu">
            <div className={styles.navClose} id="nav-close" onClick={handleCloseMenu}>
              <i className="ri-close-line"></i>
            </div>

            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#home" className={styles.navLink} onClick={handleNavClick}>
                  Home
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#program" className={styles.navLink} onClick={handleNavClick}>
                  Programs
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#choose" className={styles.navLink} onClick={handleNavClick}>
                  Why MFZ
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#equipment" className={styles.navLink} onClick={handleNavClick}>
                  Equipments
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#gallery" className={styles.navLink} onClick={handleNavClick}>
                  Transformations
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#footer" className={styles.navLink} onClick={handleNavClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.navActions}>
          <a
            href="https://wa.me/919925826698"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navButton}
          >
            Inquiry Now
          </a>

          <div className={styles.navToggle} id="nav-toggle" onClick={handleToggleMenu} style={{ display: showMenu ? 'none' : undefined }}>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
