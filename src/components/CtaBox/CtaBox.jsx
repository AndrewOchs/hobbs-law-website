import React from 'react';
import './CtaBox.css';

const CtaBox = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="cta-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={buttonLink} className="cta-button">{buttonText}</a>
    </div>
  );
};

export default CtaBox;