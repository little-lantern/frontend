import React from "react";

import styles from "./ExplorePlayLearn.component.module.scss";
import { Link } from "react-router-dom";
import instaImg from "../../assets/images/explore-kids-img.png";

const ExplorePlayLearnComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={instaImg} alt="" />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.mainTitle}>EXPLORE, PLAY AND LEARN WITH US!</h2>
        <p className={styles.description}>
          Get in touch to know more about our programs & activities.
        </p>
        <div className={styles.btnBox}>
          <Link className={styles.ctaWhite} to="/">
            Apply Now
          </Link>
          <Link className={styles.ctaNormal} to="/">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExplorePlayLearnComponent;
