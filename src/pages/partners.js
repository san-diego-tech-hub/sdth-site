import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import PageTitle from "Common/PageTitle"
import Partners from "Components/partners"

function PartnersPage(props) {
  return (
    <Layout pageProps={props}>
      <SEO
        title="Partners"
        keywords={["san diego", "tech", "hub", "partners"]}
        canonicalUrlPath="/partners"
      />
      <PageTitle>Partners</PageTitle>
      <Partners />
    </Layout>
  )
}

export default PartnersPage
