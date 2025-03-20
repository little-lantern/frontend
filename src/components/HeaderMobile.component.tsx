import React, { useEffect, useState } from "react";
import styles from "./HeaderMobile.component.module.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/menu-bar.svg";
import arrow from "../assets/images/dropdown-arrow.svg";
const HeaderMobileComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const location = useLocation(); // Detect route changes

  const toggleSubMenu = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey], // Toggle submenu
    }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu & submenu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenMenus({});
  }, [location.pathname]); // Runs when the URL changes

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={styles.showBar} onClick={toggleMenu}>
          <img src={menuIcon} alt="logo" />
        </div>
      </div>
      <div className={`${styles.slidingMenu} ${isOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.menuLogo}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={styles.mainNav}>
          <li>
            <Link to="/about">About Us</Link>
            <span
              onClick={() => toggleSubMenu("about")}
              className={openMenus["about"] ? styles.rotateArrow : ""}
            >
              <img src={arrow} alt="Arrow" />
            </span>

            <ul
              className={`${styles.subMenu} ${
                openMenus["about"] ? styles.open : ""
              }`}
            >
              <li>
                <Link to="/about#mission">Mission & Philosophy</Link>
              </li>
              <li>
                <Link to="/about#difference">The Lantern Difference</Link>
              </li>
              <li>
                <Link to="/about#team">Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/our-space">Our Space</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
            <span
              onClick={() => toggleSubMenu("programs")}
              className={openMenus["programs"] ? styles.rotateArrow : ""}
            >
              <img src={arrow} alt="Arrow" />
            </span>
            <ul
              className={`${styles.subMenu} ${
                openMenus["programs"] ? styles.open : ""
              }`}
            >
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/overview#program-1">Parent Toddler</Link>
              </li>
              <li>
                <Link to="/overview#program-2">Toddler</Link>
              </li>
              <li>
                <Link to="/overview#program-3">Playgroup</Link>
              </li>
              <li>
                <Link to="/overview#program-4">Nursery</Link>
              </li>
              <li>
                <Link to="/overview#program-5">KG1</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
            <span
              onClick={() => toggleSubMenu("learning")}
              className={openMenus["learning"] ? styles.rotateArrow : ""}
            >
              <img src={arrow} alt="Arrow" />
            </span>
            <ul
              className={`${styles.subMenu} ${
                openMenus["learning"] ? styles.open : ""
              }`}
            >
              <li>
                <Link to="/pedagogy">Pedagogy</Link>
              </li>
              <li>
                <Link to="/curriculum">Curriculum</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admissions">Admissions</Link>
          </li>
          <li>
            <Link to="/activity">Activity hub</Link>
          </li>
        </ul>
        <Link className={styles.applyBtn} to="/">
          Apply Now
        </Link>
      </div>
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default HeaderMobileComponent;
