import React, { useEffect } from "react";
import styles from "./AboutPage.module.scss"; // SCSS for styling
// import TopTitleImageComponent from "../components/Aboutpage/TopTitleImage.component";
import MissionPhilosophyComponent from "../components/Aboutpage/MissionPhilosophy.component";
import TheLanternDifferenceComponent from "../components/Aboutpage/TheLanternDifference.component";
import OurFounderComponent from "../components/Aboutpage/OurFounder.component";
import { useLocation } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
// import MeetOurTeamComponent from "../components/Aboutpage/MeetOurTeam.component";

const AboutPage: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const offSetValue = isMobile ? 95 : 122;
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const yOffset = -offSetValue; // Adjust for 120px offset from the top
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          // Remove hash from URL without affecting history
          window.history.replaceState(null, "", window.location.pathname);
        }, 100);
      }
    }
  }, [location, offSetValue]);
  return (
    <div className={styles.container}>
      {/* <TopTitleImageComponent /> */}
      <MissionPhilosophyComponent />
      <TheLanternDifferenceComponent />
      <OurFounderComponent />
      {/* <MeetOurTeamComponent /> */}
    </div>
  );
};

export default AboutPage;
