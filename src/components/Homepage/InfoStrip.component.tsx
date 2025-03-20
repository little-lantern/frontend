import React from "react";
import styles from "./InfoStrip.component.module.scss";
import approchIcone from "../../assets/images/approch-icon.svg";
import collaborationIcon from "../../assets/images/collaboration-icon.svg";
import environmentIcon from "../../assets/images/env-icon.svg";
import exprimentIcon from "../../assets/images/expriment-icon.svg";

const InfoStripComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.boxContent}>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img src={approchIcone} alt="Personalized Learning Approach" />
            </div>
            <div className={styles.text}>
              Personalized Learning <br /> Approach
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img src={environmentIcon} alt="Safe & Stimulating Environment" />
            </div>
            <div className={styles.text}>
              Safe & Stimulating <br /> Environment
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img
                src={exprimentIcon}
                alt="Play-Based & Experiential Learning"
              />
            </div>
            <div className={styles.text}>
              Play-Based & <br /> Experiential Learning
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img
                src={collaborationIcon}
                alt="Community & Parent  Collaboration"
              />
            </div>
            <div className={styles.text}>
              Community & Parent <br /> Collaboration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoStripComponent;
