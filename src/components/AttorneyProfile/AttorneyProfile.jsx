import React from 'react';
import './AttorneyProfile.css';

const AttorneyProfile = () => {
  return (
    <section id="about" className="attorney-profile">
      <div className="profile-container">
        <div className="profile-image">
          <img src="/attorney_img.jpg" alt="Attorney Shane Hobbs" />
        </div>
        <div className="profile-content">
          <h2>Shane Hobbs, Attorney at Law</h2>
          <h3>Dedicated to Fighting for Your Rights</h3>
          <p>
            Shane H. Hobbs is a third-generation Pennsylvania attorney with deep roots in Pottsville. 
            A graduate of Pottsville Area High School and Ursinus College, Shane earned his Juris Doctorate 
            in 2010 from Western Michigan University – Cooley Law School. He continues the legacy of legal 
            excellence established by his father, the late state Senator Frederick H. Hobbs, and his 
            grandfather, the late Superior Court President Judge G. Harold Watkins.
          </p>
          <p>
            With a focus on general civil litigation, insurance coverage, business law, real estate, and 
            municipal law, Shane provides dedicated representation to clients throughout Schuylkill County. 
            His commitment to excellence and client service has earned him recognition as a Top Attorney in 
            Pennsylvania (2019-2022) as published by Philadelphia Magazine.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <h4>Recognition</h4>
              <p>Selected to Rising Stars (2019-2022)</p>
              <p>Top Rated Civil Litigation Attorney</p>
            </div>
            <div className="credential-item">
              <h4>Community Service</h4>
              <p>Solicitor for multiple local municipalities</p>
              <p>Pro bono work for non-profit entities</p>
            </div>
            <div className="credential-item">
              <h4>Practice Areas</h4>
              <p>Civil Litigation, Insurance Coverage</p>
              <p>Business Law, Real Estate, Municipal Law</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;