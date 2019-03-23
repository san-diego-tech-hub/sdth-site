import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Html from "Common/Html"
import Color from "color"
import { pillarsInfo } from "Utils/constants"
import {
  Container,
  LeadsSection,
  PillarInfo,
  PillarSection,
} from "./styles"

const PillarTemplate = ({ data, icon }) => {
  // Pick color based on data.pageTitle (ie. "community", "education", etc.). If pageTitle does not
  // match an expected pillar, default to the FOUNDER_COLOR value used in team/index.js
  const rawColor = pillarsInfo[data.pageTitle.toLowerCase()].color || "#545CFE"
  const baseColor = Color(rawColor).desaturate(0.2)

  return (
    <Container>
      <PillarInfo>
        <Img width="430px" fluid={icon.childImageSharp.fluid} />
        <div>
          <h1>{data.pageTitle}</h1>
          <aside>Pillar of Excellence</aside>
        </div>
      </PillarInfo>

      <PillarSection>
        <h2>Purpose</h2>
        <Html>
          {data.purpose}
        </Html>
      </PillarSection>

      <PillarSection>
        <h2>How do we challenge the status quo?</h2>
        <Html>
          {data.challenge}
        </Html>
      </PillarSection>

      {data.leads && (
        <LeadsSection
          color={baseColor.toString()}
        >
          <h2>Pillar Leads</h2>
          {data.leads.map(({ lead }, index) => (
            <>
              <div key={lead.name} className="lead">
                <div>
                  <img
                  src={require(`../../images/${lead.photo}.jpg`)}
                  width="250"
                  alt={lead.name}
                  style={{ borderRadius: "100%", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
                  />
                  <div>
                    <span>{lead.name}</span>
                    <span className="email">{lead.email}</span>
                  </div>
                </div>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem 3rem" }}>
                  <h5>Biography</h5>
                  <Html>
                    {lead.bioDescription}
                  </Html>
                </span>
              </div>
              {(index < data.leads.length - 1) && <hr />}
            </>
          ))}
        </LeadsSection>
      )}
    </Container>
  )
}

PillarTemplate.propTypes = {
  data: PropTypes.object,
}

export default PillarTemplate
