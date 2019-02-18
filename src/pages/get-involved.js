import React from 'react'

import GetInvolved from 'Components/get-involved'
import Layout from 'Components/layout'
import SEO from 'Components/seo'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Get Involved" keywords={['san diego', 'tech', 'hub']} />
    <GetInvolved />
  </Layout>
)
