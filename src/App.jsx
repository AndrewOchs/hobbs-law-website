import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Sections for routing
import Hero from "./components/Hero/Hero";
import PracticeAreas from "./components/PracticeAreas/PracticeAreas";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import AttorneyProfile from "./components/AttorneyProfile/AttorneyProfile";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactSection from "./components/ContactSection/ContactSection";

// Practice Area Pages
import MunicipalLaw from "./components/MunicipalLaw/MunicipalLaw";
import PersonalInjury from "./components/PersonalInjury/PersonalInjury";
import InsuranceLitigation from "./components/InsuranceLitigation/InsuranceLitigation";
import BusinessLaw from "./components/BusinessLaw/BusinessLaw";
import CriminalDefense from "./components/CriminalDefense/CriminalDefense";
import RealEstate from "./components/RealEstate/RealEstate";

// Function to handle hash navigation
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (location.hash) {
      // Get the element by id (without the #)
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Wait a bit for the DOM to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      // If no hash and we're at the root, scroll to top
      if (location.pathname === "/") {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <PracticeAreas />
    <WhyChooseUs />
    <AttorneyProfile />
    <Testimonials />
    <ContactSection />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/municipal-law" element={<MunicipalLaw />} />
          <Route path="/personal-injury" element={<PersonalInjury />} />
          <Route path="/insurance-litigation" element={<InsuranceLitigation />} />
          <Route path="/business-law" element={<BusinessLaw />} />
          <Route path="/criminal-defense" element={<CriminalDefense />} />
          <Route path="/real-estate" element={<RealEstate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;