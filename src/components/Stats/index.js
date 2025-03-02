import React from 'react';
import './stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <h2 className="section-title">Some Numbers That Matter</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">👥</div>
              <h3 className="stat-number">200,000+</h3>
              <p className="stat-desc">Community members</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">🏛️</div>
              <h3 className="stat-number">5,500+</h3>
              <p className="stat-desc">Schools and colleges across India</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">📅</div>
              <h3 className="stat-number">1500+</h3>
              <p className="stat-desc">Free events organized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;