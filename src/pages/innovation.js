import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'Components/layout'
import SEO from 'Components/seo'
import PillarTemplate from 'Components/pillars/template'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Innovation" keywords={['san diego', 'tech', 'hub', 'pillar', 'innovation']} />
    <PillarTemplate data={props.data.innovationJson} icon={props.data.innovation} />
  </Layout>
)

export const query = graphql`
query INNOVATION_QUERY {
  innovationJson {
    pageTitle
    purpose
    challenge
    leads {
      name
      email
      bio
      photo
    }
  }
  innovation: file(relativePath: { eq: "innovation-page.png" }) {
    ...childSharp
  }
}
`

