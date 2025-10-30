import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { heroSlides } from "@/constants";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // Time per slide in ms (3 seconds)

  // --- Carousel Logic ---

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, slideInterval);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className=" hero-container">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 ${
            index === currentSlide ? " z-10" : "z-0"
          }`}
        >
          {/* Background Image*/}
          <img
            src={slide.image}
            alt={slide.heading}
            loading={index === 0 ? "eager" : "lazy"}
            className="bg-image"
          />
          {/* Green Overlay */}
          <div className="green-overlay"></div>

          {/* Content */}
          <div className="content relative">
            <div className="content-wrapper ">
              <h2
                className={`title ${
                  index === currentSlide ? "animate-fadeInDown" : "opacity-0"
                }`}
              >
                {slide.heading}
              </h2>
              <p
                className={`paragragh ${
                  index === currentSlide
                    ? "animate-fadeInDown [animation-delay:0.3s]"
                    : "opacity-0"
                }`}
              >
                {slide.text}
              </p>
              <a
                href="#about"
                className={`btn-get-started ${
                  index === currentSlide
                    ? "animate-fadeInUp [animation-delay:0.6s]"
                    : "opacity-0"
                }`}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* --- Controls --- */}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="left-arrow "
        aria-label="Previous slide"
      >
        <MdArrowBackIosNew />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="right-arrow "
        aria-label="Next slide"
      >
        <MdArrowForwardIos />
      </button>

      {/* Bottom Indicators */}
      <div className="bottom-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-indicator-btn ${
              index === currentSlide ? "bg-white" : "bg-white/40 "
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
