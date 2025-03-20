import React from "react";
import styles from "./Admission.component.module.scss";
import girlImg from "../../assets/images/gir-flying-img.png";
import { Link } from "react-router-dom";

const AdmissionComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageBox}>
            <img src={girlImg} alt="img" />
          </div>
          <div className={styles.contentBox}>
            <h2 className={styles.mainTitle}>
              Little Lantern is your kids next stop!
            </h2>
            <p className={styles.description}>
              ADMISSION OPEN FOR 2025 SUMMER BATCH
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
      </div>
    </div>
  );
};

export default AdmissionComponent;
