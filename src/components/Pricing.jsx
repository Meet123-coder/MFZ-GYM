import React from "react";
import styles from "../styles/Pricing.module.css";
import { pricingData } from "../utils/constants";

const Pricing = () => {
  return (
    <section className={`${styles.pricing} section`} id="pricing">
      <div className={`${styles.pricingContainer} container`}>
        <div className="section__data">
          <h2 className="section__subtitle">Pricing</h2>
          <div className="section__titles">
            <h1 className="section__title-border">OUR</h1>
            <h1 className="section__title">SPECIAL PLAN</h1>
          </div>
        </div>

        <div className={`${styles.pricingContent} grid`}>
          {pricingData.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.pricingCard} ${
                plan.isActive ? styles.pricingCardActive : ""
              }`}
            >
              <div className={styles.pricingImage}>
                <img
                  loading="lazy"
                  src={`${process.env.PUBLIC_URL}${plan.icon}`}
                  alt={plan.name}
                  className={styles.pricingImg}
                />
              </div>
              <h2 className={styles.pricingTitle}>{plan.name}</h2>
              <span className={styles.pricingNumber}>{plan.price}</span>
              <ul className={styles.pricingList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.pricingItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`${styles.pricingButton} button`}>
                Purchase Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
