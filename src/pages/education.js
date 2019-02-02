import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PillarTemplate from '../components/pillars/template'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Education" keywords={['san diego', 'tech', 'hub', 'education', 'pillars']} />
    <PillarTemplate data={props.data.educationJson} icon={props.data.education} />
  </Layout>
)

export const query = graphql`
  query EDUCATION_QUERY {
    educationJson {
      pageTitle
      purpose
      challenge
      goals
      leads {
        name
        email
        bio
        photo
      }
    }
    education: file(relativePath: { eq: "education-page.png" }) {
      ...childSharp
    }
  }
`
