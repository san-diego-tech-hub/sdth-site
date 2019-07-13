import React from "react"
import ResponsiveEmbed from "react-responsive-embed"
import styled from "styled-components"

const Video = () => (
  <Container>
    <ResponsiveEmbed
      allowFullScreen
      src="https://player.vimeo.com/video/333343580?byline=0&portrait=0"
    />
  </Container>
)

const Container = styled.div`
  margin: auto;
  max-width: 1300px;
  width: 60%;

  @media (max-width: 960px) {
    width: 100vw;
  }
`

export default Video
