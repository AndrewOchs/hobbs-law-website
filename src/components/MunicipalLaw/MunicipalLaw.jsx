import React from 'react';
import './MunicipalLaw.css';
import PageHero from '../PageHero/PageHero';

const MunicipalLaw = () => {
  return (
    <div className="municipal-law-page">
      <PageHero
        title="Municipal Law"
        subtitle="Comprehensive Legal Services for Local Governments"
        backgroundImage="/images/courthouse.jpg"
      />

      <div className="container municipal-law-content">
        <section className="intro-section">
          <h2>Dedicated Municipal Legal Counsel</h2>
          <p>
            Shane Hobbs Law Office provides comprehensive legal services to municipalities, 
            offering strategic guidance and expert representation in all aspects of local government operations. 
            Our approach combines deep legal expertise with a nuanced understanding of the complex challenges 
            facing modern local governments.
          </p>
        </section>

        <section className="services-section">
          <h2>Our Municipal Law Services</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>General Counsel Services</h3>
              <p>
                Ongoing legal support for day-to-day municipal operations, 
                including attendance at meetings, legal consultations, and 
                strategic advice for local government officials.
              </p>
            </div>
            <div className="service-item">
              <h3>Ordinance Drafting & Review</h3>
              <p>
                Comprehensive drafting and review of municipal ordinances, 
                ensuring legal compliance, clarity, and alignment with 
                community needs and state regulations.
              </p>
            </div>
            <div className="service-item">
              <h3>Litigation & Dispute Resolution</h3>
              <p>
                Aggressive representation in municipal litigation, 
                administrative proceedings, and conflict resolution, 
                protecting the interests of local government entities.
              </p>
            </div>
          </div>
        </section>

        <section className="approach-section">
          <h2>Our Approach</h2>
          <p>
            We understand that each municipality has unique challenges. 
            Our legal strategy focuses on proactive counsel, practical 
            solutions, and a deep commitment to supporting local governance. 
            We work closely with municipal leaders to develop legal strategies 
            that balance regulatory compliance with community goals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MunicipalLaw;