import React from "react"

import GetInvolved from "Components/get-involved"
import Layout from "Components/layout"
import SEO from "Components/seo"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Get Involved"
      keywords={["san diego", "tech", "hub", "internships", "nonprofit", "talent", "volunteers"]}
      canonicalUrlPath="/get-involved"
    />
    <PageTitle>
      Get Involved
    </PageTitle>
    <GetInvolved />
  </Layout>
)
