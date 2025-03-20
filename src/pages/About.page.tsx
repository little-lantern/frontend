import React, { useEffect } from "react";
import styles from "./AboutPage.module.scss"; // SCSS for styling
import TopTitleImageComponent from "../components/Aboutpage/TopTitleImage.component";
import MissionPhilosophyComponent from "../components/Aboutpage/MissionPhilosophy.component";
import TheLanternDifferenceComponent from "../components/Aboutpage/TheLanternDifference.component";
import OurFounderComponent from "../components/Aboutpage/OurFounder.component";
import { useLocation } from "react-router-dom";

const AboutPage: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <TopTitleImageComponent />
      <MissionPhilosophyComponent />
      <TheLanternDifferenceComponent />
      <OurFounderComponent />
    </div>
  );
};

export default AboutPage;
