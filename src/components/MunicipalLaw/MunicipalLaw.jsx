import React from 'react';
import './PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

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
    <div className="practice-area-page">
      <PageHero
        title="Municipal Law"
        subtitle="Comprehensive Legal Counsel for Local Governments"
        backgroundImage="/courthouse_img.jpg"
      />

      <div className="container practice-area-content">
        <section className="intro-section">
          <h2>Navigating Complex Legal Issues for Municipalities</h2>
          <p>
            With years of dedicated experience, Shane Hobbs Law Office has been a trusted legal partner
            for local government entities. My municipal law practice is designed to provide thorough
            and practical legal advice to public officials facing diverse governmental challenges.
          </p>
        </section>

        <section className="expertise-section">
          <h2>Municipal Law Expertise</h2>
          <p>
            I understand the critical importance of staying current with the latest federal and state
            legal developments. Through active engagement with professional municipal associations
            and regular attendance at state and local seminars, I ensure my clients receive the most up-to-date
            and comprehensive legal guidance.
          </p>
        </section>

        <section className="types-section">
          <h2>Municipalities I Serve</h2>
          <div className="items-grid">
            {municipalEntities.map((entity, index) => (
              <div key={index} className="grid-item">
                {entity}
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2>Municipal Law Services</h2>
          <div className="items-grid">
            {municipalServices.map((service, index) => (
              <div key={index} className="grid-item">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="approach-section">
          <h2>My Approach</h2>
          <p>
            Municipal leaders require sound legal advice from someone who can anticipate and address
            today's complex challenges. I provide strategic counsel that supports local officials while
            remaining fair to citizens and sensitive to community concerns. My goal is to help your
            municipality successfully serve its constituents with expert legal guidance.
          </p>
        </section>

        <div className="cta-container">
          <CtaBox
            title="Let's Discuss Your Municipal Legal Needs"
            description="Contact Shane Hobbs Law Office for comprehensive municipal legal support and guidance."
            buttonText="Request Consultation"
            buttonLink="/#contact"
          />
        </div>
      </div>
    </div>
  );
};

export default MunicipalLaw;