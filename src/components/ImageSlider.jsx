import { useState, useEffect } from "react";

function ImageSlider({ videoUrls }) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an array with the duplicated first video at the end
  const extendedUrls = [...videoUrls, videoUrls[0]];

  const handleTransitionEnd = () => {
    if (videoIndex === videoUrls.length) {
      setIsTransitioning(true);
      setVideoIndex(0);
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
      setVideoIndex((i) => (i + 1) % (videoUrls.length + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [videoUrls.length]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="w-full h-full flex"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${100 * videoIndex}%)`,
          transition: isTransitioning ? "none" : "transform 0.5s ease-in-out",
        }}
      >
        {extendedUrls.map((url, index) => (
          <video
            key={`slide-${index}`}
            src={url}
            autoPlay
            muted
            loop
            className="w-full h-full object-contain flex-shrink-0 flex-grow-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
