import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PillarTemplate from '../components/pillars/template'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Talent" keywords={['san diego', 'tech', 'hub', 'pillar', 'talent']} />
    <PillarTemplate data={props.data.talentJson} icon={props.data.talent} />
  </Layout>
)

export const query = graphql`
  query TALENT_QUERY {
    talentJson {
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
    talent: file(relativePath: { eq: "talent-page.png" }) {
      ...childSharp
    }
  }
`
