import React from "react";

import styles from "./InstagramFeed.component.module.scss";
import { Link } from "react-router-dom";
// import instaImg from "../../assets/images/insta-feed-01.png";
// import instagramIcon from "../../assets/images/instagram-icon.png";

const InstagramFeedComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Follow us on Instagram</h2>
        {/* <div className={styles.feedBox}>
          <ul>
            <li>
              <Link
                target="_blank"
                to="https://www.instagram.com/p/DIJNLmLTjZw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.instagram.com/p/DIJNGXNTNY7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.instagram.com/p/DIJL5tnT5wG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <img src={instaImg} alt="" />
              </Link>
            </li>
          </ul>
        </div> */}
        <div className={styles.btnBox}>
          <Link
            target="_blank"
            to="https://www.instagram.com/littlelantern.in?igsh=MWgzdGd6cGQ3MzZmag=="
          >
            Visit Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeedComponent;
