import React from "react";
import styles from "./OurSpace.page.module.scss";
// import TopVideoComponent from "../components/OurSpacePage/TopVideo.component";
import ImageSliderComponent from "../components/OurSpacePage/ImageSlider.component";
import FeaturesComponent from "../components/OurSpacePage/Features.component";

const OurSpacePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>our Space</h1>
      <p className={styles.description}>
        Our 15,000+ sq ft Kolkata campus: 20+ interactive learning zones,
        climate-controlled classrooms, CCTV, fire safety and child-safe design.
      </p>
      {/* <TopVideoComponent /> */}
      <ImageSliderComponent />
      {/* <p className={styles.description}>
        Disclaimer: The above are 3D images and may be subject to change.
      </p> */}
      <FeaturesComponent />
    </div>
  );
};

export default OurSpacePage;
