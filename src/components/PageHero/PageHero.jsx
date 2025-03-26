import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="page-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;