import React from 'react'

import Layout from 'Components/layout'
import SEO from 'Components/seo'
import Leadeship from 'Components/leadership'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Leadership Team" keywords={['san diego', 'tech', 'hub', 'leadership']} />
    <Leadeship />
  </Layout>
)
