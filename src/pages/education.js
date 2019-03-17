import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

function EducationPage({ data, ...props }) {
  const { education, markdownRemark } = data

  return (
    <Layout pageProps={props}>
      <SEO
        title="Education"
        keywords={["san diego", "tech", "hub", "education", "pillar of excellence", "apprenctice program", "michael roberts jr", "aaron gasperi"]}
      />
      <PageTitle>Education</PageTitle>
      <PillarTemplate data={markdownRemark.frontmatter} icon={education} />
    </Layout>
  )
}

export default EducationPage

export const query = graphql`
  query EDUCATION_QUERY {
    markdownRemark(frontmatter: { path: { eq: "education" } }) {
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
    education: file(relativePath: { eq: "education-page.png" }) {
      ...childSharp
    }
  }
`
