import ImageSlider from "./ImageSlider";

import calvin from "/Calvin.webp";
import calvinMobile from "/CalvinMobile.webp";
import lily from "/Lily.webp";
import lilyMobile from "/LilyMobile.webp";

import "../index.css";

function Body() {
  const IMAGES = [calvin, calvinMobile, lily, lilyMobile];

  return (
    <div className="h-[40vh]">
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}

export default Body;
