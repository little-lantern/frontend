import React from "react";
import styles from "./ActivityHub.page.module.scss";
import ActivityChipsComponent from "../components/ActivityHubPage/ActivityChips.component";
import ActivityCarouselComponent from "../components/ActivityHubPage/ActivityCarousel.component";

const ActivityHubPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>ACTIVITY HUB</h1>
      <p className={styles.description}>
        Welcome to the Activity Hub at Little Lantern — our after-school home
        for curiosity, creativity, and play. With expert-led classes for ages 6
        months to 15 years, there's something for every child and every stage.
      </p>
      <p className={styles.description}>
        We're always adding new classes through the year, so our line-up keeps
        growing. To find out what's running right now, class timings, and how to
        enroll, just give us a call or message us on WhatsApp — we'd love to
        help you find the perfect fit for your child.
      </p>
      <p className={styles.description}>
        Interested in a class? Let's talk. Call or WhatsApp us and we'll share
        the current schedule, availability, and fees.
      </p>
      <p className={styles.contactLine}>
        Activity Hub:{" "}
        <a href="tel:+918100306462" className={styles.phoneLink}>
          8100306462
        </a>
      </p>

      <ActivityChipsComponent />
      <ActivityCarouselComponent />

      <div className={styles.btnBox}>
        <a
          href="https://forms.gle/AapkV2Y3tMpUkeEN7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Register Now
        </a>
        <a
          href="https://wa.me/918100306462"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ActivityHubPage;
