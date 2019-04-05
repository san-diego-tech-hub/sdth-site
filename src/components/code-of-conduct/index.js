import React from "react"
import styled from "styled-components"
import Html from "Common/Html"

const CodeOfConduct = ({ data, ...props }) => (
  <Container {...props}>
    <Header>{data.header}</Header>
    {data.sections.map(({ section }, i) => (
      <Section key={section.title || i}>
        { section.title
        && <h2>{`${i}. ${section.title}`}</h2>
        }
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

const Header = styled.h1`
  color: ${props => props.theme.primaryMuted};
  margin-bottom: 4rem;
  padding: 2rem;

  @media (max-width: 680px) {
    margin-top: -1rem;
  }
`

const Section = styled.div`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  max-width: 100vw;
  padding: 1.5rem;

  h2 {
    margin-bottom: 3rem;
  }
`

export default CodeOfConduct
