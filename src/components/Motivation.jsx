import React from 'react';
import styles from '../styles/Motivation.module.css';

const Motivation = () => {
  return (
    <section className={`${styles.motivation} section`}>
      <div className={`${styles.motivationContainer} container`}>
        <div className={styles.motivationContent}>
          <h2 className={styles.motivationTitle}>
            "The only bad workout is the one that didn't happen"
          </h2>
          <p className={styles.motivationText}>
            Your fitness journey starts with a single step. Our expert trainers and
            supportive community are here to guide you every step of the way.
          </p>
          <button className="button button--primary">Start Your Journey Today</button>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
