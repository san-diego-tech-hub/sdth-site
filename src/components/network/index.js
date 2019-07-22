import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function Network() {
  const { hasura } = useStaticQuery(hasuraQuery)
  const [filterText, setFilterText] = useState("")

  return (
    <Container>
      <Header>
        <Title>Network</Title>
        <SearchBar setFilterText={e => setFilterText(e.target.value)} filterText={filterText} />
      </Header>
      <SearchResults results={hasura} filterText={filterText} />
    </Container>
  )
}

const hasuraQuery = graphql`
  query HASURA_QUERY {
    hasura {
      codeSchool {
        address
        description
        email
        id
        name
        phoneNumber
        imageUrl
        socialMedia
        website
      }
    }
  }
`

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
