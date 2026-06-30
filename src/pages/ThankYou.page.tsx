import React from "react";
import styles from "./ThankYou.page.module.scss";
import topBatch from "../assets/images/thank-you-01.png";
import leftBatch from "../assets/images/thank-you-02.png";
import rightBatch from "../assets/images/thank-you-03.png";
import bottomBatch from "../assets/images/thank-you-04.png";
import userIcon from "../assets/images/user-icon-thank.svg";
import closeIcon from "../assets/images/close-icon.svg";
import { Link } from "react-router-dom";

const ThankYouPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.close} aria-label="Close and return home">
          <img src={closeIcon} alt="" aria-hidden="true" />
        </Link>
        <img src={topBatch} alt="" className={styles.topBatch} aria-hidden="true" />
        <img src={leftBatch} alt="" className={styles.leftBatch} aria-hidden="true" />
        <img src={rightBatch} alt="" className={styles.rightBatch} aria-hidden="true" />
        <img src={bottomBatch} alt="" className={styles.bottomBatch} aria-hidden="true" />
        <div className={styles.userIcon}>
          <img src={userIcon} alt="" aria-hidden="true" />
        </div>
        <h1 className={styles.mainTitle}>Thank You</h1>
        <p>Thank you for filling the form, We will be in touch soon!</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
