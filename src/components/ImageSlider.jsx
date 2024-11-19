import { useState, useEffect } from "react";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create array with duplicated first image at the end
  const extendedUrls = [...imageUrls, imageUrls[0]];

  const handleTransitionEnd = () => {
    if (imageIndex === imageUrls.length) {
      setIsTransitioning(true);
      setImageIndex(0);
      // Reset transition after jumping back
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % (imageUrls.length + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [imageUrls.length]);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full flex overflow-hidden"
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedUrls.map((url, index) => (
          <img
            key={`slide-${index}-${url}`}
            src={url}
            className="w-full h-full object-contain flex-shrink-0 flex-grow-0 slider-image"
            style={{
              translate: `${-100 * imageIndex}%`,
              transition: isTransitioning
                ? "none"
                : "translate 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
