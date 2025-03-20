import React from "react";
import styles from "./ProgramListItem.component.module.scss";

export type IPrograms = {
  id: number;
  title: string;
  ageGroup: string;
  duration: string;
  content: React.ReactNode;
  image?: string;
  icon: string;
  color: string;
  background: string;
};

interface IProps {
  programsData: IPrograms[];
}

const ProgramListItemComponent: React.FC<IProps> = ({ programsData }) => {
  return (
    <>
      {programsData &&
        programsData.map((item) => (
          <div
            className={styles.container}
            id={`program-${item.id}`}
            key={item.id}
            style={{ background: item.background }}
          >
            <div className={styles.iconBox}>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className={styles.wrapper}>
              {item.image && (
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <h2 className={styles.mainTitle} style={{ color: item.color }}>
                {item.title}
              </h2>
              <div className={styles.ageGroup} style={{ color: item.color }}>
                <strong>Age Group:</strong> <span>{item.ageGroup}</span>
              </div>
              <div className={styles.duration} style={{ color: item.color }}>
                <strong>Duration:</strong> <span>{item.duration}</span>
              </div>
              <div
                className={styles.content}
                style={{
                  color: item.color,
                  borderTop: `1px solid ${item.color}`,
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProgramListItemComponent;
