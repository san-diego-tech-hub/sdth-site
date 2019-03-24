import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import CodeOfConduct from "Components/code-of-conduct"
import PageTitle from "Common/PageTitle"

const CodeOfConductPage = ({ data, ...props }) => {
  const { markdownRemark: { frontmatter } } = data
  return (
    <Layout pageProps={props}>
      <SEO
        title={frontmatter.pageTitle}
        keywords={["san diego", "tech", "hub", "code of conduct"]}
      />
      <PageTitle>
        {frontmatter.pageTitle}
      </PageTitle>
      <CodeOfConduct data={frontmatter} />
    </Layout>
  )
}

export default CodeOfConductPage

export const query = graphql`
  query CODE_OF_CONDUCT_QUERY {
    markdownRemark(frontmatter: { path: { eq: "code-of-conduct" } }) {
      frontmatter {
        pageTitle
        header
        sections {
          title
          contentDescription
        }
      }
    }
  }
`
