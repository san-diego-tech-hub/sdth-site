import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import Leadership from "Components/leadership"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO title="Leadership Team" keywords={["san diego", "tech", "hub", "leadership"]} />
    <PageTitle>
      Team
    </PageTitle>
    <Leadership />
  </Layout>
)
