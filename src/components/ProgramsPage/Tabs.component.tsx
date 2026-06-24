import React, { useEffect, useState } from "react";
import styles from "./Tabs.component.module.scss";

export type Tab = {
  id: number;
  label: string;
  background: string;
  color: string;
  content: {
    image: string;
    title: string;
    ageGroup: string;
    schedule: string;
    description: string;
    background: string;
    color: string;
    graphic: string;
  };
};

interface IProps {
  tabs: Tab[];
  initialTabId?: number;
}

const CustomTabs: React.FC<IProps> = ({ tabs, initialTabId }) => {
  const [activeTab, setActiveTab] = useState<number>(
    initialTabId && tabs.some((t) => t.id === initialTabId)
      ? initialTabId
      : tabs[0].id
  );

  useEffect(() => {
    if (initialTabId && tabs.some((t) => t.id === initialTabId)) {
      setActiveTab(initialTabId);
    }
  }, [initialTabId, tabs]);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              style={{ background: tab.background, color: tab.color }}
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

        <div className={styles.content}>
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div
                  key={tab.id}
                  className={styles.tabPanel}
                  style={{ background: tab.content.background }}
                >
                  <div className={styles.imgBox}>
                    <img src={tab.content.image} alt={tab.content.title} />
                  </div>
                  <div
                    className={styles.contentBox}
                    style={{ color: tab.content.color }}
                  >
                    <h3>{tab.content.title}</h3>
                    <div className={styles.schedule}>
                      {tab.content.ageGroup}
                    </div>
                    <div
                      className={styles.schedule}
                      style={{
                        borderBottom: `solid 1px ${tab.content.color || ""}`,
                      }}
                    >
                      {tab.content.schedule}
                    </div>
                    <div className={styles.description}>
                      {tab.content.description}
                    </div>
                    <div
                      className={`${styles.graphicImag} ${
                        styles[tab.label.replace(/\s+/g, "_").toLowerCase()]
                      }`}
                    >
                      <img
                        src={tab.content.graphic}
                        alt={`${tab.content.title} program illustration`}
                      />
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

export default CustomTabs;
