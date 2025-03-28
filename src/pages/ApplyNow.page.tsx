/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./ApplyNow.page.module.scss";
import useIsMobile from "../hooks/useIsMobile";

const ApplyNowPage: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>
          Welcome to <br />
          Little Lantern
        </h2>
        <div className={styles.formBox}>
          <iframe
            src="https://form.illumine.app/publicForm/?applicationId=-OK_DVO8JABctKDF2nD6&centerId=LittleLantern_Master-Branch"
            height={isMobile ? "1500" : "1600"}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowPage;
