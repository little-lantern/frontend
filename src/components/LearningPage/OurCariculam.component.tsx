import React from "react";
import styles from "./OurCurriculum.component.module.scss";

const dataJson = [
  {
    id: 1,
    title: "Empathy",
    color: "#fff",
    background: "#222C5D",
  },
  {
    id: 2,
    title: "Curiosity",
    color: "#fff",
    background: "#06B3DB",
  },
  {
    id: 3,
    title: "Confidence",
    color: "#fff",
    background: "#7771D7",
  },
  {
    id: 4,
    title: "Independence",
    color: "#fff",
    background: "#F57A3E",
  },
  {
    id: 5,
    title: "Creativity",
    color: "#fff",
    background: "#F289B7",
  },
  {
    id: 6,
    title: "Collaboration",
    color: "#fff",
    background: "#06B3DB",
  },
];

const OurCurriculumComponent: React.FC = () => {
  return (
    <div className={styles.container} id="curriculum">
      <h2 className={styles.mainTitle}>OUR CURRICULUM</h2>
      <p className={styles.description}>
        At Little Lantern, learning is a joyful adventure! Our curriculum
        revolves around five core learning areas, blending hands-on activities,
        outdoor exploration, and creative play. From building blocks and
        storytelling to nature walks and problem-solving, every experience
        nurtures curiosity, life skills, and essential transversal skills like
        communication, collaboration, and adaptability. With a balance of guided
        learning and free exploration, each day is filled with excitement,
        discovery, and endless possibilities!
      </p>
      <div className={styles.btnBox}>
        <ul>
          {dataJson &&
            dataJson.map((item) => (
              <li key={item.id} style={{ background: item.background }}>
                {item.title}
              </li>
            ))}
        </ul>
        <ul>
          {dataJson &&
            dataJson.map((item) => (
              <li key={item.id} style={{ background: item.background }}>
                {item.title}
              </li>
            ))}
        </ul>
        <ul>
          {dataJson &&
            dataJson.map((item) => (
              <li key={item.id} style={{ background: item.background }}>
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default OurCurriculumComponent;
