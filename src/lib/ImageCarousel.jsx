import React, { useEffect, useState } from "react";

function ImageCarousel({ basePath, images = [], interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-500">No images to display</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden space-x-6">
      {images.map((image, index) => (
        <img
          key={image}
          src={`${basePath}/${image}`}
          alt={`Slide ${index + 1}`}
          className={`w-75 h-75 md:w-75 md:h-95 rounded-2xl object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;