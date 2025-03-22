import React from "react";
import styles from "./OurLearingImage.component.module.scss";
import DesktopImg from "../../assets/images/desktop-image-learning-image.png";
import MobileImg from "../../assets/images/mobile-image-learning-image.png";
import useIsMobile from "../../hooks/useIsMobile";

const OurLearingImageComponent: React.FC = () => {
  const isMobile = useIsMobile();

  const displayImage = isMobile ? MobileImg : DesktopImg;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={displayImage} alt="" />
      </div>
    </div>
  );
};

export default OurLearingImageComponent;
