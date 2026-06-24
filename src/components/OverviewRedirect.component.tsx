import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const OverviewRedirect: React.FC = () => {
  const { hash } = useLocation();
  const match = hash.match(/program-(\d)/);

  if (match) {
    return <Navigate to={`/programs?program=${match[1]}`} replace />;
  }

  return <Navigate to="/programs" replace />;
};

export default OverviewRedirect;
