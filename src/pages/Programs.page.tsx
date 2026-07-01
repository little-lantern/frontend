import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Programs.page.module.scss";
import CustomTabs, { Tab } from "../components/ProgramsPage/Tabs.component";
import tabOneImag from "../assets/images/program-tab-01.png";
import tabTwoImag from "../assets/images/program-tab-02.png";
import tabThreeImag from "../assets/images/program-tab-03.png";
import tabFourImag from "../assets/images/program-tab-04.png";
import tabFiveImag from "../assets/images/program-tab-05.png";
import tabGraphicOne from "../assets/images/program-tabs-graphic-01.png";
import tabGraphicTwo from "../assets/images/program-tabs-graphic-02.png";
import tabGraphicThree from "../assets/images/program-tabs-graphic-03.png";
import tabGraphicFour from "../assets/images/program-tabs-graphic-04.png";
import tabGraphicFive from "../assets/images/program-tabs-graphic-05.png";
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
        "Our six-month Parent Toddler Program gives children over 12 months a gentle, sensory-rich introduction to learning alongside a parent or caregiver. Through playful activities like water play, storytime, and hands-on exploration, little ones build communication, problem-solving, and curiosity. The shared experience strengthens the parent–child bond and the sense of security that comes with it, while connecting parents to a warm, supportive community. Led by early childhood experts, it also gives parents simple tools to nurture their child's growth at home.",
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
        "The Toddler Program helps children over 18 months take their very first step into school without a parent, easing the transition from home to a social classroom. In a play-based environment, children grow in independence and confidence as they learn to navigate their day on their own. The program nurtures fine motor skills, vocabulary, and early self-expression, while guided peer interaction supports emotional regulation and social development. Together, these experiences lay the groundwork for a more structured learning journey ahead.",
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
      schedule: "Duration: 2 hours and 45 minutes, Mon - Fri, 8:30 - 11:15 am",
      description:
        "Our Playgroup Program for ages 2 to 3 offers a nurturing space where curiosity and creativity thrive, blending free play with guided learning. Children are introduced to foundational numeracy, literacy, and creativity through storytelling, art projects, and sensory play. Experienced educators design interactive exercises that build problem-solving skills and support cognitive and social growth. Structured group activities nurture teamwork, communication, and early independence, helping children explore their world with confidence and a love for learning.",
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
      schedule: "Duration: 3 hours 15 mins, Mon - Fri , 8:15 - 11:30 am",
      description:
        "Our Nursery Program for ages 3 to 4 fosters curiosity, creativity, and critical thinking by blending structured activities with child-led exploration. Children develop communication, early mathematical concepts, and problem-solving through themed learning centers, Lego, STEM, and creative arts. Outdoor play supports physical and cognitive growth, while cooperative play nurtures social-emotional skills. This child-centered approach builds the resilience and adaptability that prepare children for kindergarten.",
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
      schedule: "Duration: 3.5 hours, Mon  -Fri,  8 - 11:45 am",
      description:
        "Our Kindergarten Program for ages 4 to 5 prepares children for formal schooling through structured academics, STEM exploration, and social-emotional learning. Literacy and numeracy activities build strong foundational skills, while collaborative projects and problem-solving tasks develop logical thinking and teamwork. Digital literacy, environmental awareness, and ethical decision-making shape future-ready learners. Children gain the confidence to adapt, explore, and express themselves in a stimulating environment.",
      color: "#7771D7",
      background: "#EDECFF",
      graphic: tabGraphicFive,
    },
  },
];

const ProgramsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTabId = useMemo(() => {
    const program = Number(searchParams.get("program"));
    return program >= 1 && program <= 5 ? program : undefined;
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Programs</h1>
      <p className={styles.descriptions}>
        “A child's world is rich in experiences, making you laugh one
        <br className={styles.mobileHide} />
        moment and bringing us to joyful tears the next!”
      </p>
      <CustomTabs tabs={tabData} initialTabId={initialTabId} />
      <WhatCanYouExpectComponent />
    </div>
  );
};

export default ProgramsPage;
