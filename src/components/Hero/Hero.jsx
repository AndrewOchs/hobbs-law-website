import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Experienced Legal Counsel You Can Trust</h1>
        <p>Dedicated to protecting your rights and fighting for the justice you deserve</p>
        <div className="hero-buttons">
          <Link to="contact" smooth={true} duration={500} className="btn primary-btn">
            Free Consultation
          </Link>
          <Link to="practice" smooth={true} duration={500} className="btn secondary-btn">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
