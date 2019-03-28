import React from "react"

import Error404 from "Components/404"
import Layout from "Components/layout"
import SEO from "Components/seo"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Error 404 - Page not found"
      keywords={["san diego", "tech", "hub", "internships", "nonprofit", "talent", "volunteers"]}
      canonicalUrlPath="/404"
    />
    <PageTitle>
      Page not found
    </PageTitle>
    <Error404 />
  </Layout>
)
