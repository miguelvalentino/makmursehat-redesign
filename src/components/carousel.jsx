import { useState } from 'react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/carousel_1.jpg'; 
import img2 from '../assets/carousel_2.jpg'; 
import img3 from '../assets/carousel_3.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block w-100 carousel-image"
          src={img1}
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Makan Sehat Tidak Harus Mahal</h3>
          <p>Temukan ratusan resep bergizi yang mudah dibuat, terjangkau, dan tetap lezat untuk seluruh keluarga.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 carousel-image"
          src={img2}
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Resep Seimbang, Hidup Lebih Bertenaga</h3>
          <p>Kami membantu kamu memilih menu dengan nutrisi seimbang untuk mendukung aktivitas harian dan gaya hidup aktif.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 carousel-image"
          src={img3}
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Mulai Perjalanan Sehatmu Hari Ini</h3>
          <p>
            Jelajahi berbagai resep, tips gizi, dan panduan memasak sehat yang praktis untuk pemula hingga mahir.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;