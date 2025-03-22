import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Shane Hobbs Law Office</h1>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#practice">Practice Areas</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="contact-info">
          <a href="tel:+15555555555">(555) 555-5555</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;