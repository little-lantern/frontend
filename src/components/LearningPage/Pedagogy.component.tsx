import React from "react";
import styles from "./Pedagogy.component.module.scss";
import exploringTimeImg from "../../assets/images/explore-time-img.png";
import learningTimeImg from "../../assets/images/learning-time-img.png";

const PedagogyComponent: React.FC = () => {
  return (
    <div className={styles.container} id="pedagogy">
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>PEDAGOGY</h2>
        <p className={styles.description}>
          Little Lantern follows Finland’s Educare approach, blending play-based
          learning with holistic care. Our pedagogy nurtures curiosity,
          independence, and life skills through hands-on exploration and
          social-emotional growth. With strong parent involvement and
          personalized learning, we create a joyful foundation for lifelong
          learning. Each day is structured into Exploring Time and Learning Time
          for balanced growth and discovery.
        </p>
        <div className={styles.imageBoxContent}>
          <div className={`${styles.box} ${styles.left}`}>
            <div className={styles.img}>
              <img src={exploringTimeImg} alt="" />
            </div>
            <div className={styles.contentBox}>
              <h3>Exploring Time</h3>
              <p>
                Hands-on thematic provocations, interactive learning stations,
                and creative activities that ignite curiosity.
              </p>
            </div>
          </div>
          <div className={`${styles.box} ${styles.right}`}>
            <div className={styles.img}>
              <img src={learningTimeImg} alt="" />
            </div>
            <div className={styles.contentBox}>
              <h3>Learning Time</h3>
              <p>
                Engaging activities in language, math, STEM, and the arts that
                develop key skills through play and inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedagogyComponent;
