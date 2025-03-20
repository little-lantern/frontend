import React from "react";
import styles from "./HomePage.module.scss";
import TopBannerComponent from "../components/Homepage/TopBanner.component";
import InfoStripComponent from "../components/Homepage/InfoStrip.component";
import OurSpaceComponent from "../components/Homepage/OurSpace.component";
import OurProgramsComponents from "../components/Homepage/OurPrograms.component";
import ZoneAndAreaComponent from "../components/Homepage/ZoneAndArea.component";
import VideoEmbedComponent from "../components/Homepage/VideoEmbed.component";
import LearningsComponent from "../components/Homepage/Learnings.component";
import ActivityHubComponent from "../components/Homepage/ActivityHub.component";
import AdmissionComponent from "../components/Homepage/Admission.component";
import InstagramFeedComponent from "../components/Homepage/InstagramFeed.component";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <TopBannerComponent />
      <InfoStripComponent />
      <OurSpaceComponent />
      <OurProgramsComponents />
      <ZoneAndAreaComponent />
      <VideoEmbedComponent />
      <LearningsComponent />
      <ActivityHubComponent />
      <AdmissionComponent />
      <InstagramFeedComponent />
    </div>
  );
};

export default HomePage;
