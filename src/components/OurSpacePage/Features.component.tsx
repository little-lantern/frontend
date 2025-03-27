import React from "react";
import styles from "./Features.component.module.scss";
import spaceInteractiveLearningZonesIcon from "../../assets/images/space-Interactive-learning-zones.png";
import spaceLargeSpacesIcon from "../../assets/images/space-large-spaces.png";
import spaceAgeAppropriateFurnitureIcon from "../../assets/images/space-age-appropriate-furniture.png";
import spaceSafetyHygieneIcon from "../../assets/images/space-safety-hygiene.png";
import spaceCctvSurveillanceIcon from "../../assets/images/space-cctv-surveillance.png";
import spaceFireSafetyIcon from "../../assets/images/space-fire-safety.png";
import spaceChildFriendlyPlaygroundsIcon from "../../assets/images/space-child-friendly-playgrounds.png";
import spaceTechnologyIntegrationIcon from "../../assets/images/space-technology-integration.png";

const dataJson = [
  {
    id: 1,
    background: "#EDECFF",
    color: "#7771D7",
    icon: spaceInteractiveLearningZonesIcon,
    title: "Interactive learning zones",
    content: "Thoughtfully designed areas for creative exploration",
  },
  {
    id: 2,
    background: "#FCDEEB",
    color: "#F289B7",
    icon: spaceLargeSpacesIcon,
    title: "Large spaces",
    content:
      "Spacious and climate-controlled classrooms with ample natural light",
  },
  {
    id: 3,
    background: "#EDECFF",
    color: "#7771D7",
    icon: spaceAgeAppropriateFurnitureIcon,
    title: "Age-appropriate furniture",
    content: "Rounded edges, non-toxic materials, and ergonomic design",
  },
  {
    id: 4,
    background: "#FCDEEB",
    color: "#F289B7",
    icon: spaceSafetyHygieneIcon,
    title: "Safety and hygiene",
    content:
      "Regular sanitization, clean washrooms, and filtered drinking water.",
  },
  {
    id: 5,
    background: "#E8FBFF",
    color: "#06B3DB",
    icon: spaceCctvSurveillanceIcon,
    title: "CCTV Surveillance",
    content: "24/7 monitoring for child safety and security.",
  },
  {
    id: 6,
    background: "#FFE8DD",
    color: "#F57A3E",
    icon: spaceFireSafetyIcon,
    title: "Fire safety measures",
    content: "Sprinklers, fire extinguishers and smoke detectors",
  },
  {
    id: 7,
    background: "#E8FBFF",
    color: "#06B3DB",
    icon: spaceChildFriendlyPlaygroundsIcon,
    title: "Child-friendly playgrounds",
    content:
      "Indoor and outdoor playgrounds with Soft flooring and jungle gyms",
  },
  {
    id: 8,
    background: "#FFE8DD",
    color: "#F57A3E",
    icon: spaceTechnologyIntegrationIcon,
    title: "Technology integration",
    content: "Smart learning tools and age-appropriate digital resources",
  },
];

const FeaturesComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Features</h2>
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

export default FeaturesComponent;
