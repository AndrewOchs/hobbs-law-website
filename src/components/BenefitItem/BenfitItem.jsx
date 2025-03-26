import React from 'react';
import './BenefitItem.css';

const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};