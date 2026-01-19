import React from "react";
import styles from "../styles/Program.module.css";
import { programsData } from "../utils/constants";

const Program = () => {
  return (
    <section className={`${styles.program} section`} id="program">
      <div className={`${styles.programContainer} container`}>
        <div className="section__data">
          <h2 className="section__subtitle">Our Program</h2>
          <div className="section__titles">
            <h1 className="section__title-border">BUILD YOUR</h1>
            <h1 className="section__title">BEST BODY</h1>
          </div>
        </div>

        <div className={`${styles.programContent} grid`}>
          {programsData.map((program) => (
            <article key={program.id} className={styles.programCard}>
              <img
                loading="lazy"
                src={`${process.env.PUBLIC_URL}${program.icon}`}
                alt={program.title}
                height="80"
                width="80"
              />

              <h3 className={styles.programTitle}>{program.title}</h3>
              <p className={styles.programDescription}>{program.description}</p>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className={styles.programButton}
                onClick={(e) => e.preventDefault()}
              >
                <i className="ri-arrow-right-line"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
