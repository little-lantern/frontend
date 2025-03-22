import React from "react";
import styles from "./OurLearningArea.component.module.scss";
import ClosePeople from "../../assets/images/playing-with-kids.png";

const dataJson = [
  {
    id: "01",
    title: "Rich World of Languages",
    description:
      "Building communication skills in English, Hindi, and foreign languages through storytelling, listening & speaking",
  },
  {
    id: "02",
    title: "Diverse Forms of Expression & Cultural Awareness",
    description:
      "Encouraging self-expression through art, music, dance, and theater.",
  },
  {
    id: "03",
    title: "Me and My Community",
    description:
      "Teaching empathy, social skills, and ethical values while fostering a sense of responsibility.",
  },
  {
    id: "04",
    title: "Exploring and Interacting with My Environment",
    description:
      "Introducing sciences, environmental awareness, and mathematical concepts.",
  },
  {
    id: "05",
    title: "I Grow, Move, and Develop",
    description:
      "Enhancing motor skills, coordination, and overall well-being through physical education.",
  },
];

const OurLearningAreaComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Learning areas</h2>
        <div className={styles.bannerBox}>
          <div className={styles.bannerImg}>
            <img src={ClosePeople} alt="" />
          </div>
          <div className={styles.bannerContent}>
            {dataJson &&
              dataJson.map((item) => (
                <div className={styles.box} key={item.id}>
                  <div className={styles.iconImg}>{item.id}</div>
                  <div className={styles.itemContent}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLearningAreaComponent;
