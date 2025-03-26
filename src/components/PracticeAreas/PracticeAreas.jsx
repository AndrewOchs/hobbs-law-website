import React from 'react';
import './PracticeAreas.css';
import { Link } from 'react-router-dom';

const practiceAreas = [
  {
    id: 1,
    title: "Municipal Law",
    description: "Providing comprehensive legal counsel to local governments, zoning boards, and municipal authorities.",
    icon: "landmark",
    path: "/municipal-law"
  },
  {
    id: 2,
    title: "Personal Injury",
    description: "Representing victims of vehicle accidents, defective products, and workplace accidents to ensure you receive fair compensation.",
    icon: "car-crash",
    path: "/personal-injury"
  },
  {
    id: 3,
    title: "Insurance Litigation",
    description: "Fighting for clients against property damage claims, negligence cases, bad-faith practices, and policy breaches.",
    icon: "file-contract",
    path: "/insurance-litigation"
  },
  {
    id: 4,
    title: "Business Law",
    description: "Assisting with PLCB licensing, business formation, buying/selling businesses, and other commercial legal matters.",
    icon: "briefcase",
    path: "/business-law"
  },
  {
    id: 5,
    title: "Criminal Defense",
    description: "Providing aggressive defense for misdemeanors, felonies, traffic infractions, and appeals.",
    icon: "balance-scale",
    path: "/criminal-defense"
  },
  {
    id: 6,
    title: "Real Estate",
    description: "Handling title coverage issues, real estate closings, zoning matters, and property transactions.",
    icon: "home",
    path: "/real-estate"
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="practice-areas">
      <div className="section-header">
        <h2>Our Practice Areas</h2>
        <p>Specialized legal representation tailored to your specific needs</p>
      </div>
      <div className="practice-areas-grid">
        {practiceAreas.map(area => (
          <div key={area.id} className="practice-card">
            <div className="practice-icon">
              <i className={`fas fa-${area.icon}`}></i>
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <Link to={area.path} className="learn-more">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;