import React from "react";
import styles from "./Education.component.module.scss";
import littleBoy from "../../assets/images/little-boy.png";
import littleBoyWithHands from "../../assets/images/little-boy-with-hands.png";
import smilingGirl from "../../assets/images/smiling-girl.png";
const EducationComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        “Educating the mind without educating the heart is no education at all”
        <br />- Aristotle
      </h2>
      <div className={styles.imagesBox}>
        <div className={styles.box}>
          <img src={littleBoy} alt="littleBoy" />
        </div>
        <div className={styles.box}>
          <img src={smilingGirl} alt="smilingGirl" />
        </div>
        <div className={styles.box}>
          <img src={littleBoyWithHands} alt="littleBoyWithHands" />
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
