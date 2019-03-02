import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

export default props => {
  const { data: { community, communityJson } } = props
  return (
    <Layout pageProps={props}>
      <SEO title="Community" keywords={["san diego", "tech", "hub", "community"]} />
      <PageTitle>
        Community
      </PageTitle>
      <PillarTemplate
        data={communityJson}
        icon={community}
      />
    </Layout>
  )
}

export const query = graphql`
  query COMMUNITY_QUERY {
    communityJson {
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
    community: file(relativePath: { eq: "community-page.png" }) {
      ...childSharp
    }
  }
`
