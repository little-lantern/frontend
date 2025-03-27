import React from "react";
import styles from "./ActivityHub.page.module.scss";
import ActivityTabComponent, {
  ActivityTab,
} from "../components/ActivityHubPage/ActivityTab.component";
import gymnasticsImg from "../assets/images/gymnastics-img.png";
import karateImg from "../assets/images/karate-img.png";
import yogaImg from "../assets/images/yoga-img.png";
import messyPlayImg from "../assets/images/messy-place-img.png";
import potteryImg from "../assets/images/pottery-img.png";
import danceImg from "../assets/images/dance-img.png";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import ActivityMobileComponent from "../components/ActivityHubPage/ActivityMobile.component";
const tabData: ActivityTab[] = [
  {
    id: 1,
    label: "Gymnastics",
    content: {
      image: gymnasticsImg,
      title: "Gymnastics",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
  {
    id: 2,
    label: "Karate",
    content: {
      image: karateImg,
      title: "Karate",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
  {
    id: 3,
    label: "Dance",
    content: {
      image: danceImg,
      title: "Dance",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
  {
    id: 4,
    label: "Yoga",
    content: {
      image: yogaImg,
      title: "Yoga",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
  {
    id: 5,
    label: "Messy Play",
    content: {
      image: messyPlayImg,
      title: "Messy Play",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
  {
    id: 6,
    label: "Pottery",
    content: {
      image: potteryImg,
      title: "Pottery",
      description:
        "Welcome to the Activity Hub at Little Lantern! Watching children immerse themselves in their passions, uncover new skills, and nurture their curiosity is truly rewarding. Our after-school programs help boost confidence, inspire a passion for learning, and allow children to explore their interests while ",
    },
  },
];

const ActivityHubPage: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>ACTIVITY HUB</h2>
      <p className={styles.description}>
        Welcome to the Activity Hub at Little Lantern! Watching children immerse
        themselves in their passions, uncover new skills, and nurture their
        curiosity is truly rewarding. Our after-school programs help boost
        confidence, inspire a passion for learning, and allow children to
        explore their interests while developing key skills like communication
        and teamwork. Discover a variety of engaging after-school activities
        that make learning fun and enriching for kids of all ages.
      </p>
      {/* {!isMobile && <ActivityTabComponent tabs={tabData} />}
      {isMobile && <ActivityMobileComponent tabs={tabData} />}
      <div className={styles.btnBox}>
        <Link to="/contact-us">Enquire Now</Link>
      </div> */}
    </div>
  );
};

export default ActivityHubPage;
