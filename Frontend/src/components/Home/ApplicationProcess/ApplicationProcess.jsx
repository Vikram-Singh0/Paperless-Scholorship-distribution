import React from 'react';
import './ApplicationProcess.css';

const ApplicationProcess = () => (
  <section className="application-process">
    <h2>Application Process</h2>
    <div className="timeline-chart">
      <div className="chart-step">
        <div className="chart-icon">1</div>
        <div className="chart-description">
          <h3>Registration</h3>
          <p>Sign up with your basic details.</p>
        </div>
      </div>
      <div className="chart-step">
        <div className="chart-icon">2</div>
        <div className="chart-description">
          <h3>Document Submission</h3>
          <p>Upload the required documents for verification.</p>
        </div>
      </div>
      <div className="chart-step">
        <div className="chart-icon">3</div>
        <div className="chart-description">
          <h3>Verification</h3>
          <p>Your documents will be verified by the authorities.</p>
        </div>
      </div>
      <div className="chart-step">
        <div className="chart-icon">4</div>
        <div className="chart-description">
          <h3>Approval & Disbursement</h3>
          <p>Receive your scholarship and start your educational journey!</p>
        </div>
      </div>
    </div>
  </section>
);

export default ApplicationProcess;
