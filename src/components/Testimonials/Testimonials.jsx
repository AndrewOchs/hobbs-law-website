import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "Shane Hobbs provided exceptional representation in my case. His expertise and dedication made all the difference.",
    client: "J.D., Criminal Defense Client"
  },
  {
    id: 2,
    text: "I couldn't have asked for a better attorney to handle my divorce. Compassionate yet professional throughout the entire process.",
    client: "M.S., Family Law Client"
  },
  {
    id: 3,
    text: "After my accident, I was overwhelmed with medical bills and insurance claims. Mr. Hobbs fought for fair compensation and won.",
    client: "T.R., Personal Injury Client"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <h2>Client Testimonials</h2>
        <p>What our clients say about our services</p>
      </div>
      <div className="testimonial-slider">
        <button className="slider-arrow prev" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
          <p className="testimonial-client">{testimonials[currentTestimonial].client}</p>
        </div>
        <button className="slider-arrow next" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentTestimonial === index ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
