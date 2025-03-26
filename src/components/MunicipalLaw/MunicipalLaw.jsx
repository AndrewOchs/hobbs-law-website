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
      description: "Ongoing legal guidance for day-to-day municipal operations, including attendance at meetings, answering legal questions, and providing timely advice to officials and staff."
    },
    {
      id: 2,
      icon: "file-contract",
      title: "Ordinance Drafting & Review",
      description: "Development and review of ordinances to ensure they are legally sound, enforceable, and address the specific needs of your community while complying with state and federal laws."
    },
    {
      id: 3,
      icon: "handshake",
      title: "Contract Negotiation & Review",
      description: "Legal assistance with municipal contracts, including review of terms, negotiation with vendors and service providers, and guidance on bidding requirements and procedures."
    },
    {
      id: 4,
      icon: "balance-scale",
      title: "Litigation Representation",
      description: "Strong advocacy on behalf of municipalities in legal disputes, including defense against claims, prosecution of municipal ordinance violations, and representation in administrative proceedings."
    },
    {
      id: 5,
      icon: "map",
      title: "Land Use & Zoning",
      description: "Guidance on zoning ordinances, land development regulations, subdivision approvals, and other matters related to community planning and development."
    },
    {
      id: 6,
      icon: "users",
      title: "Employment & Labor Law",
      description: "Advice on personnel policies, employee relations, hiring and termination practices, collective bargaining, and compliance with employment laws and regulations."
    }
  ];

  const benefitItems = [
    {
      id: 1,
      icon: "lightbulb",
      title: "Practical Solutions",
      description: "We provide practical, actionable legal advice that recognizes the real-world constraints and opportunities facing local governments, helping you make informed decisions for your community."
    },
    {
      id: 2,
      icon: "comments",
      title: "Responsive Communication",
      description: "Municipal issues often require prompt attention. We prioritize accessibility and timely responses to ensure you have the legal guidance you need when you need it."
    },
    {
      id: 3,
      icon: "landmark",
      title: "Local Government Knowledge",
      description: "Our experience with municipal law provides you with insights into legal trends and best practices that can help your municipality operate efficiently while minimizing legal risks."
    },
    {
      id: 4,
      icon: "shield-alt",
      title: "Preventive Approach",
      description: "We emphasize preventive legal strategies to help municipalities avoid costly disputes and liability issues before they arise."
    },
    {
      id: 5,
      icon: "dollar-sign",
      title: "Cost-Effective Representation",
      description: "We understand budget constraints facing municipalities and strive to provide efficient, cost-effective legal services that maximize value for taxpayer dollars."
    },
    {
      id: 6,
      icon: "handshake",
      title: "Dedicated Support",
      description: "As your municipal solicitor, we're committed to building a long-term relationship based on trust, reliability, and a deep understanding of your community's specific needs and goals."
    }
  ];

  const approachSteps = [
    {
      id: 1,
      stepNumber: 1,
      title: "Understanding Your Municipality",
      description: "We begin by gaining a thorough understanding of your municipality's unique characteristics, challenges, and objectives. This foundational knowledge enables us to provide legal counsel that is tailored to your specific circumstances."
    },
    {
      id: 2,
      stepNumber: 2,
      title: "Proactive Legal Guidance",
      description: "Rather than simply reacting to problems as they arise, we work proactively to identify potential legal issues and provide guidance to prevent complications. This approach helps maintain continuity in municipal operations and minimizes legal disruptions."
    },
    {
      id: 3,
      stepNumber: 3,
      title: "Practical Solutions",
      description: "When legal challenges do arise, we focus on developing practical, implementable solutions that advance your municipality's interests while respecting legal requirements and citizen concerns."
    },
    {
      id: 4,
      stepNumber: 4,
      title: "Clear Communication",
      description: "We explain complex legal concepts in straightforward terms, ensuring that municipal officials and staff fully understand the legal implications of their actions and decisions."
    },
    {
      id: 5,
      stepNumber: 5,
      title: "Ongoing Support",
      description: "As laws and regulations evolve, we provide continuing education and updates to help you stay informed about changes that could impact your municipality's operations and compliance obligations."
    }
  ];

  const considerationItems = [
    {
      id: 1,
      title: "Sunshine Act Compliance",
      description: "Public meetings must be conducted in compliance with Pennsylvania's Sunshine Act, which requires transparency in government decision-making. We provide guidance on meeting procedures, executive sessions, and public participation requirements to ensure compliance and avoid procedural challenges."
    },
    {
      id: 2,
      title: "Right-to-Know Law",
      description: "Municipalities must respond appropriately to Right-to-Know requests while protecting sensitive information. We assist in developing efficient procedures for handling requests, determining which records are subject to disclosure, and properly responding within statutory timeframes."
    },
    {
      id: 3,
      title: "Public Bidding Requirements",
      description: "Local governments must adhere to specific procedures when contracting for goods and services. We advise on compliance with bidding and procurement laws to ensure transparent, fair processes that protect municipal interests while fulfilling legal obligations."
    },
    {
      id: 4,
      title: "Municipal Liability",
      description: "Understanding potential sources of municipal liability and implementing risk management strategies is essential. We help identify areas of exposure and develop policies and practices that reduce liability risks while maintaining effective municipal services."
    }
  ];

  return (
    <div className="municipal-law-page">
      <PageHero
        title="Municipal Law"
        subtitle="Experienced legal counsel for local governments and public entities"
        backgroundImage="/images/courthouse.jpg"
      />

      <section className="practice-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <p className="lead">
                Municipal law encompasses the complex legal framework that governs the operations of local government entities. At Shane Hobbs Law Office, we provide thorough and practical legal advice to municipalities and public officials facing a wide variety of legal and governmental issues.
              </p>
              
              <p>
                Our approach to municipal representation is designed to support local officials by offering guidance when needed, while also being fair to citizens and sensitive to their concerns. We understand the unique challenges faced by municipalities, and we're committed to helping you navigate them with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="areas-covered">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Comprehensive Municipal Legal Services</h2>
              <p>Our municipal law practice offers assistance in various aspects of local government operations, including:</p>
              
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
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Why Choose Shane Hobbs as Your Municipal Solicitor</h2>
              
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
        </div>
      </section>

      <section className="municipal-law-approach">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Our Approach to Municipal Representation</h2>
              
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
          </div>
        </div>
      </section>

      <section className="key-considerations">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Key Legal Considerations for Municipalities</h2>
              
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
          </div>
        </div>
      </section>

      <section className="client-commitment">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Our Commitment to You</h2>
              <p>
                Municipal leaders need sound legal advice from attorneys who can anticipate and address today's challenges. At Shane Hobbs Law Office, we're committed to providing the service and dedication your municipality needs to successfully serve its constituents.
              </p>
              
              <p>
                Whether you need ongoing general counsel services or assistance with a specific legal issue, we're here to provide the knowledgeable, responsive legal representation your municipality deserves.
              </p>
              
              <CtaBox
                title="Let's Discuss Your Municipality's Legal Needs"
                description="Contact Shane Hobbs Law Office today to learn how we can assist your municipality with effective, practical legal counsel that helps you achieve your community's goals."
                buttonText="Schedule a Consultation"
                buttonLink="#contact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MunicipalLaw;