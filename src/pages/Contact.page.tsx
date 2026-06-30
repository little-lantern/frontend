/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import styles from "./Contact.page.module.scss";
import Logo from "../assets/images/logo-blue.svg";
import useIsMobile from "../hooks/useIsMobile";
import useLazyLoad from "../hooks/useLazyLoad";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4003047215533!2d88.343569!3d22.5266726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277fae8496d99%3A0x3728d5bc12c5ce4c!2sLittle%20Lantern%20-%20Early%20Learning%20Center!5e0!3m2!1sen!2sin!4v1750643978484!5m2!1sen!2sin";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir//Little+Lantern+-+Early+Learning+Center+170,+Harish+Mukherjee+Rd+Jatin+Das+Park,+Patuapara,+Bhowanipore+Kolkata,+West+Bengal+700026/@22.5266726,88.343569,16z";

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [mapLoaded, setMapLoaded] = useState(false);
  const { ref: mapRef, isVisible: showMap } = useLazyLoad("300px");

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Contact us</h1>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.map} ref={mapRef}>
            {!mapLoaded && (
              <div
                className={styles.mapSkeleton}
                style={{ height: isMobile ? 350 : 580 }}
                aria-hidden="true"
              >
                <div className={styles.spinner} />
                <span>Loading map…</span>
              </div>
            )}
            {showMap && (
              <iframe
                src={MAP_EMBED_URL}
                height={isMobile ? "350" : "580"}
                style={{
                  border: "0",
                  opacity: mapLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                title="Little Lantern campus location on Google Maps"
              />
            )}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.getDirectionsBtn}
            >
              Click Here For Directions
            </a>
          </div>

          <div className={styles.addressBox}>
            <div className={styles.logo}>
              <img src={Logo} alt="Little Lantern logo" />
            </div>
            <div className={styles.address}>
              <h2>Address</h2>
              <p>
                Little Lantern - Early Learning Center <br />
                170, Harish Mukherjee Road,
                <br /> Kolkata - 700026
              </p>
              <h2>Phone</h2>
              <p>
                Preschool -{" "}
                <a href="tel:+918910006463" className={styles.contactLink}>
                  8910006463
                </a>
                <br />
                Activity Hub -{" "}
                <a href="tel:+918100306462" className={styles.contactLink}>
                  8100306462
                </a>
              </p>
              <h2>Email</h2>
              <p>
                <a
                  href="mailto:info@littlelantern.in"
                  className={styles.contactLink}
                >
                  info@littlelantern.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
