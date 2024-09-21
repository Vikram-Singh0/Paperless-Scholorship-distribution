import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(Array(10).fill(false)); // Assuming you have 10 FAQs

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {[
        "What is the Prime Minister's Special Scholarship Scheme?",
        "Who is eligible to apply for PMSSS?",
        "What documents are required for the application?",
        "How do I apply for the scholarship?",
        "What is the deadline for application?",
        "How is the scholarship amount disbursed?",
        "Can I reapply if my application is rejected?",
        "What courses are covered under PMSSS?",
        "How can I track the status of my application?",
        "Who can I contact for more information?",
      ].map((question, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{question}</h3>
            <span className="faq-toggle-icon">{openFAQ[index] ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${openFAQ[index] ? 'show' : ''}`}>
            <p>Answer to the question: {question}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
