import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current && 
        !triggerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            ref={dropdownRef}
            className={`practice-dropdown ${activeLink === 'practice' ? 'active' : ''}`}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div 
              ref={triggerRef}
              className="practice-dropdown-trigger"
              onClick={handleDropdownClick}
            >
              <span>Practice Areas</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            {isDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                <Link 
                  to="/municipal-law"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Municipal Law
                </Link>
                <Link 
                  to="/#criminal-defense"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Criminal Defense
                </Link>
                <Link 
                  to="/#family-law"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Family Law
                </Link>
                <Link 
                  to="/#personal-injury"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Personal Injury
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