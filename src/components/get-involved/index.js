import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SocialAggregator from 'Components/social-aggregator'
const GetInvolved = () => (
  <StaticQuery
    query={query}
    render={({ getInvolvedJson, ...logos }) => (
      <main>
        <section>
          <h2>{getInvolvedJson.firstSectionTitle}</h2>
          <p>{getInvolvedJson.firstSectionDescription}</p>
        </section>
        <section>
          <h2>San Diego Tech Hub In Action</h2>
          <SocialAggregator />
        </section>
      </main>
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

export default GetInvolved
