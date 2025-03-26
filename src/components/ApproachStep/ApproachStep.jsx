import React from 'react';
import './ApproachStep.css';

const ApproachStep = ({ stepNumber, title, description }) => {
  return (
    <div className="approach-step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ApproachStep;