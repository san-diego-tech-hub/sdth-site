import React from "react"
import ExternalLink from "Common/ExternalLink"
import {
  LabelDefault
} from "Common/Labels"

import amenitiesMap from "./amenities.json"
import spacesData from "./spaces.json"

import {
  NetworkSearchResultsDiv, LocationSearchResult, PlacesSearchResultsSection
} from "./styles"

function convertCostToString(cost) {
  return cost ? cost.toString() : "FREE"
}

function AmenitiesList({ amenities }) {
  const amenitiesLabels =  amenities.map(amenity => {
    return (
      <li style={{ display: "inline-block" }}><LabelDefault style={{ backgroundColor: "#adadad", color: "#ffffff" }}>{amenitiesMap[amenity]}</LabelDefault></li>
    )
  })
  return <ul style={{ listStyle: "none" }}>{amenitiesLabels}</ul>
}

function LocationSearchResultCard({ imageUrl, name, amenities, description,
  capacity, rating, ratingCount, cost }) {
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
          <LabelDefault style={{ color: "white", backgroundColor: "#2ecd7a" }}>{convertCostToString(cost)}</LabelDefault>
          <ExternalLink style={{ color: "#248ABA", display: "block" }} aria-label={name} href="https://twitter.com/SanDiegoTechHub">View details</ExternalLink>
        </div>
      </div>
    </LocationSearchResult>
  )
}

function PlacesSearchResults({ spaces }) {
  return (
    <PlacesSearchResultsSection>
      {spaces.map(space => {
        return <LocationSearchResultCard {...space} key={space.name} />
      }) }
    </PlacesSearchResultsSection>
  )
}


export default function NetworkSearchResults() {
  return (
    <NetworkSearchResultsDiv>
      <PlacesSearchResults spaces={spacesData} />
    </NetworkSearchResultsDiv>
  )
}
