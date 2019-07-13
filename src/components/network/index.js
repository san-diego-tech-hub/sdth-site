import React from "react"
import SearchBar from "./SearchBar"
import NetworkSearchResults from "./NetworkSearchResults"
import resultList from "./spaces.json"

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
      <NetworkSearchResults resultList={resultList} />
    </NetworkContainer>
  )
}

export default Network
