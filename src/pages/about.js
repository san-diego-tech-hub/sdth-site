import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'

export default props => (
  <Layout pageProps={props}>
    <SEO title="About" keywords={['san diego', 'tech', 'hub']} />
    <About />
  </Layout>
)
