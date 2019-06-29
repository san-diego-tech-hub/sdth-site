import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SearchBar from "./SearchBar"

import {
  NetworkContainer,
  Header,
  Logo
} from "./styles"

function Network() {
  const {
    networkLogo
  } = useStaticQuery(networkQuery)

  return (
    <NetworkContainer>
      <Header>
        <Logo fluid={networkLogo.childImageSharp.fluid} alt="SDTH Network" />
        <SearchBar />
      </Header>
    </NetworkContainer>
  )
}

const networkQuery = graphql`
  query NETWORK_QUERY {
    networkLogo: file(relativePath: { eq: "network.png" }) {
      ...childSharp
    }
  }
`

export default Network
