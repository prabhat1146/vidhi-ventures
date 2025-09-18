import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
