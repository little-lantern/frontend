import React from "react";
import styles from "./TypicalDayMobile.component.module.scss";

const scheduleData = [
  {
    id: "1",
    title: "Arrival & Free Play",
    description:
      "Children settle in, engage in self-directed play, and connect with friends in a welcoming environment.",
  },
  {
    id: "2",
    title: "Circle Time",
    description:
      "A joyful gathering for songs, stories, and discussions that build a sense of community and belonging.",
  },
  {
    id: "3",
    title: "Exploring Time",
    description:
      "Hands-on thematic provocations, learning stations, and small group activities that spark curiosity and creativity.",
  },
  {
    id: "4",
    title: "Snack Time",
    description:
      "A mindful break to nourish the body, encourage independence, and enjoy social interactions.",
  },
  {
    id: "5",
    title: "Learning Time",
    description:
      "Guided activities in language, math, STEM, and the arts, designed to develop key skills and a love for learning.",
  },
  {
    id: "6",
    title: "Reflection & Goodbye",
    description:
      "A moment to share experiences, celebrate achievements, and transition home with a sense of accomplishment.",
  },
];

const TypicalDayMobileComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>A Typical Day at Little Lantern</h2>
      <div className={styles.scheduleWrapper}>
        {/* Top Row */}
        <div className={styles.topRow}>
          {scheduleData
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <div key={item.id} className={styles.scheduleItem}>
                <h4>{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>

        {/* Middle Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          {scheduleData
            .filter((_, index) => index % 2 !== 0)
            .map((item) => (
              <div key={item.id} className={styles.scheduleItem}>
                <h4>{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TypicalDayMobileComponent;
