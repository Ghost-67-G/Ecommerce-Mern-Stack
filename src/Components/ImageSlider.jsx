import React, { useState, useEffect } from "react";
// import image1 from "/Asserts/banner/bannerImgOne.jpg";
// import image2 from "/Asserts/banner/bannerImgTwo.jpg";
// import image3 from "./Asserts/banner/bannerImgThree.jpg";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS (ensure you have it installed)

const ImageSlider = () => {
  const images = [
    "/Asserts/banner/bannerImgOne.jpg",
    "/Asserts/banner/bannerImgTwo.jpg",
    "./Asserts/banner/bannerImgThree.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full h-auto"
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
