import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Html from "Common/Html"

function Error404() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  return (
    <Container>
      <section style={{ marginBottom: "5rem", padding: "1rem" }}>
        <h2>{frontmatter.mainTitle}</h2>
        <Html>
          {frontmatter.mainDescription}
        </Html>
      </section>
    </Container>
  )
}

export default Error404


const query = graphql`
  query ERROR404_QUERY {
    markdownRemark(frontmatter: { path: { eq: "404" } }) {
      frontmatter {
        mainTitle
        mainDescription
      }
    }
  }
`

const Container = styled.main`
  max-width: 1400px;

  section {
    padding: 2rem;
  }

  @media(max-width: 450px) {
    text-align: center;
    width 100vw;
  }
`
