import React from 'react';
import './PracticeAreas.css';

const practiceAreas = [
  {
    id: 1,
    title: "Personal Injury",
    description: "Representing victims of vehicle accidents, defective products, and workplace accidents to ensure you receive fair compensation.",
    icon: "car-crash"
  },
  {
    id: 2,
    title: "Insurance Litigation",
    description: "Fighting for clients against property damage claims, negligence cases, bad-faith practices, and policy breaches.",
    icon: "file-contract"
  },
  {
    id: 3,
    title: "Business Law",
    description: "Assisting with PLCB licensing, business formation, buying/selling businesses, and other commercial legal matters.",
    icon: "briefcase"
  },
  {
    id: 4,
    title: "Criminal Defense",
    description: "Providing aggressive defense for misdemeanors, felonies, traffic infractions, and appeals.",
    icon: "balance-scale"
  },
  {
    id: 5,
    title: "Real Estate",
    description: "Handling title coverage issues, real estate closings, zoning matters, and property transactions.",
    icon: "home"
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
            <a href={`/${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;