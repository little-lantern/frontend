import React from "react";
import styles from "./TopVideo.component.module.scss";
import sliderImagOne from "../../assets/images/slider-4-1.jpg";

const TopVideoComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoBox}>
        <img src={sliderImagOne} alt="video" />
      </div>
    </div>
  );
};

export default TopVideoComponent;
