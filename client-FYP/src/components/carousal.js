import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/images/image-1.jpg";
import slider2 from "../assets/images/image-2.jpg";
import slider3 from "../assets/images/image-3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img
          src={slider1}
          alt="Carousel Image 1"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Top Quality Shirts</h2>
            <p className="text-lg mb-6">
              You will find quality shirts here with imported stuff
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={slider2}
          alt="Carousel Image 1"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Top Quality Shirts</h2>
            <p className="text-lg mb-6">
              You will find quality shirts here with imported stuff
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={slider3}
          alt="Carousel Image 1"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Top Quality Shirts</h2>
            <p className="text-lg mb-6">
              You will find quality shirts here with imported stuff
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
