import React from "react";
import styles from "./TopBanner.component.module.scss";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/home-page-girl.png";
import useIsMobile from "../../hooks/useIsMobile";

const TopBannerComponent: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bannerBox}>
          <div className={styles.leftBox}>
            <h2 className={styles.mainTitle}>
              Let your child <br /> explore, play & <br /> learn!
            </h2>
            <p className={styles.subTitle}>
              We are an early learning center located in Kolkata, inspired by
              Finland's world-renowned early childhood education approach
              'Educare', where play, exploration, and creativity form the
              foundation for lifelong learning.
            </p>
            <div className={styles.btn}>
              <Link to="/programs" className={styles.orangeCta}>
                Explore Programs
              </Link>
              {!isMobile && (
                <Link to="/contact-us" className={styles.whiteCta}>
                  Get In Touch
                </Link>
              )}
              {isMobile && (
                <Link to="/apply-now" className={`${styles.whiteCta}`}>
                  Apply Now
                </Link>
              )}
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.imgBox}>
              <img src={bannerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBannerComponent;
