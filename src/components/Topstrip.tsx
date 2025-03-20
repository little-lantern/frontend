import React from "react";
import styles from "./Topstrip.module.scss";

const messages = [
  "ADMISSION OPEN FOR BATCH OF 2025-26",
  "ADMISSION OPEN FOR BATCH OF 2025-26",
  "ADMISSION OPEN FOR BATCH OF 2025-26",
];

const TopStrip: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.marquee}>
          {messages.concat(messages).map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopStrip;
