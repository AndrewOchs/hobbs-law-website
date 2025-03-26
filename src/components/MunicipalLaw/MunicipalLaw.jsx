import React from 'react';
import './MunicipalLaw.css';
import PageHero from '../PageHero/PageHero';
import CtaBox from '../CtaBox/CtaBox';

const MunicipalLaw = () => {
  const municipalEntities = [
    'Authorities', 
    'Boroughs', 
    'Townships', 
    'Zoning Hearing Boards'
  ];

  const municipalServices = [
    'Advising in right-to-know law requests',
    'Budget issues consultation',
    'Arbitrations and contract negotiations',
    'Drafting ordinances and resolutions',
    'Land use and zoning issues',
    'Personnel matters',
    'Sunshine Act compliance',
    'Property acquisition strategies',
    'Public meeting representation',
    'Eminent Domain',
    'Municipal collections',
    'Codes enforcement'
  ];

  return (
    <div className="municipal-law-page">
      <PageHero
        title="Municipal Law"
        subtitle="Comprehensive Legal Counsel for Local Governments"
        backgroundImage="/images/courthouse_img.jpg"
      />

      <div className="container municipal-law-content">
        <section className="intro-section">
          <h2>Navigating Complex Legal Issues for Municipalities</h2>
          <p>
            With years of dedicated experience, Shane Hobbs Law Office has been a trusted legal partner 
            for local government entities. Our municipal law practice is designed to provide thorough 
            and practical legal advice to public officials facing diverse governmental challenges.
          </p>
        </section>

        <section className="expertise-section">
          <h2>Our Municipal Law Expertise</h2>
          <p>
            We understand the critical importance of staying current with the latest federal and state 
            legal developments. Our attorneys are actively engaged with professional municipal associations 
            and regularly attend state and local seminars to ensure our clients receive the most up-to-date 
            and comprehensive legal guidance.
          </p>
        </section>

        <section className="entities-section">
          <h2>Municipalities We Serve</h2>
          <div className="entities-grid">
            {municipalEntities.map((entity, index) => (
              <div key={index} className="entity-item">
                {entity}
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2>Municipal Law Services</h2>
          <div className="services-grid">
            {municipalServices.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="approach-section">
          <h2>Our Approach</h2>
          <p>
            Municipal leaders require sound legal advice from attorneys who can anticipate and address 
            today's complex challenges. We provide strategic counsel that supports local officials while 
            remaining fair to citizens and sensitive to community concerns. Our goal is to help your 
            municipality successfully serve its constituents with expert legal guidance.
          </p>
        </section>

        <div className="cta-container">
          <CtaBox
            title="Let's Discuss Your Municipal Legal Needs"
            description="Contact Shane Hobbs Law Office for comprehensive municipal legal support and guidance."
            buttonText="Request Consultation"
            buttonLink="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default MunicipalLaw;