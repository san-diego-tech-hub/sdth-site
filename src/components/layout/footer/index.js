import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, InnerDiv } from './styles'

const Footer = () => (
  <Container>
    <StaticQuery
      query={query}
      render={({ footer }) => (
        <InnerDiv>
          <Img fluid={footer.childImageSharp.fluid} style={{ width: '30rem' }} />
        </InnerDiv>
      )}
    />
  </Container>
)

const query = graphql`
  query FOOTER_QUERY {
    footer: file(relativePath: { eq: "sdth-logo.png" }) {
      ...childSharp
    }
  }
`

export default Footer
