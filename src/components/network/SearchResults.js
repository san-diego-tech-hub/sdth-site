import React from "react"
import styled from "styled-components"
import LocationCard from "./LocationCard"

export default function SearchResults({ resultList }) {
  return (
    <Container>
      <ResultList>
        {resultList.map(result => <LocationCard {...result} key={result.name} />)}
      </ResultList>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f2f3f2;
  padding-bottom: 0.5rem;
`

const ResultList = styled.section`
  max-width: 100vw;

  @media(max-width: 990px) {
    margin: 0 !important;
  }
`
