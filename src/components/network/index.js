import React from "react"
import network from "Images/initiatives/network.png"
import conduits from "Images/misc/conduits-flow.png"

import {
  NetworkContainer, NetworkSection, NetworkLinks
} from "./styles"

function Network() {
  return (
    <main>
      <NetworkContainer>
        <img className="conduits-flow-illustration" src={conduits} alt="Conduits Icon" />
        <NetworkSection>
          <img className="conduits-flow-illustration" src={conduits} alt="Conduits Icon" />
          <img className="network-logo" src={network} alt="Network Icon" />
        </NetworkSection>
        <NetworkLinks>
          <ul>
            <li><a href="#">Resource</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </NetworkLinks>
      </NetworkContainer>
    </main>
  )
}

export default Network
