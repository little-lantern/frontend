import React from "react";
import styles from "./ActivityHub.component.module.scss";
import hubLeftIcon from "../../assets/images/hub-top-img.png";
import hubRightIcon from "../../assets/images/hub-trangle.png";
import hubBoyimg from "../../assets/images/hub-boy-img.png";
import hubGirlImg from "../../assets/images/hub-girl-img.png";
import { Link } from "react-router-dom";

const ActivityHubComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Activity Hub</h2>
        <p className={styles.description}>
          Our Activity Hub is a vibrant evening center where children dive into
          dance, music, theatre, arts, STEM, languages, and more. With engaging,
          expert-led classes, we inspire kids to explore their interests,
          nurture talents, and discover their true passions.
        </p>

        <div className={styles.imageBox}>
          <div className={styles.leftIcon}>
            <img src={hubLeftIcon} alt="Activity Hub" />
          </div>
          <div className={styles.left}>
            <img src={hubBoyimg} alt="Activity Hub" />
          </div>
          <div className={styles.right}>
            <img src={hubGirlImg} alt="Activity Hub" />
          </div>
          <div className={styles.rightIcon}>
            <img src={hubRightIcon} alt="Activity Hub" />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Link className={styles.cta} to="/">
            View All Activities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityHubComponent;
