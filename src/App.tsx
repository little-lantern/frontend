import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home.page";
// import AboutPage from "./pages/About.page";
import "./App.scss";
// import NotFound from "./pages/NotFound";
import ExplorePlayLearnComponent from "./components/Homepage/ExplorePlayLearn.component";
// import ContactPage from "./pages/Contact.page";
// import ProgramsPage from "./pages/Programs.page";
// import WorkWithUsPage from "./pages/WorkWithUs.page";
// import ProgramOverviewPage from "./pages/ProgramOverview.page";
// import AdmissionsPage from "./pages/Admissions.page";
// import ActivityHubPage from "./pages/ActivityHub.page";
// import OurSpacePage from "./pages/OurSpace.page";
// import LearningPage from "./pages/Learning.page";
// import ApplyNowPage from "./pages/ApplyNow.page";
// import PrivacyPolicyPage from "./pages/PrivacyPolicy.page";
// import TermsOfUsePage from "./pages/TermsOfUse.page";
// import ScrollToTop from "./components/ScrollToTop.component";
// import ThankYouPage from "./pages/ThankYou.page";
// import ErrorPage from "./pages/Error.page";
const App: React.FC = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/overview" element={<ProgramOverviewPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/activity" element={<ActivityHubPage />} />
          <Route path="/our-space" element={<OurSpacePage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/apply-now" element={<ApplyNowPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <ExplorePlayLearnComponent />
      <Footer />
    </Router>
  );
};
export default App;
