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
      title: "General Counsel Services",
      description: "Comprehensive legal guidance for municipal operations, including strategic advice, meeting attendance, and timely legal consultations."
    },
    {
      id: 2,
      icon: "file-contract",
      title: "Ordinance Drafting",
      description: "Precise drafting and review of municipal ordinances to ensure legal compliance and community-specific needs."
    },
    {
      id: 3,
      icon: "handshake",
      title: "Contract Negotiations",
      description: "Expert contract review and negotiation to protect municipal interests and optimize vendor agreements."
    },
    {
      id: 4,
      icon: "balance-scale",
      title: "Litigation Support",
      description: "Robust legal representation in municipal disputes, administrative proceedings, and civil litigation."
    },
    {
      id: 5,
      icon: "map",
      title: "Land Use Planning",
      description: "Strategic guidance on zoning, land development, and community planning legal frameworks."
    },
    {
      id: 6,
      icon: "users",
      title: "Employment Law",
      description: "Comprehensive employment law counsel addressing personnel policies, labor relations, and regulatory compliance."
    }
  ];

  const benefitItems = [
    {
      id: 1,
      icon: "lightbulb",
      title: "Proactive Solutions",
      description: "Strategic legal guidance that anticipates challenges and provides actionable recommendations."
    },
    {
      id: 2,
      icon: "comments",
      title: "Clear Communication",
      description: "Transparent, timely, and accessible legal counsel tailored to municipal decision-making processes."
    },
    {
      id: 3,
      icon: "landmark",
      title: "Regulatory Expertise",
      description: "Deep understanding of local government legal landscapes and emerging municipal governance trends."
    },
    {
      id: 4,
      icon: "shield-alt",
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect municipal interests."
    },
    {
      id: 5,
      icon: "dollar-sign",
      title: "Cost-Effective Representation",
      description: "Efficient legal services designed to maximize value and minimize unnecessary expenditures."
    },
    {
      id: 6,
      icon: "handshake",
      title: "Long-Term Partnership",
      description: "Committed to building lasting relationships focused on your municipality's sustained success."
    }
  ];

  const approachSteps = [
    {
      id: 1,
      stepNumber: 1,
      title: "Comprehensive Assessment",
      description: "Conducting an in-depth analysis of your municipality's unique legal landscape, challenges, and strategic objectives."
    },
    {
      id: 2,
      stepNumber: 2,
      title: "Preventative Strategy",
      description: "Developing proactive legal frameworks to anticipate and mitigate potential issues before they escalate."
    },
    {
      id: 3,
      stepNumber: 3,
      title: "Tailored Solutions",
      description: "Crafting precise, legally sound solutions that align with your municipality's specific needs and community values."
    },
    {
      id: 4,
      stepNumber: 4,
      title: "Transparent Guidance",
      description: "Explaining complex legal concepts in clear, accessible language to empower municipal decision-makers."
    },
    {
      id: 5,
      stepNumber: 5,
      title: "Continuous Support",
      description: "Providing ongoing legal education and updates to keep your municipality ahead of evolving regulatory landscapes."
    }
  ];

  const considerationItems = [
    {
      id: 1,
      title: "Transparency Compliance",
      description: "Ensuring rigorous adherence to open meeting laws and public disclosure requirements, maintaining community trust."
    },
    {
      id: 2,
      title: "Information Management",
      description: "Strategic guidance on managing public records, balancing transparency with necessary confidentiality."
    },
    {
      id: 3,
      title: "Procurement Integrity",
      description: "Comprehensive oversight of bidding processes to guarantee fair, competitive, and legally compliant municipal contracts."
    },
    {
      id: 4,
      title: "Risk Mitigation",
      description: "Identifying and strategically addressing potential legal vulnerabilities to protect municipal resources."
    }
  ];

  return (
    <div className="municipal-law-page">
      <PageHero
        title="Municipal Law Services"
        subtitle="Strategic Legal Counsel for Local Governments"
        backgroundImage="/images/courthouse.jpg"
      />

      <section className="section practice-intro">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Comprehensive Municipal Legal Support</h2>
            <p className="section-description">
              We provide sophisticated legal guidance tailored to the unique challenges of local government, 
              combining deep regulatory expertise with strategic, forward-thinking counsel.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Specialized Municipal Services</h2>
            <p>Comprehensive legal support across critical municipal operational areas</p>
          </div>
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
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Municipal Law Practice</h2>
            <p>Delivering strategic legal solutions that empower local governance</p>
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
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Strategic Approach</h2>
            <p>A methodical process designed to provide comprehensive municipal legal support</p>
          </div>
          <div className="approach-steps">
            {approachSteps.map(step => (
              <ApproachStep
                key={step.id}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section considerations-section">
        <div className="container">
          <div className="section-header">
            <h2>Critical Legal Considerations</h2>
            <p>Key focus areas for municipal legal compliance and risk management</p>
          </div>
          <div className="considerations-content">
            {considerationItems.map(item => (
              <ConsiderationItem
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <CtaBox
            title="Enhance Your Municipal Governance"
            description="Schedule a consultation to explore how our specialized legal services can strengthen your local government's legal framework."
            buttonText="Request Consultation"
            buttonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default MunicipalLaw;