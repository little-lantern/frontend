import React, { useEffect } from "react";
import styles from "./Learning.page.module.scss";
import PedagogyComponent from "../components/LearningPage/Pedagogy.component";
import OurCurriculumComponent from "../components/LearningPage/OurCariculam.component";
import OurLearningAreaComponent from "../components/LearningPage/OurLearningArea.component";
import OurLearingImageComponent from "../components/LearningPage/OurLearingImage.component";
import TypicalDayComponent from "../components/LearningPage/TypicalDay.component";
import useIsMobile from "../hooks/useIsMobile";
import TypicalDayMobileComponent from "../components/LearningPage/TypicalDayMobile.component";
import { useLocation } from "react-router-dom";

const LearningPage: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <PedagogyComponent />
      <OurCurriculumComponent />
      <OurLearningAreaComponent />
      <OurLearingImageComponent />
      {isMobile ? <TypicalDayMobileComponent /> : <TypicalDayComponent />}
    </div>
  );
};

export default LearningPage;
