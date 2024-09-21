import React from 'react';
import './EligibilitySection.css';

const EligibilitySection = () => (
  <section className="eligibility-section">
    <h2>Registration Document List </h2>
    <ul>
      <li>Passport Size Photograph</li>
      <li>Applicant’s Signature</li>
      <li>Domicile certificate of J&K</li>
      <li>Category Certificate (if applicable)</li>
      <li>Aadhaar Card</li>
      <li>Class 10 marksheet</li>
      <li>Class 12 marksheet</li>
      <li>Diploma certificate (for lateral entry students only)</li>
      <li>Disability Certificate (if applicable)</li>
      <li>Family Income certificate</li>
    </ul>
    <button className="btn details-button">View Full List</button>
  </section>
);

export default EligibilitySection;
