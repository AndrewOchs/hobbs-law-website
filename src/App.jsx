import React from 'react';
import './App.css';
import AttorneyProfile from './components/AttorneyProfile';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';

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