// src/components/SimpleCardSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleCardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='bg-red-600 h-[100vh] w-full'>

  
    <Slider {...settings}>
      <div>
        <h3 className="bg-red-500 text-white p-4">Slide 1</h3>
      </div>
      <div>
        <h3 className="bg-green-500 text-white p-4">Slide 2</h3>
      </div>
      <div>
        <h3 className="bg-blue-500 text-white p-4">Slide 3</h3>
      </div>
      <div>
        <h3 className="bg-yellow-500 text-white p-4">Slide 4</h3>
      </div>
      <div>
        <h3 className="bg-purple-500 text-white p-4">Slide 5</h3>
      </div>
    </Slider>
    </div>
  );
};

export default SimpleCardSlider;
