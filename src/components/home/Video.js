import React from "react"
import styled from "styled-components"

const VIDEO_WIDTH = 768
const VIDEO_HEIGHT = 432

const Video = () => {
  return (
    <VideoStyle>
      <iframe
        title="What is San Diego Tech Hub?"
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </VideoStyle>
  )
}

const VideoStyle = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw !important;
  margin-top: 15px !important;

  iframe {
    box-shadow: 3px 3px 5px grey;
    border: 0;
  }

  @media (max-width: ${VIDEO_WIDTH}px) {
    iframe {
      box-shadow: none;
    }
  }
`

export default Video
