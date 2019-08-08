import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMap = ({
  filterText,
  google,
  resourceType,
  results
}) => {
  const resultList = results[resourceType]
  const filteredResults = (resultList || [])
    .filter(resource => resource.name.toLowerCase().includes(filterText.toLowerCase()))

  const displayMarkers = filteredResults
    .map((result, index) => {
      if (result.coordinates == null) {
        return null
      }
      const [lat, lng] = result.coordinates
      return (
        <Marker
          key={result.id}
          id={index}
          position={{ lat, lng }}
        />
      )
    })

  const mapStyles = {
    height: "300px",
    width: "100%"
  }

  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 32.7157, lng: -117.1611 }}
    >
      {displayMarkers}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY
})(GoogleMap)
