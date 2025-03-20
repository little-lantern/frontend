import React from "react";
import styles from "./TheLanternDifference.component.module.scss";
import AbIconOne from "../../assets/images/ab-chile-icon-01.png";
import AbIconTwo from "../../assets/images/ab-chile-icon-02.png";
import AbIconThree from "../../assets/images/ab-chile-icon-03.png";
import AbIconFour from "../../assets/images/ab-chile-icon-04.png";
import AbIconFive from "../../assets/images/ab-chile-icon-05.png";
import AbIconSix from "../../assets/images/ab-chile-icon-06.png";
import AbIconSevon from "../../assets/images/ab-chile-icon-07.png";
import AbIconEight from "../../assets/images/ab-chile-icon-08.png";

const dataJson = [
  {
    id: 1,
    background: "#EDECFF",
    color: "#7771D7",
    icon: AbIconOne,
    title: "Child-Centered Learning & Holistic Development",
    content:
      "Every child is unique, and our approach supports their individuality through play-based, inquiry-driven learning. Our curriculum nurtures critical thinking, creativity, confidence, and resilience — all characterestics that ensure well-rounded growth in cognitive, emotional, physical, and social domains.",
  },
  {
    id: 2,
    background: "#E8FBFF",
    color: "#06B3DB",
    icon: AbIconTwo,
    title: "Engaging Environment & Thoughtfully Designed Spaces",
    content:
      "Our climate-controlled classrooms and 20+ mindfully designed learning zones inspire creativity, social interaction, and hands-on exploration—indoors and outdoors!",
  },
  {
    id: 3,
    background: "#FCDEEB",
    color: "#F289B7",
    icon: AbIconThree,
    title: "Safety, Hygiene & Well-Being",
    content:
      "Children’s safety is our top priority. Our child-friendly infrastructure features soft flooring, 24/7 CCTV surveillance, and strict hygiene protocols. OurChildren’s safety is our top priority. Our child-friendly infrastructure features soft flooring, 24/7 CCTV surveillance, and strict hygiene protocols. Our trained staff ensures a secure and nurturing environment for your child, giving you peace of mind.",
  },
  {
    id: 4,
    background: "#EDECFF",
    color: "#7771D7",
    icon: AbIconFour,
    title: "Strong Parent Partnership & Communication",
    content:
      "We believe in collaboration! We want parents to be actively involved in their child's learning journey and we do this through real-time updates via our app, regular reports, and engaging school events.",
  },
  {
    id: 5,
    background: "#FCDEEB",
    color: "#F289B7",
    icon: AbIconFive,
    title: "Sustainability",
    content:
      "Children forge a deep connection with our planet and make a commitment to its preservation through immersive eco-initiatives and sustainability-driven activities.",
  },
  {
    id: 6,
    background: "#FFE8DD",
    color: "#F57A3E",
    icon: AbIconSix,
    title: "Digital Literacy & Future-Ready Skills",
    content:
      "Smart boards, interactive learning tools, and early digital literacy exposure equip children with essential 21st-century skills — while still keeping hands-on learning at the core.",
  },
  {
    id: 7,
    background: "#E8FBFF",
    color: "#06B3DB",
    icon: AbIconSevon,
    title: "Life Skills & Ethical Values",
    content:
      "Beyond academics, we focus on independence, problem-solving, empathy, and social responsibility, shaping confident and compassionate young leaders of tomorrow.",
  },
  {
    id: 8,
    background: "#FFE8DD",
    color: "#F57A3E",
    icon: AbIconEight,
    title: "Prime Location & Accessibility",
    content:
      "Conveniently located in the heart of Kolkata, we offer easy access for families looking for a wholesome early learning experience.",
  },
];

const TheLanternDifferenceComponent: React.FC = () => {
  return (
    <div className={styles.container} id="difference">
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>
          THE LANTERN <br /> DIFFERENCE
        </h2>
        <div className={styles.boxWrapper}>
          {dataJson &&
            dataJson.map((item) => (
              <div
                className={styles.box}
                key={item.id}
                style={{ background: item.background }}
              >
                <div className={styles.icon}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 style={{ color: item.color }}>{item.title}</h3>
                <div
                  className={styles.content}
                  style={{ background: item.background, color: item.color }}
                >
                  {item.content}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheLanternDifferenceComponent;
