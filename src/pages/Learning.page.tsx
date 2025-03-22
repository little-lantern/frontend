import React from "react";
import styles from "./Learning.page.module.scss";
import PedagogyComponent from "../components/LearningPage/Pedagogy.component";
import OurCurriculumComponent from "../components/LearningPage/OurCariculam.component";
import OurLearningAreaComponent from "../components/LearningPage/OurLearningArea.component";
import OurLearingImageComponent from "../components/LearningPage/OurLearingImage.component";
import TypicalDayComponent from "../components/LearningPage/TypicalDay.component";

const LearningPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PedagogyComponent />
      {/* <OurCurriculumComponent />
      <OurLearningAreaComponent />
      <OurLearingImageComponent />
      <TypicalDayComponent /> */}
    </div>
  );
};

export default LearningPage;
