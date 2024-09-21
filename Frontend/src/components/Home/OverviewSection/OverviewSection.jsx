import React from 'react';
import './OverviewSection.css';

const OverviewSection = () => (
  <section className="overview-section">
    <h2>About PMSSS</h2>
    <p>PMSSS was launched with the objective of enhancing employment opportunities among youths of Jammu & Kashmir (J&K) and to formulate job plan involving public and private sectors. Every year fresh scholarships are given to J&K students to pursue undergraduate studies outside the State of J&K for improving their skills by providing access to education. This scheme was started in 2011 and modified from time to time to make the scheme student friendly. The goal is to educate, enable and empower the youth of J&K to compete in the world.</p>
    <div className="features">
      <div className="feature">
        <h3>Financial Assistance</h3>
        <ul>
          <li>A total of 5000 fellowships are given yearwise. For pursuing basic degree courses</li>
          <li>A fellowship of upto Rs. 30,000/- per year each is given to 2070 students while for professional courses, it is up to Rs. 1.25 Lakh per year each for 2830 students</li>
          <li>For Medical/ BDS or equivalent streams, fellowships up to Rs. 3 Lakhs each are provided for 100 students</li>
          <li>The limits of maintenance charges are Rs. 1 Lakh per annum for all.</li>
        </ul>
      </div>
      <div className="feature">
        <h3>Eligibility Criteria</h3>
        <ul>
          <li>Students having domicile of J&K State</li>
          <li>Have passed 10+2 Exam or 10+3 Diploma Exam from J&K </li>
          <li>Whose family income does not exceed Rs. 8 Lakh per annum are eligible for this scheme for pursuing higher studies outside the State of J&K.</li>
        </ul>
        
      </div>
    </div>
  </section>
);

export default OverviewSection;
