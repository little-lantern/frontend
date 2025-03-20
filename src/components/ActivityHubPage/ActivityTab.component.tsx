import React, { useState } from "react";
import styles from "./ActivityTab.component.module.scss";
import stepsIcon from "../../assets/images/activity-steps-icon.png";
import threeLineIcon from "../../assets/images/activity-three-line-icon.png";
import ovalIcon from "../../assets/images/activity-obel-shap.png";

export type ActivityTab = {
  id: number;
  label: string;
  content: {
    image: string;
    title: string;
    description: string;
  };
};

interface IProps {
  tabs: ActivityTab[];
}

const ActivityTabComponent: React.FC<IProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.content}>
          <div className={styles.stepsIcon}>
            <img src={stepsIcon} alt="" />
          </div>
          <div className={styles.threeLineIcon}>
            <img src={threeLineIcon} alt="" />
          </div>
          <div className={styles.ovalIcon}>
            <img src={ovalIcon} alt="" />
          </div>
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className={styles.tabPanel}>
                  <div className={styles.imgBox}>
                    <img src={tab.content.image} alt={tab.content.title} />
                  </div>
                  <div className={styles.contentBox}>
                    <h3>{tab.content.title}</h3>
                    <div className={styles.description}>
                      {tab.content.description}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityTabComponent;
