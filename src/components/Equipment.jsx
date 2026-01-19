import React from 'react';
import styles from '../styles/Equipment.module.css';
import { equipmentData } from '../utils/constants';

const Equipment = () => {
  return (
    <section className={`${styles.equipment} section`} id="equipment">
      <div className={`${styles.equipmentContainer} container`}>
        <div className="section__data">
          <h2 className="section__subtitle">Gym Equipment</h2>
          <div className="section__titles">
            <h1 className="section__title-border">STATE OF THE</h1>
            <h1 className="section__title">ART EQUIPMENT</h1>
          </div>
        </div>

        <div className={`${styles.equipmentContent} grid`}>
          {equipmentData.map((equipment) => (
            <div key={equipment.id} className={styles.equipmentCard}>
              <div className={styles.equipmentImage}>
                <img
                  loading="lazy"
                  src={equipment.image}
                  alt={equipment.title}
                  className={styles.equipmentImg}
                />
              </div>
              <h3 className={styles.equipmentTitle}>{equipment.title}</h3>
              <p className={styles.equipmentDescription}>{equipment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
