import React from "react";
import styles from "./ApplyNow.page.module.scss";

const ApplyNowPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>
          Welcome to <br />
          Little Lantern
        </h2>
        <div className={styles.formBox}></div>
      </div>
    </div>
  );
};

export default ApplyNowPage;
