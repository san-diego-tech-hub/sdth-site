import React from "react"

import Layout from "Components/layout"
import SEO from "Components/seo"
import Network from "Components/network"

export default props => (
  <Layout pageProps={props}>
    <SEO
      title="Network"
      keywords={["san diego", "network", "tech", "hub", "inform", "connect", "empower", "community", "education", "inclusion", "innovation", "talent", "conduit for change", "pillars of excellence"]}
      urlPath="/network"
    />
    <Network />
  </Layout>
)
