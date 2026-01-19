import React from 'react';
import styles from '../styles/Logos.module.css';
import { logosData } from '../utils/constants';

const Logos = () => {
  return (
    <section className={`${styles.logos} section`}>
      <div className={`${styles.logosContainer} container grid`}>
        {logosData.map((logo) => (
          <img
            key={logo.id}
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            className={styles.logosImg}
          />
        ))}
      </div>
    </section>
  );
};

export default Logos;
