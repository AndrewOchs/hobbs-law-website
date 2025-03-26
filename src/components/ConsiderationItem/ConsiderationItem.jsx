import React from 'react';
import './ConsiderationItem.css';

const ConsiderationItem = ({ title, description }) => {
  return (
    <div className="consideration-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ConsiderationItem;