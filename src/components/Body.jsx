import ImageSlider from "./ImageSlider";

import calvin from "/calvin.mp4";
import calvinMobile from "/calvinMobile.mov";
import lily from "/lily.mp4";
import lilyMobile from "/lilyMobile.mov";

import "../index.css";

function Body() {
  const VIDEOS = [calvin, calvinMobile, lily, lilyMobile];

  return (
    <div className="h-[40vh]">
      <ImageSlider videoUrls={VIDEOS} />
    </div>
  );
}

export default Body;
