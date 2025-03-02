import React from 'react';
import './whychoose.css';

const Whychoose= () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose WebDPro?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Fast Development</h3>
            <p className="feature-desc">Quick turnaround without compromising quality</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <h3 className="feature-title">Innovation</h3>
            <p className="feature-desc">Using cutting-edge technologies and approaches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;