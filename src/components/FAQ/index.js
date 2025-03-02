import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqItems = [
    {
      question: "What exactly is WebDPro?",
      answer: ""
    },
    {
      question: "Do I have to pay for something?",
      answer: "No. WebDPro is 100% free."
    },
    {
      question: "How to find work on WebDPro?",
      answer: ""
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-list">
            <h2 className="section-title">FAQs</h2>
            <div className="faq-items">
              {faqItems.map((item, index) => (
                <div 
                  className={`faq-item ${activeQuestion === index ? 'active' : ''}`} 
                  key={index}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3>{item.question}</h3>
                  </button>
                  {activeQuestion === index && item.answer && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="faq-highlight">
            <div className="highlight-box">
              <p className="highlight-text">No. WebDPro is 100% free.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;