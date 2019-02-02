import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Home" keywords={['san diego', 'tech', 'hub']} />
    <Home />
  </Layout>
)
