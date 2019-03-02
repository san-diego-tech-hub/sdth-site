import React from "react"
import { graphql } from "gatsby"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PillarTemplate from "Components/pillars/template"
import PageTitle from "Common/PageTitle"

export default props => {
  const { data: { talent, talentJson } } = props
  return (
    <Layout pageProps={props}>
      <SEO title="Talent" keywords={["san diego", "tech", "hub", "pillar", "talent"]} />
      <PageTitle>
        Talent
      </PageTitle>
      <PillarTemplate data={talentJson} icon={talent} />
    </Layout>
  )
}

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
