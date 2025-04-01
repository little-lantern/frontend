import React from "react";
import styles from "./OurSpace.page.module.scss";
// import TopVideoComponent from "../components/OurSpacePage/TopVideo.component";
import ImageSliderComponent from "../components/OurSpacePage/ImageSlider.component";
import FeaturesComponent from "../components/OurSpacePage/Features.component";

const OurSpacePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>our Space</h2>
      <p className={styles.description}>
        At Little Lantern, we have created more than just a preschool—we've
        built a home away from home where children feel safe, inspired, and
        excited to learn. Designed by a team of international and Indian
        architects, our vibrant and thoughtfully planned environment encourages
        discovery at every turn. Our 20+ dynamic learning zones, spacious indoor
        and outdoor play areas, and interactive classrooms are designed to spark
        imagination and hands-on exploration.
      </p>
      {/* <TopVideoComponent /> */}
      <ImageSliderComponent />
      <p className={styles.description}>
        Disclaimer: The above are 3D images and may be subject to change.
      </p>
      <FeaturesComponent />
    </div>
  );
};

export default OurSpacePage;
