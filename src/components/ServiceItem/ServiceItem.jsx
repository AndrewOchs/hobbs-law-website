import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item">
      <div className="service-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;