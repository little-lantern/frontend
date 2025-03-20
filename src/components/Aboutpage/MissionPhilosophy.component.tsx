import React from "react";
import styles from "./MissionPhilosophy.component.module.scss";
import PhilosophyImage from "../../assets/images/about-philosphy-01.png";
import MissionImage from "../../assets/images/our-mission-01.png";

const MissionPhilosophyComponent: React.FC = () => {
  return (
    <div className={styles.container} id="mission">
      <div className={styles.wrapper}>
        <div className={styles.missionVisionBox}>
          <div className={styles.imgBox}>
            <img src={MissionImage} alt="" />
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.mainTitle} style={{ color: "#F57A3E" }}>
              our <br className={styles.hideMobile} /> mission
            </h3>
            <p className={styles.description}>
              Every child is the hero of their own learning journey. Our vision
              is to create a nurturing environment where children are free to
              explore, experiment, and express themselves. With a strong
              foundation in values and a love for lifelong learning, we prepare
              young learners to embrace challenges with curiosity and
              confidence, growing into capable, compassionate individuals ready
              for the future.
            </p>
          </div>
        </div>
        <div className={`${styles.missionVisionBox} ${styles.topBottom}`}>
          <div className={styles.textBox}>
            <h3 className={styles.mainTitle} style={{ color: "#06B3DB" }}>
              our <br className={styles.hideMobile} /> Philosophy
            </h3>
            <p className={styles.description}>
              We honor that each child learns in their own unique way. Our
              approach focuses on equipping them with essential life
              skills—critical thinking, problem-solving, adaptability, and
              confidence. By fostering an environment that encourages
              independence and creativity, we empower children to understand and
              engage with the world around them. Our holistic learning model
              builds resilience, curiosity, and a love for learning that lasts a
              lifetime.
            </p>
          </div>
          <div className={styles.imgBox}>
            <img src={PhilosophyImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPhilosophyComponent;
