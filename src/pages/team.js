import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import Team from "Components/team"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Leadership Team"
      keywords={["san diego", "tech", "hub", "leadership", "team"]}
      canonicalUrlPath="/team"
    />
    <PageTitle>
      Team
    </PageTitle>
    <Team />
  </Layout>
)
