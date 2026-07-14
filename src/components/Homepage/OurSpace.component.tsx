import React from "react";
import styles from "./OurSpace.component.module.scss";
import OurSpaceSliderComponent from "./OurSpaceSlider.component";
import EducationComponent from "./Education.component";
const OurSpaceComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.infoCopy}>
          We are an early learning center located in Kolkata, inspired by
          Finland’s world-renowned early childhood education approach ‘Educare’,
          where play, exploration, and creativity form the foundation for
          lifelong learning. By day, we nurture young minds as a vibrant
          preschool, and by evening, we transform into an enriching activity
          hub.
        </p>
        <OurSpaceSliderComponent />
        <EducationComponent />
      </div>
    </div>
  );
};

export default OurSpaceComponent;
