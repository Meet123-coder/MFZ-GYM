import React from 'react';
import styles from '../styles/Home.module.css';
import { homeStatsData } from '../utils/constants';

const Home = () => {
  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`${styles.homeContainer} container grid`}>
        <div className={styles.homeData}>
          <h2 className={styles.homeSubtitle}>TRANSFORM YOUR</h2>
          <h1 className={styles.homeTitle}>BODY SHAPE</h1>
          <p className={styles.homeDescription}>
            Join thousands of members who have transformed their bodies. Expert trainers,
            proven programs, and unlimited support await you.
          </p>

          <div className={styles.homeButtons}>
            <a
              href="https://www.instagram.com/p/DOTf4g_CcAo/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`button button--primary`}
            >
              Get Started With MFZ
            </a>
            <a
              href="https://www.instagram.com/p/DSMnR9UDJlP/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`button button--secondary`}
            >
              <i className="ri-play-fill"></i> Watch Demo
            </a>
          </div>

          <div className={styles.homeStats}>
            {homeStatsData.map((stat) => (
              <div key={stat.id} className={styles.homeStat}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <img src={`${process.env.PUBLIC_URL}/assets/img/home-img.png`} alt="Fitness Training" className={styles.homeImg} />
      </div>
    </section>
  );
};

export default Home;
