import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      // If no hash and we're at the root, scroll to top
      if (location.pathname === '/') {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return null;
};

// Create placeholder components for other practice areas
const PracticePlaceholder = ({ title }) => (
  <div style={{ paddingTop: '150px', minHeight: '70vh', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
    <h1 style={{ color: '#003366', marginBottom: '20px' }}>{title}</h1>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
      This page is currently in development. Please check back soon for detailed information about our {title.toLowerCase()} services.
    </p>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
      For immediate assistance or to schedule a consultation regarding {title.toLowerCase()}, please contact our office.
    </p>
    <a 
      href="/#contact" 
      style={{ 
        padding: '12px 25px', 
        background: '#003366', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '4px',
        fontWeight: '600'
      }}
    >
      Contact Us
    </a>
  </div>
);

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
          <Route path="/personal-injury" element={<PracticePlaceholder title="Personal Injury" />} />
          <Route path="/insurance-litigation" element={<PracticePlaceholder title="Insurance Litigation" />} />
          <Route path="/business-law" element={<PracticePlaceholder title="Business Law" />} />
          <Route path="/criminal-defense" element={<PracticePlaceholder title="Criminal Defense" />} />
          <Route path="/real-estate" element={<PracticePlaceholder title="Real Estate" />} />
          {/* No separate route for contact page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;