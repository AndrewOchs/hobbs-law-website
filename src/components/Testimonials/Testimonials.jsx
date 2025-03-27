import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "I have worked with Shane on several matters, he is constantly working and constantly on the go for his clients. You are in good hands with Mr. Hobbs.",
    client: "Tim Brennan",
    rating: 5
  },
  {
    id: 2,
    text: "I gave him my husband‘s case and it was very hard but he nicely handed it. He’s service was excellent! Whenever I try talking to him he always replied nicely. He finished the case in a very short time! He is a very nice lawyer! I recommend him as a lawyer you can trust with your case!",
    client: "Mital Patel",
    rating: 5
  },
  {
    id: 3,
    text: "Has helped me in numerous pickles. Knows his stuff and hasn’t forgotten that not everyone can afford spending thousands of dollars for legal help. Great guy inside and out. I recommend him to anyone looking for legal help.",
    client: "Ninja l, Local Guide",
    rating: 5
  },
  {
    id: 4,
    text: "Great communication, highly recommend",
    client: "The Konrad Group",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setAutoplay(false);
    setCurrentTestimonial(index);
  };
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i < rating ? 'filled' : ''}`}
        ></i>
      );
    }
    return stars;
  };
  
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <h2>Client Testimonials</h2>
        <p>What our clients say about our legal services</p>
      </div>
      
      <div className="testimonial-container">
        <button 
          className="slider-arrow prev" 
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="testimonial-wrapper">
          <div 
            className="testimonial-slider" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-mark">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-client">{testimonial.client}</p>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="slider-arrow next" 
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`dot ${currentTestimonial === index ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;