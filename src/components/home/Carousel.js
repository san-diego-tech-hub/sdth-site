import React from "react"
import NukaCarousel from "nuka-carousel"
import spotlight1 from "Images/spotlight/bassanio-peters.jpeg"
import spotlight2 from "Images/spotlight/eriberto-garcia.jpeg"

const Carousel = () => {
  return (
    <NukaCarousel autoplay wrapAround>
      <img alt="spotlight" src={spotlight1} />
      <img alt="spotlight" src={spotlight2} />
      <img alt="spotlight" src="https://placehold.it/500x300" />
      <img alt="spotlight" src="https://placehold.it/500x300" />
      <img alt="spotlight" src="https://placehold.it/500x300" />
      <img alt="spotlight" src="https://placehold.it/500x300" />
    </NukaCarousel>
  )
}

export default Carousel
