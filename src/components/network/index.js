import React from "react"
import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import resultList from "./spaces.json"

export default function Network() {
  return (
    <Container>
      <Header>
        <Title>Network</Title>
        <SearchBar />
      </Header>
      <SearchResults resultList={resultList} />
    </Container>
  )
}

const Container = styled.main`
  margin: ${NAV_HEIGHT} auto;
  padding: 0;
  width: 100vw;
}
`

const Header = styled.div`
  background: linear-gradient(${props => `${props.theme.primary}, ${props.theme.primaryLight}`});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`
