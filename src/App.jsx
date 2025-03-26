import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Sections for routing
import Hero from './components/Hero/Hero';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AttorneyProfile from './components/AttorneyProfile/AttorneyProfile';
import Testimonials from './components/Testimonials/Testimonials';
import ContactSection from './components/ContactSection/ContactSection';
import MunicipalLaw from './components/MunicipalLaw/MunicipalLaw';

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
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/municipal-law" element={<MunicipalLaw />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;