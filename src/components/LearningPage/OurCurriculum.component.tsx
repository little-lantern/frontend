import React from "react";
import styles from "./OurCurriculum.component.module.scss";

const OurCurriculumComponent: React.FC = () => {
  return (
    <div className={styles.container} id="curriculum">
      <h2 className={styles.mainTitle}>OUR CURRICULUM</h2>
      <p className={styles.description}>
        At Little Lantern, learning is a joyful adventure! Our curriculum
        revolves around five core learning areas, blending hands-on activities,
        outdoor exploration, and creative play. From building blocks and
        storytelling to nature walks and problem-solving, every experience
        nurtures curiosity, life skills, and essential transversal skills like
        communication, collaboration, and adaptability. With a balance of guided
        learning and free exploration, each day is filled with excitement,
        discovery, and endless possibilities!
      </p>
    </div>
  );
};

export default OurCurriculumComponent;
