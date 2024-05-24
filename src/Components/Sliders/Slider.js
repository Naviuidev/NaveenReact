import React, { useState } from 'react';
import './Slider.css'; // Your CSS file for styling the slider

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide">
        <img src='http://pilogapps.com/static/media/The%20Pride%20of%20Bharat%202023%20Awards-Banner.c85ac4a62dbd5a872208.jpg' className='img-fluid'/>

        </div>
        <div className="slide">
        <img src='http://pilogapps.com/static/media/The%20Emirates%20Times%20Shines%20Spotlight%20on%20Dr.%20Imad%20A.%20Syed,%20CEO%20of%20PiLog%20Middle%20East%20and%20APAC.8cbd63f8d32428799378.jpg' className='img-fluid'/>
        </div>
        <div className="slide">
            <img src="http://pilogapps.com/static/media/PiLog's%20Material%20Master%20Taxonomy%205.0-Banner.4616644a14e91be0f78d.jpg" className='img-fluid'/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
