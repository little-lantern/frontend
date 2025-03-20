import React from "react";
import styles from "./Learning.page.module.scss";
import PedagogyComponent from "../components/LearningPage/Pedagogy.component";

const LearningPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PedagogyComponent />
    </div>
  );
};

export default LearningPage;
