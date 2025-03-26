import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'gavel',
      title: 'Experienced & Knowledgeable',
      description: 'With over 15 years of legal experience, Shane Hobbs has successfully handled a wide range of cases with precision and expertise.'
    },
    {
      icon: 'user-friends',
      title: 'Personalized Attention',
      description: 'We take the time to understand your unique situation and develop tailored legal strategies that address your specific needs.'
    },
    {
      icon: 'shield-alt',
      title: 'Aggressive Representation',
      description: 'We fight vigorously to protect your rights and interests, whether negotiating settlements or litigating in court.'
    },
    {
      icon: 'comments',
      title: 'Clear Communication',
      description: 'You\'ll always be informed about your case progress with regular updates and explanations in plain language you can understand.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="section-header">
        <h2>Why Choose Shane Hobbs Law Office</h2>
        <p>Delivering exceptional legal representation with integrity and dedication</p>
      </div>
      
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon">
              <i className={`fas fa-${reason.icon}`}></i>
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
      
      <div className="cta-container">
        <div className="cta-content">
          <h3>EVERY CLIENT MATTERS</h3>
          <p>Let us put our expertise to work for you and help you achieve the best possible outcome for your case.</p>
          <a href="#contact" className="cta-button">Request Information</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;