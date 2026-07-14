import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./VideoBanner.component.module.scss";
import brandVideo from "../../assets/images/brand_video.mp4";

const VideoBannerComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted on the DOM node: React's JSX `muted` prop is not reliably
    // reflected onto the element, and browsers block autoplay of anything not
    // provably muted (strict on live domains, lenient on localhost).
    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      const attempt = video.play();
      if (attempt !== undefined) {
        attempt.catch(() => {
          // Autoplay still blocked — resume on the first user interaction.
          const resume = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", resume);
            window.removeEventListener("click", resume);
          };
          window.addEventListener("touchstart", resume, { once: true });
          window.addEventListener("click", resume, { once: true });
        });
      }
    };

    tryPlay();
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        src={brandVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className={styles.overlay}>
        <h1 className={styles.mainTitle}>
          Every child is the hero of their own learning journey.
        </h1>
        <Link to="/apply-now" className={styles.whiteCta}>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default VideoBannerComponent;
