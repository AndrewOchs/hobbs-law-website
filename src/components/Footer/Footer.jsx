import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Shane Hobbs Law Office</h3>
          <p className="tagline">EVERY CLIENT MATTERS</p>
          <p className="address">
            123 Legal Street, Suite 100<br />
            Pottsville, PA 12345
          </p>
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
              <li><a href="/personal-injury">Personal Injury</a></li>
              <li><a href="/insurance-litigation">Insurance Litigation</a></li>
              <li><a href="/business-law">Business Law</a></li>
              <li><a href="/criminal-defense">Criminal Defense</a></li>
              <li><a href="/real-estate">Real Estate</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Legal Street, Suite 100, Pottsville, PA 12345</p>
            <p><i className="fas fa-phone"></i> (570) 628-2806</p>
            <p><i className="fas fa-envelope"></i> shane@shanehobbslawoffice.com</p>
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
            <a href="#contact" className="footer-btn">Request Consultation</a>
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