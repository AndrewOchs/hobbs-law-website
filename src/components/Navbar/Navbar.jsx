import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Optional: update active link based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (id) => {
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Shane Hobbs Law Office</h1>
        </div>
        <div className="nav-links">
          <a 
            href="#home" 
            className={activeLink === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
          >
            Home
          </a>
          <a 
            href="#practice" 
            className={activeLink === 'practice' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('practice');
            }}
          >
            Practice Areas
          </a>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className={activeLink === 'testimonials' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('testimonials');
            }}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
          >
            Contact
          </a>
        </div>
        <div className="contact-info">
          <a href="tel:+15555555555">(555) 555-5555</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;