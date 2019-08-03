import React from "react"

import FormsPage from "Components/forms-page"
import Layout from "Components/layout"
import SEO from "Components/seo"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Forms"
      keywords={["san diego", "tech", "hub", "internships", "nonprofit", "talent", "volunteers", "forms"]}
      urlPath="/forms"
    />
    <PageTitle>
      Forms
    </PageTitle>
    <FormsPage />
  </Layout>
)
