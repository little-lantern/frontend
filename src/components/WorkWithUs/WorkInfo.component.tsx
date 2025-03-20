import React from "react";

import styles from "./WorkInfo.component.module.scss";
import BannerContact from "../../assets/images/work-with-contact.png";
import { Link } from "react-router-dom";

const WorkInfoComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bannerBox}>
          <div className={styles.bannerImg}>
            <img src={BannerContact} alt="" />
          </div>
          <div className={styles.bannerContent}>
            <div className={styles.description}>
              At Little Lantern, we believe that every child deserves a
              nurturing environment where they can explore, learn, and grow to
              their fullest potential. We're always looking for passionate and
              dedicated individuals who share our commitment to early childhood
              education and creating a supportive community for both children
              and their families.
              <br /> <br />
              If you’re eager to contribute to a meaningful cause and be part of
              a dynamic, child-centered team, we’d love to hear from you. Please
              fill out the form below to apply.
              <br />
              Let’s light up the path to a brighter future for children
              together!
            </div>
            <div className={styles.btn}>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInfoComponent;
