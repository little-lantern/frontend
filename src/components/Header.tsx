import React from "react";
import styles from "./Header.module.scss";
import TopStrip from "./Topstrip";
import HeaderDesktop from "./HeaderDesktop";
import useIsMobile from "../hooks/useIsMobile";
import HeaderMobileComponent from "./HeaderMobile.component";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <TopStrip />
      {isMobile ? <HeaderMobileComponent /> : <HeaderDesktop />}
    </div>
  );
};

export default Header;
