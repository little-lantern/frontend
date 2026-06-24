import React from "react";
import styles from "./ActivityChips.component.module.scss";

const CHIP_COLORS = ["#222C5D", "#06B3DB", "#7771D7", "#F57A3E", "#F289B7"];

const ACTIVITY_CHIPS = [
  "Language & Math",
  "Storytelling",
  "Art & Craft",
  "Ballet",
  "Freestyle Dance",
  "Sensory Play",
  "Vocal Music",
  "Kathak",
  "Baby Music",
  "Abacus",
  "Math O Magic",
  "Karate",
  "Hindi",
  "Robotics",
];

const ActivityChipsComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chipRow}>
        {ACTIVITY_CHIPS.map((label, index) => (
          <span
            key={label}
            className={styles.chip}
            style={{ background: CHIP_COLORS[index % CHIP_COLORS.length] }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActivityChipsComponent;
