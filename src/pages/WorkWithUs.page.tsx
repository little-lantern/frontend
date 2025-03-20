import React from "react";
import styles from "./WorkWithUs.page.module.scss";
import WorkTopBannerComponent from "../components/WorkWithUs/WorkTopBanner.component";
import WorkInfoComponent from "../components/WorkWithUs/WorkInfo.component";
import WorkingAtComponent from "../components/WorkWithUs/WorkingAt.component";

const WorkWithUsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <WorkTopBannerComponent />
      <WorkInfoComponent />
      <WorkingAtComponent />
    </div>
  );
};

export default WorkWithUsPage;
