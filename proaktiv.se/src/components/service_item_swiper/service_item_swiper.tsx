"use client";

import React, { useState, useRef, useEffect } from "react";
import "./serviceitemswiper.css";

type ServiceSwiperProps = {
  items: React.ReactElement[];
};

const ServiceItemSwiper: React.FC<ServiceSwiperProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragData = useRef<{ startX: number; currentX: number } | null>(null);

  useEffect(() => {
    const handleLinkClick = (event: CustomEvent<{ index: number }>) => {
      setCurrentIndex(event.detail.index);
    };

    window.addEventListener(
      "swiperLinkClick",
      handleLinkClick as EventListener,
    );

    return () => {
      window.removeEventListener(
        "swiperLinkClick",
        handleLinkClick as EventListener,
      );
    };
  }, [items]);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    const startX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    dragData.current = { startX, currentX: startX };
  };

  const handleDragMove = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!dragData.current) return;
    const currentX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const { startX } = dragData.current;
    const diffX = currentX - startX;
    const threshold = containerRef.current!.offsetWidth / 4;

    if (diffX > threshold) {
      handlePrev();
      dragData.current = null;
    } else if (diffX < -threshold) {
      handleNext();
      dragData.current = null;
    } else {
      dragData.current.currentX = currentX;
    }
  };

  const handleDragEnd = () => {
    dragData.current = null;
  };

  const swipeToIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div
      className="swiper-container"
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        className={`swiper-navigation ${currentIndex > 0 ? "show-prev" : ""} ${currentIndex < items.length - 1 ? "show-next" : ""}`}
      >
        <button className="swiper-button-prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="swiper-button-next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div
        className="swiper-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`swiper-slide ${index === currentIndex ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <div className="pagination-dots">
          {items.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
      <div className="book-now-button">
        <a
          href="https://system.easypractice.net/book/proaktiv-idrottscenter"
          target="_blank"
          className="pointer-events-none"
        >
          <button className=" text-white font-bold py-2 px-4 rounded-lg border-white border-2 opacity-20">
            Boka tid
          </button>
        </a>
      </div>
      <p className="contact-info text-xs tracking-widest">
        Lidingövägen 1, 114 33 Stockholm
      </p>
    </div>
  );
};

export default ServiceItemSwiper;
