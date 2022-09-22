import * as React from 'react';
import './style.css';
import ImageCarousel from './ImageCarousel';

export default function App() {
  const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
    'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg',
  ];
  const containerClass = {
    width: '400px',
    height: '250px',
    margin: '0 auto',
  };

  return (
    <div>
      <h1>Image Carousel!</h1>
      <div style={containerClass}>
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}
