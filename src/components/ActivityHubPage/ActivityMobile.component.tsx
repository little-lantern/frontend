import React from "react";
import styles from "./ActivityMobile.component.module.scss";

export type ActivityData = {
  id: number;
  label: string;
  content: {
    image: string;
    title: string;
    description: string;
  };
};

interface IProps {
  tabs: ActivityData[];
}

const ActivityMobileComponent: React.FC<IProps> = ({ tabs }) => {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <div className={styles.boxes} key={tab.id}>
          <div className={styles.imageBox}>
            <img src={tab.content.image} alt={tab.content.title} />
          </div>
          <div className={styles.description}>
            <h3>{tab.content.title}</h3>
            <p>{tab.content.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityMobileComponent;
