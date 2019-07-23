import React from "react"
import styled from "styled-components"
import Resources from "./resources"

export default function SearchResults({ results, filterText }) {
  const resourceType = Object.keys(results)[0]
  const ResourceCard = Resources[resourceType]
  const resultList = results[resourceType]

  return (
    <Container>
      <ResultList>
        {resultList
          ? resultList
            .filter(resource => resource.name.toLowerCase().includes(filterText.toLowerCase()))
            .map(resource => <ResourceCard {...resource} key={resource.id} />)
          : <div style={{ fontSize: "5rem", padding: "20px", textAlign: "center" }}>No results <span aria-label="thinking-face" role="img">🧐</span></div>
        }
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
