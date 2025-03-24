import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>
        <span>404</span> Page Not Found
      </h1>
      <p>
        Oops! The page you're looking for doesn't exist.{" "}
        <Link to="/">Go back to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
