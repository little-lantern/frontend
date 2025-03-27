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
        <Link to="/" className={styles.close}>
          <img src={closeIcon} alt="" />
        </Link>
        <img src={topBatch} alt="" className={styles.topBatch} />
        <img src={leftBatch} alt="" className={styles.leftBatch} />
        <img src={rightBatch} alt="" className={styles.rightBatch} />
        <img src={bottomBatch} alt="" className={styles.bottomBatch} />
        <div className={styles.userIcon}>
          <img src={userIcon} alt="" />
        </div>
        <h2>THANK YOU!</h2>
        <p>Thank you for filling the form, We will be in touch soon!</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
