import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PillarTemplate from '../components/pillars/template'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Inclusion" keywords={['san diego', 'tech', 'hub', 'pillar', 'inclusion']} />
    <PillarTemplate data={props.data.inclusionJson} icon={props.data.inclusion} />
  </Layout>
)

export const query = graphql`
  query INCLUSION_QUERY {
    inclusionJson {
      pageTitle
      purpose
      goals
      challenge
      leads {
        name
        email
        bio
        photo
      }
    }
    inclusion: file(relativePath: { eq: "inclusion-page.png" }) {
      ...childSharp
    }
  }
`
