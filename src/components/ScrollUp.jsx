import React, { useEffect } from 'react';
import styles from '../styles/ScrollUp.module.css';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 350) {
        scrollUp?.classList.add(styles.showScroll);
      } else {
        scrollUp?.classList.remove(styles.showScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className={styles.scrollup} id="scroll-up" onClick={(e) => { e.preventDefault(); handleClick(); }}>
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
};

export default ScrollUp;
