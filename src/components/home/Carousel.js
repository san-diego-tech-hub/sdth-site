import React from "react"
import NukaCarousel from "nuka-carousel"
import carousel1 from "Images/carousel/bassanio.png"
import carousel2 from "Images/carousel/eriberto.png"
import carousel3 from "Images/carousel/teresa.png"
import carousel4 from "Images/carousel/oss.png"

const Carousel = () => {
  return (
    <NukaCarousel
        autoplay
        autoplayInterval={9000}
        wrapAround
        renderCenterLeftControls={({ previousSlide }) => (
          <button type="button" onClick={previousSlide}>P</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button type="button" onClick={nextSlide}>N</button>
        )}
    >
      <img alt="spotlight" src={carousel1} />
      <img alt="spotlight" src={carousel2} />
      <img alt="spotlight" src={carousel3} />
      <img alt="spotlight" src={carousel4} />
    </NukaCarousel>
  )
}

export default Carousel
