import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
  
const handleOnclick = () => {
  window.scrollTo({ top: 600, behavior: 'smooth' });
}

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Empowering Futures with the Prime Minister's Special Scholarship Scheme</h1>
      <p>Your gateway to higher education and brighter opportunities.</p>
      <div className="cta-buttons">
        <button className="btn apply-now">
          <Link className='link' to={"./login"}>Apply Now</Link>
        </button>
        <button onClick={handleOnclick} className="btn learn-more">Learn More</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
