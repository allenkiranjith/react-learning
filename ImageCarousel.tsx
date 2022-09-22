import * as React from 'react';
import { useState } from 'react';
import './image-carousel.css';

export default function ImageCarousel({ images }) {
  const [currImage, setCurrImage] = useState(0);
  const [isToggle, setIsToggle] = useState(false);

  const [toggleInterval, setToggleInterval] = useState(0);

  const incrementCarousel = () => {
    setCurrImage((currImage) => (currImage + 1) % images.length);
  };

  const decrementCarousel = () => {
    setCurrImage(
      (currImage) => (currImage + images.length - 1) % images.length
    );
  };

  const handleToggleCarousel = () => {
    if (isToggle) {
      clearInterval(toggleInterval);
    } else {
      let x = setInterval(() => {
        incrementCarousel();
      }, 2000);
      setToggleInterval(x);
    }
    setIsToggle(!isToggle);
  };
  return (
    <div className="container">
      <div className="carousel-container">
        <div onClick={decrementCarousel} className="prev-button">
          {String.fromCharCode(8592)}
        </div>
        <img src={images[currImage]} alt="" />
        <div onClick={incrementCarousel} className="next-button">
          {String.fromCharCode(8594)}
        </div>
      </div>
      <div className="carousel-rotate">
        <input
          type="checkbox"
          id="carouselCheck"
          name="carouselCheck"
          onChange={handleToggleCarousel}
        />
        <label htmlFor="carouselCheck">Rotate</label>
      </div>
    </div>
  );
}
