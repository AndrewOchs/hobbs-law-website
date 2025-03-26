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
            With over 15 years of experience, Shane Hobbs has successfully represented
            clients in a wide range of legal matters throughout Pennsylvania. His commitment to justice,
            attention to detail, and aggressive representation have earned him a
            reputation as one of the most trusted attorneys in Pottsville and the surrounding areas.
          </p>
          <p>
            Shane understands that every client's situation is unique, which is why he provides
            personalized attention to each case. Whether you're dealing with a personal injury claim,
            criminal charges, or business matters, you can count on Shane's expertise and dedication.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <h4>Recognition</h4>
              <p>Selected to Rising Stars (2019-2022)</p>
              <p>Top Civil Litigation Attorney</p>
            </div>
            <div className="credential-item">
              <h4>Education</h4>
              <p>J.D., Law School</p>
              <p>B.A., University</p>
            </div>
            <div className="credential-item">
              <h4>Memberships</h4>
              <p>Pennsylvania Bar Association</p>
              <p>American Bar Association</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;