import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Experienced Legal Counsel You Can Trust</h1>
        <p>Dedicated to protecting your rights and fighting for the justice you deserve</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Free Consultation
          </a>
          <a href="#practice" className="btn secondary-btn">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;