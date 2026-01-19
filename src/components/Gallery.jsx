import React from 'react';
import styles from '../styles/Gallery.module.css';
import { galleryData } from '../utils/constants';

const Gallery = () => {
  return (
    <section className={`${styles.gallery} section`} id="gallery">
      <div className={`${styles.galleryContainer} container`}>
        <div className="section__data">
          <h2 className="section__subtitle">Real Results</h2>
          <div className="section__titles">
            <h1 className="section__title-border">MEMBER</h1>
            <h1 className="section__title">TRANSFORMATIONS</h1>
          </div>
          <p className={styles.galleryDescription}>
            Join thousands who have achieved their fitness goals. Your transformation
            starts today!
          </p>
        </div>

        <div className={`${styles.galleryContent} grid`}>
          {galleryData.map((item) => (
            <div key={item.id} className={styles.galleryCard}>
              <img loading="lazy" src={item.image} alt={item.title} className={styles.galleryImg} />
              <div className={styles.galleryInfo}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
