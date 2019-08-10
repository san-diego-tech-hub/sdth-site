import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import GoogleMap from "./GoogleMap"

export default function Network() {
  const { hasura } = useStaticQuery(hasuraQuery)
  const [filterText, setFilterText] = useState("")
  const [resourceType, setResourceType] = useState("codeSchool")
  const results = hasura[resourceType]

  if(resourceType == "codeSchool" || resourceType == "venue"){
    return (
      <Container>
        <Header>
          <Title>Network</Title>
          <SearchBar
            filterText={filterText}
            setFilterText={e => setFilterText(e.target.value)}
            resourceType={resourceType}
            setResourceType={e => setResourceType(e.target.value)}
          />
        </Header>

        <MapContainer>
          <GoogleMap
            filterText={filterText}
            resourceType={resourceType}
            results={{ [resourceType]: results }}
          />
        </MapContainer>
        <SearchResults
          filterText={filterText}
          results={{ [resourceType]: results }}
        />
      </Container>
    )
  }
  else return(
    <Container>
      <Header>
        <Title>Network</Title>
        <SearchBar
          filterText={filterText}
          setFilterText={e => setFilterText(e.target.value)}
          resourceType={resourceType}
          setResourceType={e => setResourceType(e.target.value)}
        />
      </Header>
      <SearchResults
        filterText={filterText}
        results={{ [resourceType]: results }}
      />
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
        coordinates
      }
      venue {
        address
        amenities
        capacity
        contactEmail
        contactName
        contactPhone
        cost
        description
        id
        imageUrl
        name
        socialMedia
        website
        coordinates
      }
      jobCandidate {
        name
        id
        description
        socialMedia
        website
        email
        phoneNumber
        imageUrl
      }
      speaker {
        name
        id
        description
        imageUrl
        email
        website
        socialMedia
      }
      sponsor {
        name
        id
        description
        imageUrl
        address
        website
        socialMedia
        email
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

const MapContainer = styled.div`
  height: 305px;
  width: 100%;
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
