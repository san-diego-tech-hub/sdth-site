import React from "react"
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"

class MyMap extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    // selectedPlace: {},
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      // selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onMapClick = () => {
    const { showingInfoWindow } = this.state
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const { google } = this.props
    const { activeMarker, showingInfoWindow } = this.state
    return (
      <div style={{ width: "100%", height: "40rem" }}>
        <Map
          item
          xs={12}
          google={google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{ lat: 39.648209, lng: -75.711185 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            title="Changing Colors Garage"
            position={{ lat: 39.648209, lng: -75.711185 }}
            name="Changing Colors Garage"
          />
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            My Info Goes Here!
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({ api: process.env.GATSBY_GOOGLE_API })(MyMap)
