import React from 'react';
import { useLocation } from 'react-router-dom';
import './CtaBox.css';

const CtaBox = ({ title, description, buttonText, buttonLink }) => {
  const location = useLocation();

  const handleClick = (e) => {
    // If it's an anchor link to a section on the home page
    if (buttonLink.startsWith('/#')) {
      e.preventDefault();
      
      // If we're on home page
      if (location.pathname === '/') {
        const sectionId = buttonLink.substring(2); // Remove the '/#'
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home page with section hash
        window.location.href = buttonLink;
      }
    }
    // For other links, allow default behavior
  };

  return (
    <div className="cta-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <a 
        href={buttonLink} 
        className="cta-button"
        onClick={handleClick}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CtaBox;