/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./Contact.page.module.scss";
import Logo from "../assets/images/logo-blue.svg";
import useIsMobile from "../hooks/useIsMobile";

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir//170,+Harish+Mukherjee+Rd,+Jatin+Das+Park,+Patuapara,+Bhowanipore,+Kolkata,+West+Bengal+700025/@22.5272484,88.3408398,17z/data=!4m18!1m8!3m7!1s0x3a027737fd4f41c7:0x353b068109cd8b85!2s170,+Harish+Mukherjee+Rd,+Jatin+Das+Park,+Patuapara,+Bhowanipore,+Kolkata,+West+Bengal+700025!3b1!8m2!3d22.5272484!4d88.3434147!16s%2Fg%2F11wbkpj1yv!4m8!1m0!1m5!1m1!1s0x3a027737fd4f41c7:0x353b068109cd8b85!2m2!1d88.3434147!2d22.5272484!3e9?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Contact us</h2>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3849451333085!2d88.3385437867058!3d22.527248326728365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027737fd4f41c7%3A0x353b068109cd8b85!2s170%2C%20Harish%20Mukherjee%20Rd%2C%20Jatin%20Das%20Park%2C%20Patuapara%2C%20Bhowanipore%2C%20Kolkata%2C%20West%20Bengal%20700025!5e0!3m2!1sen!2sin!4v1742131009503!5m2!1sen!2sin"
              height={isMobile ? "350" : "580"}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              onClick={handleGetDirections}
              className={styles.getDirectionsBtn}
            >
              Cilck Here For Directions
            </button>
          </div>

          <div className={styles.addressBox}>
            <div className={styles.logo}>
              <img src={Logo} alt="" />
            </div>
            <div className={styles.address}>
              <h3>Address</h3>
              <p>
                Little Lantern - Early Learning Center <br />
                170, Harish Mukherjee Road,
                <br /> Kolkata - 700026
              </p>
              <h3>Phone</h3>
              <p>+91 89100 06463</p>
              <h3>Email</h3>
              <p>info@littlelantern.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
