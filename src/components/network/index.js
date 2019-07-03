import React from "react"
import SearchBar from "./SearchBar"

import {
  NetworkContainer,
  Header,
  Title
} from "./styles"

function Network() {
  return (
    <NetworkContainer>
      <Header>
        <Title>Network</Title>
        <SearchBar />
      </Header>
    </NetworkContainer>
  )
}

export default Network
