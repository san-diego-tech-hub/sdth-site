import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import Home from "Components/home"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Home"
      keywords={["san diego", "tech", "hub"]}
      canonicalUrlPath="/index"
    />
    <Home />
  </Layout>
)
