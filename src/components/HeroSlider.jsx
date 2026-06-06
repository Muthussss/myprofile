import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider({ t, language }) {
  const slides = [
    {
      title: t[0].title,
      subtitle: t[0].subtitle,
      image: "/images/hero_banner_one.png",
      buttonText: t[0].buttonText,
      targetId: "work"
    },
    {
      title: t[1].title,
      subtitle: t[1].subtitle,
      image: "/images/hero_banner_two.png",
      buttonText: t[1].buttonText,
      targetId: "work"
    },
    {
      title: t[2].title,
      subtitle: t[2].subtitle,
      image: "/images/hero_banner_three.png",
      buttonText: t[2].buttonText,
      targetId: "contact"
    }
  ];

  const handleButtonClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <Swiper
        key={language}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content-container">
              <div className="slide-text">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="slide-button">
                  <button 
                    onClick={() => handleButtonClick(slide.targetId)}
                    className="btn btn-secondary"
                  >
                    {slide.buttonText}
                    <ArrowRight size={18} style={{ transform: language === 'ar' ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
                  </button>
                </div>
              </div>
              <div className="slide-image-wrapper">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
