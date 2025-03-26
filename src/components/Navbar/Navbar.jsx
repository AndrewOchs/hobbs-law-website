import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Update active link based on current route
  useEffect(() => {
    const path = location.pathname;
    switch(path) {
      case '/':
        setActiveLink('home');
        break;
      case '/municipal-law':
        setActiveLink('practice');
        break;
      case '/contact':
        setActiveLink('contact');
        break;
      default:
        setActiveLink('home');
    }
  }, [location]);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Shane Hobbs Law Office</h1>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/municipal-law" 
            className={activeLink === 'practice' ? 'active' : ''}
          >
            Practice Areas
          </Link>
          <Link 
            to="/#about" 
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            to="/#testimonials" 
            className={activeLink === 'testimonials' ? 'active' : ''}
          >
            Testimonials
          </Link>
          <Link 
            to="/contact" 
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;