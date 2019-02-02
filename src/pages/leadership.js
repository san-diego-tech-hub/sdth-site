import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Leadeship from '../components/leadership'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Leadership Team" keywords={['san diego', 'tech', 'hub', 'leadership']} />
    <Leadeship />
  </Layout>
)
