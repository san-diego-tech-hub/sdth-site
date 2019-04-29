import React from "react"
import NukaCarousel from "nuka-carousel"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

const Carousel = ({ images }) => {
  return (
    <NukaCarousel
        autoplay
        autoplayInterval={9000}
        wrapAround
        renderCenterLeftControls={({ previousSlide }) => (
          <Button type="button" onClick={previousSlide}>
            <FontAwesomeIcon icon="chevron-left" style={{ }} />
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button type="button" onClick={nextSlide}>
            <FontAwesomeIcon icon="chevron-right" style={{ }} />
          </Button>
        )}
        renderBottomCenterControls={null}
    >
      {images.map(({ node }) => {
        return (
          <Img
            key={node.relativePath}
            alt="Carousel Image"
            fluid={node.childImageSharp.fluid}
          />
        )
      })}
    </NukaCarousel>
  )
}

const Button = styled.button`
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.8);

  &:hover {
    cursor: pointer;
  }
`

export default Carousel
