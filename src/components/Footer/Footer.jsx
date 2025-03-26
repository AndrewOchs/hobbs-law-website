import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Check if we're on home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Shane Hobbs Law Office</h3>
          <p className="tagline">EVERY CLIENT MATTERS</p>
        </div>
        <div className="footer-links">
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#practice" onClick={(e) => scrollToSection(e, 'practice')}>Practice Areas</a></li>
              <li><a href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="/#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a></li>
              <li><a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-practice">
            <h4>Practice Areas</h4>
            <ul>
              <li><Link to="/municipal-law">Municipal Law</Link></li>
              <li><Link to="/personal-injury">Personal Injury</Link></li>
              <li><Link to="/insurance-litigation">Insurance Litigation</Link></li>
              <li><Link to="/business-law">Business Law</Link></li>
              <li><Link to="/criminal-defense">Criminal Defense</Link></li>
              <li><Link to="/real-estate">Real Estate</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p><i className="fas fa-map-marker-alt"></i>Masonic Building, 4 S. 2nd St. #303, Pottsville, PA 17901</p>
            <p><i className="fas fa-phone"></i> (570) 628-2806 </p>
            <p><i className="fas fa-envelope"></i> info@shanehobbslawoffice.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="cta-button">
            <a href="/#contact" 
               onClick={(e) => scrollToSection(e, 'contact')} 
               className="footer-btn">
              Request Consultation
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Shane Hobbs Law Office. All Rights Reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;