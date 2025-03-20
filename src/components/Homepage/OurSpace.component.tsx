import React from "react";
import styles from "./OurSpace.component.module.scss";
import OurSpaceSliderComponent from "./OurSpaceSlider.component";
import EducationComponent from "./Education.component";
const OurSpaceComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.infoCopy}>
          By day, we nurture young minds as a vibrant preschool, and by evening,
          we transform into an enriching activity hub. Our greatest strengths
          lie in our thoughtfully designed spaces, passionate educators, and
          commitment to igniting curiosity. At Little Lantern, we cultivate
          confidence, independence, and a deep love for learning in every child.
        </p>
        <OurSpaceSliderComponent />
        <EducationComponent />
      </div>
    </div>
  );
};

export default OurSpaceComponent;
