import React from "react";
import styles from "./OurPrograms.component.module.scss";
import { Link } from "react-router-dom";
import arrowLink from "../../assets/images/arrow-link.svg";
import parentToddlerBg from "../../assets/images/parent-toddler-icon.png";
import toddlerBg from "../../assets/images/toddler-icon.png";
import playgroupBg from "../../assets/images/playgroup-icon.png";
import nurseryBg from "../../assets/images/nursery-icon.png";
import kg1Bg from "../../assets/images/kg1-icon.png";

const OurProgramsComponents: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Our programs</h2>
        <div className={styles.programBox}>
          <Link to="/" className={styles.box} style={{ background: "#7771D7" }}>
            <h3>Parent Toddler</h3>
            <p>12+ months</p>
            <span className={styles.arrow}>
              <img src={arrowLink} alt="" />
            </span>
            <div className={styles.bgImg}>
              <img src={parentToddlerBg} alt="" />
            </div>
          </Link>
          <Link to="/" className={styles.box} style={{ background: "#F289B7" }}>
            <h3>Toddler</h3>
            <p>18+ months</p>
            <span className={styles.arrow}>
              <img src={arrowLink} alt="" />
            </span>
            <div className={styles.bgImg}>
              <img src={toddlerBg} alt="" />
            </div>
          </Link>
          <Link to="/" className={styles.box} style={{ background: "#06B3DB" }}>
            <h3>Playgroup</h3>
            <p>2-3 years</p>
            <span className={styles.arrow}>
              <img src={arrowLink} alt="" />
            </span>
            <div className={styles.bgImg}>
              <img src={playgroupBg} alt="" />
            </div>
          </Link>
          <Link to="/" className={styles.box} style={{ background: "#F289B7" }}>
            <h3>Nursery</h3>
            <p>3-4 years</p>
            <span className={styles.arrow}>
              <img src={arrowLink} alt="" />
            </span>
            <div className={styles.bgImg}>
              <img src={nurseryBg} alt="" />
            </div>
          </Link>
          <Link to="/" className={styles.box} style={{ background: "#7771D7" }}>
            <h3>KG 1</h3>
            <p>4-5 years</p>
            <span className={styles.arrow}>
              <img src={arrowLink} alt="" />
            </span>
            <div className={styles.bgImg}>
              <img src={kg1Bg} alt="" />
            </div>
          </Link>
        </div>

        <div className={styles.btnBox}>
          <Link to="/">Explore Programs</Link>
        </div>
      </div>
    </div>
  );
};

export default OurProgramsComponents;
