import React from 'react'

import GetInvolved from '../components/get-involved'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Get Involved" keywords={['san diego', 'tech', 'hub']} />
    <GetInvolved />
  </Layout>
)
