import React from 'react';
import './AttorneyProfile.css';

const AttorneyProfile = () => {
  return (
    <section id="about" className="attorney-profile">
      <div className="profile-container">
        <div className="profile-image">
          {/* Replace with actual attorney image */}
          <div className="placeholder-image">Attorney Image</div>
        </div>
        <div className="profile-content">
          <h2>Shane Hobbs, Attorney at Law</h2>
          <h3>Dedicated to Fighting for Your Rights</h3>
          <p>
            With over 15 years of experience, Shane Hobbs has successfully represented
            clients in a wide range of legal matters. His commitment to justice,
            attention to detail, and aggressive representation have earned him a
            reputation as one of the most trusted attorneys in the area.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <h4>Education</h4>
              <p>J.D., University of Law School</p>
              <p>B.A., State University</p>
            </div>
            <div className="credential-item">
              <h4>Admissions</h4>
              <p>State Bar Association</p>
              <p>Federal District Court</p>
            </div>
            <div className="credential-item">
              <h4>Memberships</h4>
              <p>American Bar Association</p>
              <p>National Trial Lawyers Association</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;