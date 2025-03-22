import React from 'react';
import './PracticeAreas.css';

const practiceAreas = [
  {
    id: 1,
    title: "Criminal Defense",
    description: "Aggressive defense against all criminal charges, from misdemeanors to felonies.",
    icon: "scale-balance"
  },
  {
    id: 2,
    title: "Family Law",
    description: "Compassionate representation for divorce, custody, and other family matters.",
    icon: "family"
  },
  {
    id: 3,
    title: "Personal Injury",
    description: "Fighting for fair compensation for injuries caused by negligence.",
    icon: "bandage"
  }
  // Add more practice areas based on their actual services
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
              <i className={`icon-${area.icon}`}></i>
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <a href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;