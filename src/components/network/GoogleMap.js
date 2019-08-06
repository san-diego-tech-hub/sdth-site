import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

export class GoogleMap extends Component {
  displayMarkers = () => {
    const { results, resourceType, filterText } = this.props
    const resultList = results[resourceType]
    const filteredResults = (resultList || [])
      .filter(resource => resource.name.toLowerCase().includes(filterText.toLowerCase()))
    return filteredResults.map((result, index) => {
      if (result.coordinates != null) {
        return (
          <Marker key={result.id}
            id={index}
            position={{
              lat: result.coordinates[0],
              lng: result.coordinates[1]
            }}
          />
        )
      }
      return null
    })
  }

  render() {
    const { google } = this.props
    return (
      <Map
          google={google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 32.7157, lng: -117.1611 }}
      >
        {this.displayMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY
})(GoogleMap)

const mapStyles = {
  width: "100%",
  height: "300px"
}
