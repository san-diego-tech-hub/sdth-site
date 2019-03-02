import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SocialAggregator from "Components/social-aggregator"

const GetInvolved = () => (
  <StaticQuery
    query={query}
    render={({ getInvolvedJson }) => (
      <Container>
        <section>
          <h2>{getInvolvedJson.firstSectionTitle}</h2>
          <p>{getInvolvedJson.firstSectionDescription}</p>
        </section>
        <section>
          <h2>San Diego Tech Hub In Action</h2>
          <SocialAggregator />
        </section>
      </Container>
    )}
  />
)

const query = graphql`
  query GETINVOLVED_QUERY {
    getInvolvedJson {
      firstSectionTitle
      firstSectionDescription
    }
  }
`
const Container = styled.main`
@media (max-width: 1500px) {
    margin: 10rem !important;
    max-width: 1200px;
  }
  section {
    padding: 2rem;
  }
  @media(max-width: 450px) {
    width 100vw;
  }
`

export default GetInvolved
