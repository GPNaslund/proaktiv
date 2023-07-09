'use client'

import React, { useState } from 'react';
import './serviceitemswiper.css';

type ServiceSwiperProps = {
  items: React.ReactElement[];
};

const ServiceItemSwiper: React.FC<ServiceSwiperProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (currentIndex < items.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="swiper-container">
      <div
        className="swiper-wrapper"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`swiper-slide ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
        
      </div>
      <div className="swiper-navigation">
        {currentIndex > 0 && (
          <button className="swiper-button-prev" onClick={handlePrev}>
            Previous
          </button>
        )}
        
        {currentIndex < items.length - 1 && (
          <button className="swiper-button-next" onClick={handleNext}>
            Next
          </button>
        )}
        <div className="flex justify-center items-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItemSwiper;
