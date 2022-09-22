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
      }, 500);
      setToggleInterval(x);
    }
    setIsToggle(!isToggle);
  };
  return (
    <div className="container">
      <div className="carousel-container">
        <button onClick={decrementCarousel}> -</button>
        <img src={images[currImage]} alt="" />
        <button onClick={incrementCarousel}> + </button>
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
