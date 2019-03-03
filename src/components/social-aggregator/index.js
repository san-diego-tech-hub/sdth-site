import React from "react"
import styled from "styled-components"

import ExternalLink from "Common/ExternalLink"
import { useCurator } from "Utils/hooks"
import "./styles.css"

function SocialAggregator() {
  useCurator()

  return (
    <CuratorFeed>
      <div id="curator-feed">
        <ExternalLink href="https://curator.io" className="crt-logo crt-tag">
          Powered by Curator.io
        </ExternalLink>
      </div>
    </CuratorFeed>
  )
}

const CuratorFeed = styled.div`
  margin: auto;
  font-size: 1.4rem;
`

export default SocialAggregator
