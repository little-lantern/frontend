import React from "react";
import { Link } from "react-router-dom";
import styles from "./VideoBanner.component.module.scss";
import brandVideo from "../../assets/images/brand_video.mp4";

const VideoBannerComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src={brandVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className={styles.overlay}>
        <h1 className={styles.mainTitle}>
          Every child is the hero of their own learning journey.
        </h1>
        <Link to="/apply-now" className={styles.whiteCta}>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default VideoBannerComponent;
