import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      caseType: '',
      message: ''
    });
    alert('Thank you for contacting us. We will get back to you shortly.');
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Schedule a free consultation today</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="icon-location"></i>
            <div>
              <h3>Office Address</h3>
              <p>123 Legal Street, Suite 100</p>
              <p>Cityville, ST 12345</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>(555) 555-5555</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-email"></i>
            <div>
              <h3>Email</h3>
              <p>contact@shanehobbslaw.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-clock"></i>
            <div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Weekends: By appointment only</p>
            </div>
          </div>
          <div className="map-container">
            {/* Google Maps would go here */}
            <div className="map-placeholder">Map Loading...</div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Request a Free Consultation</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="caseType">Case Type</label>
              <select
                id="caseType"
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                required
              >
                <option value="">Select Case Type</option>
                <option value="criminal">Criminal Defense</option>
                <option value="family">Family Law</option>
                <option value="personal-injury">Personal Injury</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Brief Description of Your Case</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <p className="confidentiality-note">
                * All consultations are confidential and protected by attorney-client privilege.
              </p>
            </div>
            <button type="submit" className="submit-btn">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;