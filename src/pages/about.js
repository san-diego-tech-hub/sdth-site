import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import About from "Components/about"
import PageTitle from "Common/PageTitle"

export default props => (
  <Layout pageProps={props}>
    <SEO title="About" keywords={["san diego", "tech", "hub"]} />
    <PageTitle>
      About
    </PageTitle>
    <About />
  </Layout>
)
