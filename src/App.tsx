import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import "./App.scss";
import NotFound from "./pages/NotFound";
import ExplorePlayLearnComponent from "./components/Homepage/ExplorePlayLearn.component";
import ContactPage from "./pages/Contact.page";
import ProgramsPage from "./pages/Programs.page";
import WorkWithUsPage from "./pages/WorkWithUs.page";
import ProgramOverviewPage from "./pages/ProgramOverview.page";
import AdmissionsPage from "./pages/Admissions.page";
import ActivityHubPage from "./pages/ActivityHub.page";
const App: React.FC = () => {
  return (
    // <Router basename="/little-lantern-website"> For Deployment
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/overview" element={<ProgramOverviewPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/activity" element={<ActivityHubPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ExplorePlayLearnComponent />
      <Footer />
    </Router>
  );
};
export default App;
