import React from "react";
import styles from "./MeetOurTeam.component.module.scss";
import moatTeamOne from "../../assets/images/moat-team-01.png";
import moatTeamTwo from "../../assets/images/moat-team-02.png";
// import closeIcon from "../../assets/images/team-close-icon.svg";

const teamData = [
  {
    name: "Jyoti Vardhan Sonthalia",
    designation: "Chairman",
    image: moatTeamOne,
    content:
      "I am a team member's description. Here, you’ll find everything about the team member—their journey, achievements, and what makes them an essential part of the team. From past experiences in the field to key projects they’ve contributed to, this space tells their story. You'll also get a glimpse of their hobbies, passions, and what drives them every day. Stay tuned to learn more about what they bring to the table!",
    id: "1",
  },
  {
    name: "Deepa Wadhwa",
    designation: "Head of School",
    image: moatTeamTwo,
    content:
      "I am a team member's description. Here, you’ll find everything about the team member—their journey, achievements, and what makes them an essential part of the team. From past experiences in the field to key projects they’ve contributed to, this space tells their story. You'll also get a glimpse of their hobbies, passions, and what drives them every day. Stay tuned to learn more about what they bring to the table!",
    id: "2",
  },
];

const MeetOurTeamComponent: React.FC = () => {
  // const [selectedMember, setSelectedMember] = useState<
  //   null | (typeof teamData)[0]
  // >(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>OUR LEADERSHIP</h2>
      <div className={styles.wrapper}>
        <div className={styles.teamBox}>
          {teamData.map((item) => (
            <div
              key={item.id}
              className={styles.box}
              // onClick={() => setSelectedMember(item)}
            >
              <div className={styles.img}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.details}>
                <strong>{item.name}</strong>
                <span>{item.designation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {/* {selectedMember && (
          <div className={styles.popupWrapper}>
            <div className={styles.innerPopup}>
              <div
                className={styles.close}
                onClick={() => setSelectedMember(null)}
              >
                <img src={closeIcon} alt="" />
              </div>
              <div className={styles.leftBox}>
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>
              <div className={styles.rightBox}>
                <div className={styles.topBox}>
                  <strong>{selectedMember.name}</strong>
                  <span>{selectedMember.designation}</span>
                </div>
                <div className={styles.bottomBox}>
                  <p>{selectedMember.content}</p>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MeetOurTeamComponent;
