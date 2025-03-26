import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.practice-dropdown')) {
        setIsPracticeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
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
          <div 
            className={`practice-dropdown ${activeLink === 'practice' ? 'active' : ''}`}
            onMouseEnter={() => setIsPracticeDropdownOpen(true)}
            onMouseLeave={() => setIsPracticeDropdownOpen(false)}
          >
            <span>Practice Areas</span>
            {isPracticeDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/municipal-law"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Municipal Law
                </Link>
                <Link 
                  to="/#small-business-law"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Small Business Law
                </Link>
                <Link 
                  to="/#criminal-law"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Criminal Law
                </Link>
                <Link 
                  to="/#personal-injury"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Personal Injury
                </Link>
                <Link 
                  to="/#real-estate-law"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Real Estate Law
                </Link>
                <Link 
                  to="/#homeowner's-insurance-coverage"
                  onClick={() => setIsPracticeDropdownOpen(false)}
                >
                  Homeowner's Insurance Coverage
                </Link>
              </div>
            )}
          </div>
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