import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

function TalentPage({ data, ...props }) {
  const { talent, markdownRemark } = data
  return (
    <Layout pageProps={props}>
      <SEO
        title="Talent"
        keywords={["san diego", "tech", "hub", "pillar", "talent"]}
        urlPath="/talent"
      />
      <PageTitle>Talent</PageTitle>
      <PillarTemplate data={markdownRemark.frontmatter} icon={talent} />
    </Layout>
  )
}

export default TalentPage

export const query = graphql`
  query TALENT_QUERY {
    markdownRemark(frontmatter: { path: { eq: "talent" } }) {
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
    talent: file(relativePath: { eq: "talent-page.png" }) {
      ...childSharp
    }
  }
`
