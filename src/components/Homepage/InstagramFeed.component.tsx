import React from "react";

import styles from "./InstagramFeed.component.module.scss";
import { Link } from "react-router-dom";
import instaImg from "../../assets/images/insta-feed-01.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

const InstagramFeedComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Follow us on Instagram</h2>
        <div className={styles.feedBox}>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.btnBox}>
          <Link to="/">Visit Instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeedComponent;
