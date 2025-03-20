import React from "react";
import styles from "./VideoEmbed.component.module.scss";
import bgImage from "../../assets/images/video-bg-full-01.png";

const VideoEmbedComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={bgImage} alt="bg" />
    </div>
  );
};

export default VideoEmbedComponent;
