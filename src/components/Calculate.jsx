import React, { useState } from 'react';
import styles from '../styles/Calculate.module.css';
import { calculateBMI } from '../utils/validation';

const Calculate = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    setBmiResult(null);
    setError('');

    if (!height || !weight) {
      setError('Please fill in both height and weight');
      return;
    }

    const result = calculateBMI(height, weight);
    result.error ? setError(result.error) : setBmiResult(result);
  };

  return (
    <section className={`${styles.calculate} section`} id="calculate">
      <div className={styles.calculateContainer}>
        
        {/* LEFT / CENTER FORM */}
        <div className={styles.calculateContent}>
          <h2 className="section__subtitle">Calculate</h2>
          <h1 className="section__title">Your BMI</h1>

          <form className={styles.calculateForm} onSubmit={handleCalculate}>
            <div className={styles.calculateBox}>
              <label className={styles.calculateLabel}>Height (cm)</label>
              <input
                type="number"
                className={styles.calculateInput}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className={styles.calculateBox}>
              <label className={styles.calculateLabel}>Weight (kg)</label>
              <input
                type="number"
                className={styles.calculateInput}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button className={`button ${styles.calculateButton}`}>
              Calculate Now
            </button>
          </form>

          {error && <div className={`${styles.calculateMessage} ${styles.errorMessage}`}>{error}</div>}
          {bmiResult && (
            <div className={`${styles.calculateMessage} ${styles.successMessage}`}>
              BMI: {bmiResult.bmi} <br />
              Status: {bmiResult.health}
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.calculateImgWrapper}>
          <img
            src="/assets/img/calculate-img.png"
            alt="BMI Calculator"
            className={styles.calculateImg}
          />
        </div>

      </div>
    </section>
  );
};

export default Calculate;
