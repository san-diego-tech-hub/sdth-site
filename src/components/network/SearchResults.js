import React from "react"
import styled from "styled-components"
import Resources from "./resources"

export default function SearchResults({ results, filterText }) {
  const resourceType = Object.keys(results)[0]
  const ResourceCard = Resources[resourceType]
  const resultList = results[resourceType]

  const noResults = (
    <div style={{ fontSize: "5rem", padding: "20px", textAlign: "center" }}>
      No results <span aria-label="thinking-face" role="img">🧐</span>
    </div>
  )

  const filteredResults = (resultList || [])
    .filter(resource => resource.name.toLowerCase().includes(filterText.toLowerCase()))
    .map(resource => <ResourceCard {...resource} key={resource.id} />)

  return (
    <Container>
      <ResultList>
        {filteredResults.length > 0
          ? filteredResults
          : noResults
        }
      </ResultList>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f2f3f2;
  margin-top: -0.4rem;
  padding: 0.5rem 0 4rem;
`

const ResultList = styled.section`
  max-width: 100vw;
  margin: 0 !important;
`
