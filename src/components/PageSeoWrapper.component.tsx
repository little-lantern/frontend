import React from "react";
import { useLocation } from "react-router-dom";
import Seo from "./Seo.component";

const PageSeoWrapper: React.FC = () => {
  const { pathname } = useLocation();
  return <Seo pathname={pathname} />;
};

export default PageSeoWrapper;
