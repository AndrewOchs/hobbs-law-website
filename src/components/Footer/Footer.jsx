import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Shane Hobbs Law Office</h3>
        </div>
        <div className="footer-links">
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#practice">Practice Areas</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-practice">
            <h4>Practice Areas</h4>
            <ul>
              <li><a href="#criminal-defense">Criminal Defense</a></li>
              <li><a href="#family-law">Family Law</a></li>
              <li><a href="#personal-injury">Personal Injury</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Legal Street, Suite 100, Cityville, ST 12345</p>
            <p><i className="fas fa-phone"></i> (555) 555-5555</p>
            <p><i className="fas fa-envelope"></i> contact@shanehobbslaw.com</p>
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Shane Hobbs Law Office. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;