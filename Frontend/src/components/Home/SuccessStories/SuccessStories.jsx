import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './SuccessStories.css';

import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';

const SuccessStories = () => {
  const stories = [
    {
      quote: "Thanks to PMSSS, I was able to pursue my dream of becoming an engineer. The financial support was crucial in my journey.",
      name: "User1",
    },
    {
      quote: "With the help of PMSSS, I completed my studies in medical science. It made a significant difference in my career.",
      name: "User2",
    },
    {
      quote: "The scholarship opened doors for me to study abroad. I am grateful for the support and opportunities provided.",
      name: "User3",
    },
    {
      quote: "PMSSS helped me cover my educational expenses and focus on my studies without financial worries.",
      name: "User4",
    },
    {
      quote: "I was able to achieve my dream of becoming a software developer with the support of the PMSSS scholarship.",
      name: "User5",
    },
  ];

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={{ releaseOnEdges: true }}
        modules={[Navigation, Pagination, Mousewheel]}
        className="swiper-container"
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index} className="story-slide">
            <div className="story-card">
              <p className="story-quote">"{story.quote}"</p>
              <h4 className="story-name">- {story.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStories;
