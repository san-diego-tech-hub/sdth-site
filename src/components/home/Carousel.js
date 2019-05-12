import React from "react"
import NukaCarousel from "nuka-carousel"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

const Carousel = ({ images }) => (
  <Container>
    <NukaCarousel
        autoplay
        autoplayInterval={10000}
        wrapAround
        easing="easeQuadInOut"
        renderCenterLeftControls={({ previousSlide }) => (
          <Button aria-label="previous image" type="button" onClick={previousSlide}>
            <FontAwesomeIcon icon="chevron-left" />
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button aria-label="next image" type="button" onClick={nextSlide}>
            <FontAwesomeIcon icon="chevron-right" />
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
  </Container>
)

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 60%;

  @media (max-width: 960px) {
    margin-top: 2rem;
    width: 100vw;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.8);

  &:hover {
    cursor: pointer;
  }
`

export default Carousel
