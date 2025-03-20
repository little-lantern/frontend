import React, { useEffect } from "react";
import styles from "./ProgramOverview.page.module.scss";
import HeroImg from "../assets/images/overview-hero-image.png";
import OverviewOne from "../assets/images/overview-01.png";
import OverviewTwo from "../assets/images/overview-02.png";
import OverviewThree from "../assets/images/overview-03.png";
import OverviewFour from "../assets/images/overview-04.png";
import KGIcon from "../assets/images/program-kg-icon.png";
import NurseryIcon from "../assets/images/program-nursery-icon.png";
import PlaygroupIcon from "../assets/images/program-playgroup-icon.png";
import ToddlerIcon from "../assets/images/program-toddler-icon.png";
import ParentToddlerIcon from "../assets/images/program-parent-toddler-icon.png";
import { useLocation } from "react-router-dom";
import ProgramListItemComponent, {
  IPrograms,
} from "../components/ProgramListItem.component";

const programsData: IPrograms[] = [
  {
    id: 1,
    title: "Parent Toddler",
    ageGroup: "12+ months",
    duration: "2 hours, Twice a week, 9 - 11 am",
    content: (
      <>
        <p>
          Our 6-month Parent Toddler Program is designed for children over{" "}
          <strong>12 months</strong>, running{" "}
          <strong>twice a week for 2 hours</strong>. It offers a stimulating
          environment that propels early development through sensory-rich
          experiences and guided activities. The program strengthens
          parent-child bonding, building security and confidence in young
          learners while offering parents a chance to connect with a supportive
          community at the same time.
        </p>
        <p>
          Led by early childhood experts, the program introduces essential
          learning concepts through playful activities like water play,
          storytime, and hands-on exploration. These activities promote
          communication, problem-solving, and curiosity, giving parents the
          tools to actively support their child's growth at home.
        </p>
      </>
    ),
    icon: ParentToddlerIcon,
    color: "#7771D7",
    background: "#EDECFF",
  },
  {
    id: 2,
    title: "Toddler",
    ageGroup: "18+ months",
    duration: "2 hours 15 mins, Mon - Fri , 8:45 - 11 am",
    content: (
      <>
        <p>
          The Toddler Program, for children over <strong>18 months</strong>,
          meets <strong>Monday to Friday for 2 hours and 15 minutes</strong> and
          helps children take their first step into school without parents. It
          fosters independence and child-led exploration in a play-based
          environment, easing the transition from home to a social classroom.
          Activities like hands-on exploration, storytelling, and group games
          sow the seeds of self-confidence, language skills, and motor
          coordination. The program emphasizes emotional regulation and social
          development through guided play and peer interaction. With activities
          such as building blocks and role-playing, toddlers develop life skills
          that prepare them for a more structured learning journey.
        </p>
      </>
    ),
    image: OverviewOne,
    icon: ToddlerIcon,
    color: "#F57A3E",
    background: "#FFE8DD",
  },
  {
    id: 3,
    title: "Playgroup",
    ageGroup: "2-3 years",
    duration: "2.5 hours, Mon -Fri, 8:30 - 11 am",
    content: (
      <>
        <p>
          Our Playgroup Program for children aged <strong>2 to 3 years</strong>{" "}
          runs <strong>Monday to Friday for 2.5 hours each day</strong>,
          offering a nurturing environment where curiosity and creativity
          thrive. The program blends free play with guided learning, introducing
          foundational numeracy, literacy, and creativity via activities like
          storytelling, art projects, and sensory play. Experienced educators
          design interactive excercises that spur problem-solving skills and
          promote cognitive and social growth. Structured group activities build
          social-emotional intelligence, helping children develop teamwork,
          communication, and early independence. This program empowers children
          to explore their environment with confidence, curiosity, and a love
          for learning that comes from within.
        </p>
      </>
    ),
    image: OverviewTwo,
    icon: PlaygroupIcon,
    color: "#06B3DB",
    background: "#E8FBFF",
  },
  {
    id: 4,
    title: "Nursery",
    ageGroup: "3-4 years",
    duration: "3 hours 15 mins, Mon -Fri , 8:15 - 11:30 am",
    content: (
      <>
        <p>
          Our Nursery Program for children aged <strong>3 to 4 years</strong>,
          running{" "}
          <strong>Monday to Friday for 3 hours and 15 mins each day</strong>,
          fosters curiosity, creativity, and critical thinking in a supportive
          environment. The program blends structured activities with child-led
          exploration, encouraging a love for learning through play. Children
          develop communication skills, mathematical concepts, and
          problem-solving abilities through engaged experiences in themed
          learning centers, Lego, STEM, and creative arts. Outdoor play supports
          physical and cognitive growth while social-emotional skills are
          nurtured through cooperative play. A child-centered approach forms the
          basis of a love for exploration, which, in turn, ensures resilience
          and adaptability in preparation for kindergarten.
        </p>
      </>
    ),
    image: OverviewThree,
    icon: NurseryIcon,
    color: "#F57A3E",
    background: "#FFE8DD",
  },
  {
    id: 5,
    title: "KG 1",
    ageGroup: "4-5 years",
    duration: "3.5 hours, Mon -Fri,  8 - 11:30 am",
    content: (
      <>
        <p>
          Our Kindergarten Program for children aged{" "}
          <strong>4 to 5 years</strong>, running
          <strong>Monday to Friday for 3.5 hours</strong>, prepares children for
          formal schooling through structured academics, STEM exploration, and
          social-emotional learning. Literacy and numeracy activities build
          strong foundational skills. Collaborative projects and problem-solving
          tasks take logical thinking and teamwork to the next level.. Our
          curriculum develops future-ready learners by incorporating digital
          literacy, environmental awareness, and ethical decision-making.
          Children gain confidence while learning to adapt, explore, and express
          themselves in a stimulating environment.
        </p>
      </>
    ),
    image: OverviewFour,
    icon: KGIcon,
    color: "#7771D7",
    background: "#EDECFF",
  },
];

const ProgramOverviewPage: React.FC = () => {
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
      <div className={styles.heroImg}>
        <img src={HeroImg} alt="" />
      </div>

      <ProgramListItemComponent programsData={programsData} />
    </div>
  );
};

export default ProgramOverviewPage;
