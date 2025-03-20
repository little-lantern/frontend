import React from "react";
import styles from "./ZoneAndArea.component.module.scss";

const ZoneAndAreaComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.innerBox}>
          <div className={styles.textBox}>
            <h3>20+</h3>
            <p>
              Learning <br />
              Zones
            </p>
          </div>
          <div className={styles.textBox}>
            <h3>12000+</h3>
            <p>
              Sqft
              <br />
              Space
            </p>
          </div>
          <div className={styles.textBox}>
            <h3>1:10</h3>
            <p>
              Student-Teacher <br />
              Ratio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneAndAreaComponent;
