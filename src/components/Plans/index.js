import React from 'react';
import './plans.css';

const Plans = () => {
  return (
    <section id="plan">
      <div className="contain">
        <h1>Choose Your Plan</h1>
        <div className="plans">
          <div className="plan">
            <h3>Starter Plan</h3>
            <p>₹3,999 - ₹6,999</p>
            <ul className="features">
              <li><i className="fas fa-check-circle"></i> Hosting & Domain</li>
              <li><i className="fas fa-check-circle"></i> 3-Page Website</li>
              <li><i className="fas fa-check-circle"></i> Monthly Maintenance</li>
            </ul>
            <a href="#" className="select-btn">Select Plan</a>
          </div>
          
          <div className="plan">
            <h3>Basic Plan</h3>
            <p>₹5,999 - ₹9,999</p>
            <ul className="features">
              <li><i className="fas fa-check-circle"></i> 5-Page Website</li>
              <li><i className="fas fa-check-circle"></i> Mobile Optimization</li>
              <li><i className="fas fa-check-circle"></i> Basic SEO</li>
              <li><i className="fas fa-check-circle"></i> Monthly Updates</li>
            </ul>
            <a href="#" className="select-btn">Select Plan</a>
          </div>
          
          <div className="plan">
            <h3>Standard Plan</h3>
            <p>₹9,999 - ₹14,999</p>
            <ul className="features">
              <li><i className="fas fa-check-circle"></i> Everything in Basic Plan</li>
              <li><i className="fas fa-check-circle"></i> WhatsApp Chat Integration</li>
              <li><i className="fas fa-check-circle"></i> Google My Business Setup</li>
              <li><i className="fas fa-check-circle"></i> Weekly Updates</li>
            </ul>
            <a href="#" className="select-btn">Select Plan</a>
          </div>
          
          <div className="plan">
            <h3>Advanced Plan</h3>
            <p>₹19,999 - ₹39,999</p>
            <ul className="features">
              <li><i className="fas fa-check-circle"></i> Everything in Standard Plan</li>
              <li><i className="fas fa-check-circle"></i> E-Commerce Integration</li>
              <li><i className="fas fa-check-circle"></i> Social Media Auto-Posting</li>
              <li><i className="fas fa-check-circle"></i> 24/7 Website Support</li>
            </ul>
            <a href="#" className="select-btn">Select Plan</a>
          </div>
        </div>
        <p className="additional-info">
          Additional Features: QR Code Integration & Menu Cards Available
        </p>
      </div>
    </section>
  );
};

export default Plans;