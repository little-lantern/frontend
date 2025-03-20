import React from "react";
import styles from "./Learnings.component.module.scss";
import { Link } from "react-router-dom";

const LearningsComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.learningBox}>
          <div className={styles.leftBox}>
            <h2 className={styles.mainTitle}>Learning</h2>
            <p className={styles.description}>
              Inspired by Finland's Educare approach, our play-based curriculum
              blends learning and care to spark curiosity, creativity, and
              confidence. Through storytelling, exploration, and hands-on
              activities, children develop essential life skills in a joyful,
              nurturing environment.
            </p>
            <Link className={styles.cta} to="/">
              Explore More
            </Link>
          </div>
          <div className={styles.rightBox}>
            <ul>
              <li className={styles.one}>
                <span>Rich World of Languages</span>
              </li>
              <li className={styles.two}>
                <span>Exploring and Interacting with My Environment</span>
              </li>
              <li className={styles.three}>
                <span>I Grow, Move, and Develop</span>
              </li>
              <li className={styles.four}>
                <span>Me and My Community</span>
              </li>
              <li className={styles.five}>
                <span>Diverse Forms of Expression & Cultural Awareness</span>
              </li>
            </ul>
          </div>
          <Link className={styles.ctaMobile} to="/">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningsComponent;
