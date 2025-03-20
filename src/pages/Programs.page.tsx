import React from "react";
import styles from "./Programs.page.module.scss";
import CustomTabs, { Tab } from "../components/ProgramsPage/Tabs.component";
import tabOneImag from "../assets/images/program-tab-01.png";
import tabTwoImag from "../assets/images/program-tab-02.png";
import tabThreeImag from "../assets/images/program-tab-03.png";
import tabFourImag from "../assets/images/program-tab-04.png";
import tabFiveImag from "../assets/images/program-tab-05.png";
import tabGraphicOne from "../assets/images/program-tab-graphic-01.png";
import tabGraphicTwo from "../assets/images/program-tab-graphic-02.png";
import tabGraphicThree from "../assets/images/program-tab-graphic-03.png";
import tabGraphicFour from "../assets/images/program-tab-graphic-04.png";
import tabGraphicFive from "../assets/images/program-tab-graphic-05.png";
import WhatCanYouExpectComponent from "../components/ProgramsPage/WhatCanYouExpect.component";

const tabData: Tab[] = [
  {
    id: 1,
    color: "#7771D7",
    background: "#EDECFF",
    label: "Parent Toddler",
    content: {
      image: tabOneImag,
      title: "Parent Toddler",
      ageGroup: "Age Group: 12+ months",
      schedule: "Duration: 2 hours, Twice a week, 9 - 11 am",
      description:
        "A twice-weekly program fostering early development through play, music, and bonding activities.",
      url: "/overview#program-1",
      color: "#7771D7",
      background: "#EDECFF",
      graphic: tabGraphicOne,
    },
  },
  {
    id: 2,
    color: "#F57A3E",
    background: "#FFE8DD",
    label: "Toddler",
    content: {
      image: tabTwoImag,
      title: "Toddler",
      ageGroup: "Age Group: 18+ months",
      schedule: "Duration: 2 hours 15 mins, Mon - Fri , 8:45 - 11 am",
      description:
        "A gentle introduction to structured learning, promoting independence and confidence.",
      url: "/overview#program-2",
      color: "#F57A3E",
      background: "#FFE8DD",
      graphic: tabGraphicTwo,
    },
  },
  {
    id: 3,
    color: "#06B3DB",
    background: "#E8FBFF",
    label: "Playgroup",
    content: {
      image: tabThreeImag,
      title: "Playgroup",
      ageGroup: "Age Group: 2-3 years",
      schedule: "Duration: 2.5 hours, Mon -Fri, 8:30 - 11 am",
      description:
        "A balance of free play, guided activities, and foundational skill-building.",
      url: "/overview#program-3",
      color: "#06B3DB",
      background: "#E8FBFF",
      graphic: tabGraphicThree,
    },
  },
  {
    id: 4,
    color: "#F57A3E",
    background: "#FFE8DD",
    label: "Nursery",
    content: {
      image: tabFourImag,
      title: "Nursery",
      ageGroup: "Age Group: 3-4 years",
      schedule: "Duration: 3 hours 15 mins, Mon -Fri , 8:15 - 11:30 am",
      description:
        "A stimulating curriculum focusing on creativity, problem-solving, and early literacy.",
      url: "/overview#program-4",
      color: "#F57A3E",
      background: "#FFE8DD",
      graphic: tabGraphicFour,
    },
  },
  {
    id: 5,
    color: "#7771D7",
    background: "#EDECFF",
    label: "KG1",
    content: {
      image: tabFiveImag,
      title: "KG1",
      ageGroup: "Age Group: 4-5 years",
      schedule: "Duration: 3.5 hours, Mon -Fri,  8 - 11:30 am",
      description:
        "A dynamic kindergarten program preparing children for school success through inquiry-based learning and exploration.",
      url: "/overview#program-5",
      color: "#7771D7",
      background: "#EDECFF",
      graphic: tabGraphicFive,
    },
  },
];
const ProgramsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Our Programs</h2>
      <p className={styles.descriptions}>
        “A child's world is rich in experiences, making you laugh one
        <br className={styles.mobileHide} />
        moment and bringing us to joyful tears the next!”
      </p>
      <CustomTabs tabs={tabData} />
      <WhatCanYouExpectComponent />
    </div>
  );
};

export default ProgramsPage;
