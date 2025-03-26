import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
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
    if (path === '/') {
      setActiveLink('home');
      
      // Check if there's a hash in the URL to set the active link
      const hash = window.location.hash;
      if (hash) {
        const section = hash.substring(1); // Remove the # character
        if (section === 'contact' || section === 'about' || 
            section === 'practice' || section === 'testimonials') {
          setActiveLink(section);
        }
      }
    } else if (path.includes('municipal-law') || 
               path.includes('personal-injury') || 
               path.includes('insurance-litigation') || 
               path.includes('business-law') ||
               path.includes('criminal-defense') ||
               path.includes('real-estate')) {
      setActiveLink('practice');
    } else {
      setActiveLink('home');
    }
  }, [location]);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // For the page anchor links - scrolls to section on home page
  const handleAnchorClick = (sectionId) => {
    setIsDropdownOpen(false);
    
    // If already on home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <h1>Shane Hobbs Law Office</h1>
          </Link>
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
          >
            <div 
              className="practice-dropdown-trigger"
              onClick={toggleDropdown}
            >
              <span>Practice Areas</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/municipal-law"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Municipal Law
                </Link>
                <Link 
                  to="/personal-injury"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Personal Injury
                </Link>
                <Link 
                  to="/insurance-litigation"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Insurance Litigation
                </Link>
                <Link 
                  to="/business-law"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Business Law
                </Link>
                <Link 
                  to="/criminal-defense"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Criminal Defense
                </Link>
                <Link 
                  to="/real-estate"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Real Estate
                </Link>
              </div>
            )}
          </div>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              handleAnchorClick('about');
            }}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => {
              e.preventDefault();
              handleAnchorClick('testimonials');
            }}
            className={activeLink === 'testimonials' ? 'active' : ''}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleAnchorClick('contact');
            }}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;