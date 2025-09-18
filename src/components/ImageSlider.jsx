import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images, alt, minInterval = 3000, maxInterval = 7000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Clear timeout helper
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Auto-slide with random interval
  useEffect(() => {
    resetTimeout();

    const randomDelay = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

    timeoutRef.current = setTimeout(nextSlide, randomDelay);

    return () => resetTimeout();
  }, [current, minInterval, maxInterval]);

  // Detect if slide is video
  const isVideo = (src) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-64">
            {isVideo(src) ? (
              <video
                src={src}
                autoPlay={index === current}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-900/80 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-900/80 transition"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
