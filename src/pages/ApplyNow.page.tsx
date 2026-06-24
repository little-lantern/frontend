/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import styles from "./ApplyNow.page.module.scss";
import useIsMobile from "../hooks/useIsMobile";

const FORM_URL =
  "https://form.illumine.app/publicForm/?applicationId=-OK_DVO8JABctKDF2nD6&centerId=LittleLantern_Master-Branch";

const ApplyNowPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>Admission Enquiry Form</h1>
        <p className={styles.subtitle}>
          Start your child's Little Lantern journey. Our team will reach out to
          schedule your campus visit.
        </p>
        <div className={styles.formBox}>
          {!formLoaded && (
            <div className={styles.formSkeleton} aria-hidden="true">
              <div className={styles.spinner} />
              <span>Loading form…</span>
            </div>
          )}
          <iframe
            src={FORM_URL}
            height={isMobile ? "1500" : "1600"}
            style={{
              border: "0",
              opacity: formLoaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setFormLoaded(true)}
            title="Little Lantern admission enquiry form"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyNowPage;
