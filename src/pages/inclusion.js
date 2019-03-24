import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

function InclusionPage({ data, ...props }) {
  const { inclusion, markdownRemark } = data
  return (
    <Layout pageProps={props}>
      <SEO
        title="Inclusion"
        keywords={["san diego", "tech", "hub", "pillar", "inclusion"]}
        canonicalUrlPath="/inclusion"
      />
      <PageTitle>Inclusion</PageTitle>
      <PillarTemplate data={markdownRemark.frontmatter} icon={inclusion} />
    </Layout>
  )
}

export default InclusionPage

export const query = graphql`
  query INCLUSION_QUERY {
    markdownRemark(frontmatter: { path: { eq: "inclusion" } }) {
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
    inclusion: file(relativePath: { eq: "inclusion-page.png" }) {
      ...childSharp
    }
  }
`
