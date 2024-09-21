import React from 'react';
import './NewsUpdates.css';

const NewsUpdates = () => (
  <section className="news-updates">
    <h2>Latest News & Updates</h2>
    <div className="news-items">
      <div className="news-item">
        <h3>New Scholarship Deadlines Announced</h3>
        <p>Check out the latest deadlines for PMSSS applications...</p>
      </div>
      <div className="news-item">
        <h3>Application Process Simplified</h3>
        <p>We’ve streamlined the application process for a smoother experience...</p>
      </div>
      <div className="news-item">
        <h3>Webinar on Scholarship Opportunities</h3>
        <p>Join our upcoming webinar to learn about scholarship opportunities...</p>
      </div>
      <div className="news-item">
        <h3>New Documents Required for 2024</h3>
        <p>Review the updated list of required documents for the 2024 applications...</p>
      </div>
      <div className="news-item">
        <h3>Success Stories from Last Year</h3>
        <p>Read inspiring stories from last year’s scholarship recipients...</p>
      </div>
    </div>
  </section>
);

export default NewsUpdates;
