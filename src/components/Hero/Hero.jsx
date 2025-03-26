import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 34, 68, 0.8), rgba(0, 34, 68, 0.8)), url('/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h1>Shane Hobbs Law Office</h1>
        <h2>Experienced Legal Counsel You Can Trust</h2>
        <p>Providing skilled legal representation in Pennsylvania for over 15 years</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Free Consultation
          </a>
          <a href="#practice" className="btn secondary-btn">
            Our Practice Areas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;