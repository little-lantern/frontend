import React from "react";
import styles from "./ActivityHub.page.module.scss";
import ActivityTabComponent, {
  ActivityTab,
} from "../components/ActivityHubPage/ActivityTab.component";
import storyTelling from "../assets/images/storyTelling.jpg";
import speechDrama from "../assets/images/speechDrama.jpg";
import ballet from "../assets/images/ballet.jpg";
import vocalMusic from "../assets/images/vocalMusic.jpg";
import artCraft from "../assets/images/artCraft.jpg";
import kathak from "../assets/images/kathak.jpg";
import phonics from "../assets/images/phonics.jpg";
import languageMath from "../assets/images/languageMath.jpg";
import andManyMore from "../assets/images/andManyMore.jpg";

import useIsMobile from "../hooks/useIsMobile";
import ActivityMobileComponent from "../components/ActivityHubPage/ActivityMobile.component";
import { Link } from "react-router-dom";
const tabData: ActivityTab[] = [
  {
    id: 1,
    label: "Storytelling",
    content: {
      image: storyTelling,
      title: "Storytelling",
      description:
        "A magical mix of stories, songs, puppets, and play—our storytelling class sparks imagination, builds language, and nurtures a love for books. Perfect for little ones aged 2 to 4, each session is interactive, engaging, and full of wonder.",
    },
  },
  {
    id: 2,
    label: "Speech and Drama",
    content: {
      image: speechDrama,
      title: "Speech and Drama",
      description:
        "Our Speech & Drama class helps children build confidence, clear speech, and expressive communication through stories, role play, movement, and fun theatre games. It’s a joyful space where voices grow stronger and imaginations come alive!",
    },
  },
  {
    id: 3,
    label: "Ballet",
    content: {
      image: ballet,
      title: "Ballet",
      description:
        "A graceful introduction to classical ballet, focusing on posture, coordination, and expression through elegant movement—building discipline and joy through dance.",
    },
  },
  {
    id: 4,
    label: "Vocal Music",
    content: {
      image: vocalMusic,
      title: "Vocal Music",
      description:
        "Children explore melody, rhythm, and vocal expression through fun warm-ups, songs, and exercises—building musical confidence and ear training.",
    },
  },
  {
    id: 5,
    label: "Art & Craft",
    content: {
      image: artCraft,
      title: "Art & Craft",
      description:
        "Hands-on creative sessions where children explore colors, textures, and materials to make their own art—developing fine motor skills and creative confidence.",
    },
  },
  {
    id: 6,
    label: "Kathak",
    content: {
      image: kathak,
      title: "Kathak",
      description:
        "An engaging start to classical Indian dance, Kathak teaches rhythm, storytelling through movement, and cultural expression in an age-appropriate format.",
    },
  },
  {
    id: 7,
    label: "Phonics",
    content: {
      image: phonics,
      title: "Phonics",
      description:
        "A fun, sound-based approach to early reading that helps children connect letters with sounds, build vocabulary, and lay the foundation for literacy.",
    },
  },
  {
    id: 8,
    label: "Language & Math",
    content: {
      image: languageMath,
      title: "Language & Math",
      description:
        "Engaging, concept-based activities that build strong foundational skills in reading, writing, number sense, and problem-solving—making learning fun and meaningful.",
    },
  },
  {
    id: 9,
    label: "And Many More",
    content: {
      image: andManyMore,
      title: "And Many More",
      description:
        "Little Lantern’s Activity Hub offers a wide variety of exciting classes—ranging from weekend clubs to festival-themed workshops and seasonal specials. With new sessions added regularly, there's always something new for every curious child to explore! Contact us to know more!",
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

      {/* <p className={styles.description}>
        Details coming soon! For any queries, contact us at{" "}
        <a href="mailto:info@littlelantern.in">info@littlelantern.in</a> or{" "}
        <a href="tel:89100006463">89100006463</a>.
      </p> */}
      {!isMobile && <ActivityTabComponent tabs={tabData} />}
      {isMobile && <ActivityMobileComponent tabs={tabData} />}
      <div className={styles.btnBox}>
        <Link target="_blank" to="https://forms.gle/AapkV2Y3tMpUkeEN7">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default ActivityHubPage;
