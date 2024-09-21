import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import OverviewSection from '../../components/Home/OverviewSection/OverviewSection';
import EligibilitySection from '../../components/Home/EligibilitySection/EligibilitySection';
import ApplicationProcess from '../../components/Home/ApplicationProcess/ApplicationProcess';
import SuccessStories from '../../components/Home/SuccessStories/SuccessStories';
import NewsUpdates from '../../components/Home/NewsUpdates/NewsUpdates';
import FAQSection from '../../components/Home/FAQSection/FAQSection';
import ContactInfo from '../../components/Home/ContactInfo/ContactInfo';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <HeroSection />
      <OverviewSection />
      <EligibilitySection />
      <ApplicationProcess />
      <NewsUpdates />
      <SuccessStories />
      <FAQSection />
      <ContactInfo />
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </div>
  );
};

export default Home;
