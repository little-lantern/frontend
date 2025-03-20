import React from "react";
import styles from "./WorkTopBanner.component.module.scss";
import BannerImage from "../../assets/images/work-with-us-top-banner.png";
import { Link } from "react-router-dom";

const WorkTopBannerComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bannerBox}>
          <div className={styles.bannerImg}>
            <img src={BannerImage} alt="" />
          </div>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
              BE A PART OF A WONDERFUL TEAM
            </h2>
            <div className={styles.description}>careers at little lantern</div>
            <div className={styles.btn}>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTopBannerComponent;
