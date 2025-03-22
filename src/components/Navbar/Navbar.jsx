import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
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
          <img src="/logo.png" alt="Shane Hobbs Law Office" />
          <h1>Shane Hobbs Law Office</h1>
        </div>
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="practice" smooth={true} duration={500}>Practice Areas</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
        <div className="contact-info">
          <a href="tel:+15555555555">(555) 555-5555</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;