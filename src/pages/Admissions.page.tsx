import React from "react";
import styles from "./Admissions.page.module.scss";
import AdmissionTopSliderComponent from "../components/Admissions/AdmissionTopSlider.component";
import AdmissionProcessComponent from "../components/Admissions/AdmissionProcess.component";
import EligibilityCriteriaComponent from "../components/Admissions/EligibilityCriteria.component";

const AdmissionsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Admissions</h1>
      <AdmissionTopSliderComponent />
      <AdmissionProcessComponent />
      <EligibilityCriteriaComponent />
    </div>
  );
};

export default AdmissionsPage;
