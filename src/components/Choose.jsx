import React from 'react';
import styles from '../styles/Choose.module.css';
import { whyChooseData } from '../utils/constants';

const Choose = () => {
  return (
    <section className={`${styles.choose} section`} id="choose">
      <div className={`${styles.chooseContainer} container`}>

        <div className="section__data">
          <h2 className="section__subtitle">Best Reason</h2>
          <div className="section__titles">
            <h1 className="section__title-border">WHY</h1>
            <h1 className="section__title">CHOOSE US?</h1>
          </div>
        </div>

        <div className={styles.chooseContent}>
          {whyChooseData.map((item) => (
            <div key={item.id} className={styles.chooseCard}>
              <h3 className={styles.chooseNumber}>{item.number}</h3>
              <h4 className={styles.chooseSubtitle}>{item.label}</h4>
            </div>
          ))}
        </div>

        <p className={styles.chooseDescription}>
          Choose your favorite class and start now. Remember the only bad workout is the
          one you didn't do.
        </p>

        {/*  IMAGE WRAPPER */}
        <div className={styles.chooseImgWrapper}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/choose-img.png`}
            alt="Choose Us"
            className={styles.chooseImg}
          />
        </div>

      </div>
    </section>
  );
};

export default Choose;
