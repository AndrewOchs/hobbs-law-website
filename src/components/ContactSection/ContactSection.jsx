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
  
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill out all required fields'
      });
      return;
    }
    
    setSubmitStatus({
      submitting: true,
      submitted: false,
      error: null
    });
    
    try {
      // Replace 'xaybzepkv' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mdkejjlv', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      // Success
      setSubmitStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseType: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Schedule a free consultation today</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Office Address</h3>
                <p>Law Office of Shane Hobbs</p>
                <p>Masonic Building</p>
                <p>4 S. 2nd St., #303</p>
                <p>Pottsville, PA 17901</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>(570) 628-2806</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>shane@shanehobbslawoffice.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48373.66047448976!2d-76.22271517541196!3d40.68598287216193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5db6dbe3d5883%3A0xa9d9e8a1eda138f3!2sPottsville%2C%20PA!5e0!3m2!1sen!2sus!4v1716661324196!5m2!1sen!2sus" 
              width="100%" 
              height="300" 
              style={{border:0, borderRadius: '8px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <h3>Request a Free Consultation</h3>
          {submitStatus.error && (
            <div className="error-message" style={{
              color: '#d32f2f',
              backgroundColor: '#ffebee',
              padding: '10px',
              borderRadius: '4px',
              marginBottom: '20px'
            }}>
              {submitStatus.error}
            </div>
          )}
          {submitStatus.submitted ? (
            <div className="success-message" style={{
              color: '#388e3c',
              backgroundColor: '#e8f5e9',
              padding: '20px',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
              <h4 style={{ marginBottom: '10px' }}>Message Sent Successfully!</h4>
              <p>Thank you for contacting us. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.submitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.submitting}
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
                  disabled={submitStatus.submitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="caseType">Case Type</label>
                <select
                  id="caseType"
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  disabled={submitStatus.submitting}
                >
                  <option value="">Select Case Type</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="insurance">Insurance Litigation</option>
                  <option value="business">Business Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Brief Description of Your Case *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  disabled={submitStatus.submitting}
                ></textarea>
              </div>
              <div className="form-group">
                <p className="confidentiality-note">
                  * All consultations are confidential and protected by attorney-client privilege.
                </p>
              </div>
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={submitStatus.submitting}
              >
                {submitStatus.submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;