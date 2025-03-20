import React from "react";
import styles from "./Footer.module.scss"; // Import SCSS
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import faceBookIcon from "../assets/images/facebook-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import youtubeIcon from "../assets/images/youtube-icon.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={styles.mainNav}>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-space">Our Space</Link>
            </li>
            <li>
              <Link to="/why-us">Why US</Link>
            </li>

            <li>
              <Link to="/programs">Programs</Link>
            </li>

            <li>
              <Link to="/learning">Learning</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/activity">Activity hub</Link>
            </li>
            <li>
              <Link to="/work-with-us">Work with us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className={styles.desktopHide}>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className={styles.desktopHide}>
              <Link to="/terms-of-use">Terms of Use</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.bottomBox}>
          <ul className={styles.socialShareBox}>
            <li>
              <Link to="/" target="_blank">
                <img src={faceBookIcon} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={instagramIcon} alt="instagram" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={twitterIcon} alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={youtubeIcon} alt="Youtube" />
              </Link>
            </li>
          </ul>
          <div className={styles.policies}>
            <p>
              <strong>Policies</strong>
            </p>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className={styles.policies}>
            <p>
              <strong>Address</strong>
            </p>
            <p>
              Little Lantern - Early Learning Center <br />
              170, Harish Mukherjee Road,
              <br /> Kolkata - 700026 <br />
              +91 89100 06463 <br />
              info@littlelantern.in
            </p>
          </div>
        </div>

        <div className={styles.addressBoxMobile}>
          <p>
            <strong>Address</strong>
          </p>
          <p>
            Little Lantern - Early Learning Center <br />
            170, Harish Mukherjee Road, Kolkata - 700026
            <br />
            +91 89100 06463
            <br />
            info@littlelantern.in
          </p>
        </div>

        <div className={styles.copyright}>
          <ul className={styles.socialShareBox}>
            <li>
              <Link to="/" target="_blank">
                <img src={faceBookIcon} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={instagramIcon} alt="instagram" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={twitterIcon} alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link to="/" target="_blank">
                <img src={youtubeIcon} alt="Youtube" />
              </Link>
            </li>
          </ul>
          <p>© 2025 Little Lanterns Preschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
