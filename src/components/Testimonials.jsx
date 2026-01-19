import React from 'react';
import styles from '../styles/Testimonials.module.css';
import { testimonialsData } from '../utils/constants';

const Testimonials = () => {
  return (
    <section className={`${styles.testimonials} section`} id="testimonials">
      <div className={`${styles.testimonialsContainer} container`}>
        <div className="section__data">
          <h2 className="section__subtitle">Success Stories</h2>
          <div className="section__titles">
            <h1 className="section__title-border">CLIENT</h1>
            <h1 className="section__title">TESTIMONIALS</h1>
          </div>
        </div>

        <div className={`${styles.testimonialsContent} grid`}>
          {testimonialsData.map((testimonial) => (
            <article key={testimonial.id} className={styles.testimonialsCard}>
              <div className={styles.testimonialsHeader}>
                <div className={styles.testimonialsStars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <p className={styles.testimonialsName}>{testimonial.name}</p>
              </div>
              <p className={styles.testimonialsText}>{testimonial.text}</p>
              <p className={styles.testimonialsJob}>{testimonial.job}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
