/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./Contact.page.module.scss";
import Logo from "../assets/images/logo-blue.svg";
import useIsMobile from "../hooks/useIsMobile";

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir//Little+Lantern+-+Early+Learning+Center+170,+Harish+Mukherjee+Rd+Jatin+Das+Park,+Patuapara,+Bhowanipore+Kolkata,+West+Bengal+700026/@22.5266726,88.343569,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a0277fae8496d99:0x3728d5bc12c5ce4c!2m2!1d88.343569!2d22.5266726?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4003047215533!2d88.343569!3d22.5266726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277fae8496d99%3A0x3728d5bc12c5ce4c!2sLittle%20Lantern%20-%20Early%20Learning%20Center!5e0!3m2!1sen!2sin!4v1750643978484!5m2!1sen!2sin"
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
              <p>
                Preschool - 8910006463 <br />
                Activity Hub - 8100306462
              </p>
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
