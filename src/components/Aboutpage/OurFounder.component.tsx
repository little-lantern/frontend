import React from "react";
import styles from "./OurFounder.component.module.scss";
import EnvelopIcon from "../../assets/images/envelop-icon.png";
import StepIcon from "../../assets/images/founder-step-icon.png";
import StepLineIcon from "../../assets/images/founder-3-icon.png";
import FounderImage from "../../assets/images/founder-img.png";
import SigneIcon from "../../assets/images/sign-icon.png";
import EnvelopIconMobile from "../../assets/images/founder-env-icon.png";
import useIsMobile from "../../hooks/useIsMobile";

const OurFounderComponent: React.FC = () => {
  const isMobile = useIsMobile();
  const envIcon = isMobile ? EnvelopIconMobile : EnvelopIcon;
  return (
    <div className={styles.container} id="team">
      <div className={styles.envIcon}>
        <img src={envIcon} alt="" />
      </div>
      <div className={styles.founderBox}>
        <div className={styles.founderInfo}>
          <div className={styles.founderPick}>
            <img src={FounderImage} alt="" />
            <p>
              <strong>Shubh Agarwal Sonthalia</strong>
              <span>Founder, Little Lattern</span>
            </p>
            <div className={styles.sign}>
              <img src={SigneIcon} alt="" />
            </div>
          </div>
          <div className={styles.founderContent}>
            <h2>our founder</h2>
            <p>
              Shubh Agarwal Sonthalia combines her business acumen with a deep
              passion for education to create a learning space that nurtures not
              just intellect but also character. With a background in the
              education industry, a degree in Business Administration from Emory
              University, and certification in the Finnish approach, she
              envisions Little Lantern as a place where children grow into
              compassionate, confident, and capable human beings. Her philosophy
              is rooted in instilling essential life skills—respect,
              risk-taking, and empathy—ensuring that education goes beyond
              academics
            </p>
            <p>
              Music and dance — her personal passions — are an essential and
              exciting part of the curriculum, making learning a joyful,
              expressive, and immersive experience. Through Little Lantern, she
              aspires to create an environment where curiosity thrives,
              creativity flourishes, and children develop into well-rounded
              individuals ready to embrace the world.
            </p>
            <div className={styles.sign}>
              <img src={SigneIcon} alt="" />
            </div>
          </div>
          <div className={styles.stepIcon}>
            <img src={StepIcon} alt="" />
          </div>
          <div className={styles.stepTree}>
            <img src={StepLineIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounderComponent;
