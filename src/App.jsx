import React from 'react';
import './App.css';
import AttorneyProfile from './components/AttorneyProfile/AttorneyProfile';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AttorneyProfile />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;