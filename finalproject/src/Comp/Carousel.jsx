import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const images = [
    "../images/plane.png",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
    "https://via.placeholder.com/800x400?text=Slide+5",
  ];


  // style={{ width: "80%", margin: "0 auto", padding: "20px" }
  return (
    <div className="w-[750px] h-[750px] m-auto">
      {/* Carousel */}
      <Slider {...settings} ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        ))}
      </Slider>

      {/* Blocks underneath */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {/* Previous Image */}
        <div style={{ width: "30%", textAlign: "center", padding: "10px", backgroundColor: "#f0f0f0" }}>
          <img
            src={images[(currentSlide + images.length - 1) % images.length]}
            alt="Previous Slide"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Current Image */}
        <div style={{ width: "30%", textAlign: "center", padding: "10px", backgroundColor: "#ddd" }}>
          <img
            src={images[currentSlide]}
            alt="Current Slide"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Next Image */}
        <div style={{ width: "30%", textAlign: "center", padding: "10px", backgroundColor: "#f0f0f0" }}>
          <img
            src={images[(currentSlide + 1) % images.length]}
            alt="Next Slide"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
