import React from "react";
import styles from "./Error.page.module.scss";
import closeIcon from "../assets/images/close-icon.svg";
import thumbsIcon from "../assets/images/thumbs-icon.svg";
import errorLogo from "../assets/images/error-logo.svg";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/apply-now" className={styles.close}>
          <img src={closeIcon} alt="" />
        </Link>
        <div className={styles.userIcon}>
          <img src={thumbsIcon} alt="" />
        </div>
        <h2>UH OH!</h2>
        <p>
          The page you are looking for was not found / Data Invalid / Any Error
        </p>
        <div className={styles.userIcon}>
          <img src={errorLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
