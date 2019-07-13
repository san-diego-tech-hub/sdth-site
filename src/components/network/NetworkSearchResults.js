import React from "react"
import ExternalLink from "Common/ExternalLink"
import {
  Label
} from "Common/Label"

import amenitiesMap from "./amenities.json"

import {
  Container, LocationSearchResult, PlacesSearchResultsSection
} from "./styles"

function convertCostToString(cost) {
  return cost ? cost.toString() : "FREE"
}

function AmenitiesList({ amenities }) {
  const amenitiesLabels =  amenities.map(amenity => {
    return (
      <li style={{ display: "inline-block" }}>
        <Label>{amenitiesMap[amenity]}</Label>
      </li>
    )
  })
  return <ul style={{ listStyle: "none" }}>{amenitiesLabels}</ul>
}

function LocationSearchResultCard({
  amenities,
  capacity,
  cost,
  description,
  imageUrl,
  name,
  rating,
  ratingCount,

}) {
  return (
    <LocationSearchResult>
      <div className="imgCol">
        <img alt={name} src={imageUrl} style={{ height: "100px", width: "100px" }} />
      </div>
      <div className="contentCol">
        <div><h2>{name}</h2></div>
        <div>{capacity} | {rating} ({ratingCount})</div>
        <div>{description}</div>
        <div>Amenities:</div>
        <div><AmenitiesList amenities={amenities} /></div>
      </div>
      <div className="actionCol">
        <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between", alignItems: "center" }}>
          <Label bgColor="#2ecd7a">{convertCostToString(cost)}</Label>
          <ExternalLink style={{ color: "#248ABA", display: "block" }} aria-label={name} href="https://twitter.com/SanDiegoTechHub">View details</ExternalLink>
        </div>
      </div>
    </LocationSearchResult>
  )
}

export default function NetworkSearchResults({ resultList }) {
  return (
    <Container>
      <PlacesSearchResultsSection>
        {resultList.map(result => {
          return <LocationSearchResultCard {...result} key={result.name} />
        }) }
      </PlacesSearchResultsSection>
    </Container>
  )
}
