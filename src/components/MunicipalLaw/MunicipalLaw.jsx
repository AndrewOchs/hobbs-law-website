import React from 'react';
import './MunicipalLaw.css';
import PageHero from '../PageHero/PageHero';
import ServiceItem from '../ServiceItem/ServiceItem';
import BenefitItem from '../BenefitItem/BenefitItem';
import ApproachStep from '../ApproachStep/ApproachStep';
import ConsiderationItem from '../ConsiderationItem/ConsiderationItem';
import CtaBox from '../CtaBox/CtaBox';

const MunicipalLaw = () => {
  const serviceItems = [
    {
      id: 1,
      icon: "book",
      title: "General Counsel",
      description: "Strategic legal guidance for municipal operations and decision-making."
    },
    {
      id: 2,
      icon: "file-contract",
      title: "Ordinance Drafting",
      description: "Precise legal drafting ensuring compliance and community needs."
    },
    {
      id: 3,
      icon: "handshake",
      title: "Contract Negotiations",
      description: "Expert contract review protecting municipal interests."
    },
    {
      id: 4,
      icon: "balance-scale",
      title: "Litigation Support",
      description: "Comprehensive legal representation in municipal disputes."
    },
    {
      id: 5,
      icon: "map",
      title: "Land Use Planning",
      description: "Strategic guidance on zoning and community development."
    },
    {
      id: 6,
      icon: "users",
      title: "Employment Law",
      description: "Comprehensive counsel on personnel and labor relations."
    }
  ];

  const benefitItems = [
    {
      id: 1,
      icon: "lightbulb",
      title: "Proactive Solutions",
      description: "Anticipating challenges with strategic legal insights."
    },
    {
      id: 2,
      icon: "comments",
      title: "Clear Communication",
      description: "Transparent, accessible legal guidance for municipalities."
    },
    {
      id: 3,
      icon: "landmark",
      title: "Regulatory Expertise",
      description: "Deep understanding of municipal legal landscapes."
    },
    {
      id: 4,
      icon: "shield-alt",
      title: "Risk Management",
      description: "Comprehensive strategies to protect municipal interests."
    },
    {
      id: 5,
      icon: "dollar-sign",
      title: "Cost-Effective",
      description: "Efficient services maximizing legal value."
    },
    {
      id: 6,
      icon: "handshake",
      title: "Long-Term Partnership",
      description: "Committed to your municipality's sustained success."
    }
  ];

  return (
    <div className="municipal-law-page">
      <PageHero
        title="Municipal Law Services"
        subtitle="Strategic Legal Counsel for Local Governments"
        backgroundImage="/images/courthouse.jpg"
      />

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Municipal Services</h2>
            <p>Targeted legal support for local government operations</p>
          </div>
          <div className="services-content">
            <div className="services-grid">
              {serviceItems.map(item => (
                <ServiceItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="services-image">
              <img 
                src="/images/municipal-services.jpg" 
                alt="Municipal Government Legal Services" 
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Municipal Law Practice</h2>
            <p>Delivering strategic legal solutions for local governance</p>
          </div>
          <div className="benefits-content">
            <div className="benefits-image">
              <img 
                src="/images/municipal-consultation.jpg" 
                alt="Municipal Legal Consultation" 
                className="section-image"
              />
            </div>
            <div className="benefits-grid">
              {benefitItems.map(item => (
                <BenefitItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Strategic Approach</h2>
            <p>Methodical process for comprehensive municipal legal support</p>
          </div>
          <div className="approach-content">
            <div className="approach-steps">
              <ApproachStep
                stepNumber={1}
                title="Comprehensive Assessment"
                description="In-depth analysis of your municipality's legal landscape and objectives."
              />
              <ApproachStep
                stepNumber={2}
                title="Preventative Strategy"
                description="Proactive legal frameworks to mitigate potential issues."
              />
              <ApproachStep
                stepNumber={3}
                title="Tailored Solutions"
                description="Precise legal strategies aligned with community needs."
              />
            </div>
            <div className="approach-image">
              <img 
                src="/images/legal-strategy.jpg" 
                alt="Municipal Legal Strategy" 
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <CtaBox
            title="Enhance Your Municipal Governance"
            description="Schedule a consultation to strengthen your local government's legal framework."
            buttonText="Request Consultation"
            buttonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default MunicipalLaw;