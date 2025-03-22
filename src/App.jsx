import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Placeholder Navbar */}
      <nav className="navbar">
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

      {/* Placeholder Hero */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Experienced Legal Counsel You Can Trust</h1>
          <p>Dedicated to protecting your rights and fighting for the justice you deserve</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Free Consultation</a>
            <a href="#practice" className="btn secondary-btn">Our Services</a>
          </div>
        </div>
      </section>

      {/* Placeholder Practice Areas */}
      <section id="practice" className="practice-areas">
        <div className="section-header">
          <h2>Our Practice Areas</h2>
          <p>Specialized legal representation tailored to your specific needs</p>
        </div>
        <div className="practice-areas-grid">
          {/* Practice area cards would go here */}
          <div className="practice-card">
            <div className="practice-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Criminal Defense</h3>
            <p>Aggressive defense against all criminal charges, from misdemeanors to felonies.</p>
            <a href="#criminal-defense" className="learn-more">Learn More</a>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Family Law</h3>
            <p>Compassionate representation for divorce, custody, and other family matters.</p>
            <a href="#family-law" className="learn-more">Learn More</a>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="fas fa-first-aid"></i>
            </div>
            <h3>Personal Injury</h3>
            <p>Fighting for fair compensation for injuries caused by negligence.</p>
            <a href="#personal-injury" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>

      {/* Placeholder for attorney profile, testimonials, and contact sections */}
      <section id="about" className="attorney-profile">
        <div className="section-header">
          <h2>About Shane Hobbs</h2>
          <p>Dedicated attorney with over 15 years of experience</p>
        </div>
        <p style={{ textAlign: 'center', padding: '0 20px' }}>
          Full attorney profile coming soon.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Shane Hobbs Law Office. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;