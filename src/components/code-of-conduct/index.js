import React from "react"
import styled from "styled-components"
import Html from "Common/Html"

const CodeOfConduct = ({ data, ...props }) => (
  <Container {...props}>
    {data.sections.map((section, i) => (
      <Section key={section.title}>
        <h2>{`${i + 1}. ${section.title}`}</h2>
        <Html>
          {section.contentDescription}
        </Html>
      </Section>
    ))}
  </Container>
)

const Container = styled.div`
  margin: 0 auto 10rem;
  max-width: 900px;
`

const Section = styled.div`
  font-size: 2.5rem;
  max-width: 100vw;
  padding: 1.5rem;
`

export default CodeOfConduct
