import React from "react";
import styles from "./TopTitleImage.component.module.scss";
import BannerImage from "../../assets/images/hero-image-about-01.jpg";

const TopTitleImageComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>About us</h2>
      <div className={styles.imageWrapper}>
        <img src={BannerImage} alt="about" />
      </div>
    </div>
  );
};

export default TopTitleImageComponent;
