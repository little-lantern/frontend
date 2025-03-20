import React from "react";
import styles from "./WhatCanYouExpect.component.module.scss";
import OurExpertImag from "../../assets/images/program-expert-img.png";

const WhatCanYouExpectComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>
          what can u expect <br /> from our programs
        </h2>

        <div className={styles.stepBox}>
          <div className={styles.leftBox}>
            <div className={`${styles.box} ${styles.one} `}>
              <strong>1</strong>
              <p>
                A nurturing environment that fosters curiosity and confidence.
              </p>
            </div>
            <div className={`${styles.box} ${styles.two} `}>
              <strong>2</strong>
              <p>
                A well-balanced curriculum integrating our five core learning
                areas.
              </p>
            </div>
          </div>
          <div className={styles.centerImg}>
            <img src={OurExpertImag} alt="" />
            <div className={`${styles.box} ${styles.three} `}>
              <strong>3</strong>
              <p>
                Educators who adapt learning experiences to meet individual
                needs.
              </p>
            </div>
          </div>

          <div className={styles.rightBox}>
            <div className={`${styles.box} ${styles.five} `}>
              <strong>5</strong>
              <p>
                Play-based, hands-on experiences that support exploration and
                discovery.
              </p>
            </div>
            <div className={`${styles.box} ${styles.four} `}>
              <strong>4</strong>
              <p>
                A strong emphasis on independence, collaboration, and parent
                involvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanYouExpectComponent;
