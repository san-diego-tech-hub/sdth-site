import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

function InnovationPage({ data, ...props }) {
  const { innovation, markdownRemark } = data
  return (
    <Layout pageProps={props}>
      <SEO
        title="Innovation"
        keywords={["san diego", "tech", "hub", "pillar", "innovation"]}
      />
      <PageTitle>Innovation</PageTitle>
      <PillarTemplate data={markdownRemark.frontmatter} icon={innovation} />
    </Layout>
  )
}

export default InnovationPage

export const query = graphql`
  query INNOVATION_QUERY {
    markdownRemark(frontmatter: { path: { eq: "innovation" } }) {
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
    innovation: file(relativePath: { eq: "innovation-page.png" }) {
      ...childSharp
    }
  }
`
