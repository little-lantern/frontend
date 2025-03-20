import React from "react";
import styles from "./WorkingAt.component.module.scss";
import ClosePeople from "../../assets/images/work-with-close-up-people.png";
import ImpactfulWorkIcon from "../../assets/images/work-hand-up-icon.png";
import CollaborativeEnvironmentIcon from "../../assets/images/work-three-arrow-icon.png";
import ProfessionalGrowthIcon from "../../assets/images/work-mind-icon.png";
import SupportiveCultureIcon from "../../assets/images/work-togethor-icon.png";

const dataJson = [
  {
    id: 1,
    icon: ImpactfulWorkIcon,
    title: "Impactful Work",
    description:
      "Be part of a team that makes a real difference in the lives of young learners, fostering curiosity, creativity, and a love for learning.",
  },
  {
    id: 2,
    icon: CollaborativeEnvironmentIcon,
    title: "Collaborative Environment",
    description:
      "Work alongside a group of passionate educators and caregivers, where your ideas and contributions are valued.",
  },
  {
    id: 3,
    icon: ProfessionalGrowthIcon,
    title: "Professional Growth",
    description:
      "We are committed to the ongoing development of our team, offering training opportunities and career advancement.",
  },
  {
    id: 4,
    icon: SupportiveCultureIcon,
    title: "Supportive Culture",
    description:
      " At Little Lantern, we prioritize work-life balance and maintain a positive, supportive atmosphere where every team member feels valued and respected.",
  },
];

const WorkingAtComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          working at <br />
          little lantern
        </h2>
        <div className={styles.description}>
          Little Lantern is an equal opportunity employer. We celebrate
          diversity and are committed to creating an inclusive environment for
          all employees.
        </div>
        <div className={styles.bannerBox}>
          <div className={styles.bannerImg}>
            <img src={ClosePeople} alt="" />
          </div>
          <div className={styles.bannerContent}>
            {dataJson &&
              dataJson.map((item) => (
                <div className={styles.box} key={item.id}>
                  <div className={styles.iconImg}>
                    <img src={item.icon} alt={item.title} />
                  </div>
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

export default WorkingAtComponent;
