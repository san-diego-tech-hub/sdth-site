import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SocialAggregator from "Components/social-aggregator"
import Html from "Common/Html"

function GetInvolved() {
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
      <section style={{ marginTop: "5rem", padding: 0 }}>
        <h2>San Diego Tech Hub In Action</h2>
        <SocialAggregator />
      </section>
    </Container>
  )
}

export default GetInvolved

const query = graphql`
  query GETINVOLVED_QUERY {
    markdownRemark(frontmatter: { path: { eq: "get-involved" } }) {
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
    width 100vw;
  }
`
