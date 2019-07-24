import React from "react"
import styled from "styled-components"

export default function GoogleMap({ resourceType }) {
  let id
  if (resourceType === "codeSchool") {
    id = "1umjck4O4CFh8XjLqskK0Xb2NeAehDS70&z=10"
  } else if (resourceType === "venue") {
    id = "1YlOiAqHsgnOPHNZUzCaoyQhYBDbzWlrV"
  } else {
    return null
  }
  return (
    <IFrame
        title="Code Schools"
        src={`https://www.google.com/maps/d/u/0/embed?mid=${id}`}
        width="100%"
        height="300px"
    />
  )
}

const IFrame = styled.iframe`
  margin-bottom: 0;
`
