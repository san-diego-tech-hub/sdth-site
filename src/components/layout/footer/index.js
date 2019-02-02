import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Footer } from './styles'

const TheFooter = () => (
  <Footer>
    <StaticQuery
      query={query}
      render={({ footer }) => (
        <div>
          <Img fluid={footer.childImageSharp.fluid} style={{ width: '30rem' }} />
        </div>
      )}
    />
  </Footer>
)

const query = graphql`
  query FOOTER_QUERY {
    footer: file(relativePath: { eq: "sdth-logo.png" }) {
      ...childSharp
    }
  }
`

export default TheFooter
