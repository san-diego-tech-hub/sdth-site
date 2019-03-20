import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

function CommunityPage({ data, ...props }) {
  const { markdownRemark, community } = data

  return (
    <Layout pageProps={props}>
      <SEO
        title="Community"
        keywords={["san diego", "tech", "hub", "community", "pillar of excellence", "technology ecosystem", "central hub", "mentorship", "jared sanderson", "fred jordan"]}
      />
      <PageTitle>Community</PageTitle>
      <PillarTemplate data={markdownRemark.frontmatter} icon={community} />
    </Layout>
  )
}

export default CommunityPage

export const query = graphql`
  query COMMUNITY_QUERY {
    markdownRemark(frontmatter: { path: { eq: "community" } }) {
      frontmatter {
        pageTitle
        purpose
        challenge
        leads {
          lead {
            name
            email
            bioDescription
            photo
          }
        }
      }
    }
    community: file(relativePath: { eq: "community-page.png" }) {
      ...childSharp
    }
  }
`
