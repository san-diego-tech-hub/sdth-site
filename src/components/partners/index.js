import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import ExternalLink from "Common/ExternalLink"

const Partners = () => (
  <StaticQuery
    query={query}
    render={({ partnersJson, ...logos }) => {
      return (
        <Container>
          <PartnerSection repeat={4}>
            <h2>{partnersJson.firstSectionTitle}</h2>

            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: partnersJson.firstSectionDescription }}
            />
            <div className="partners">
              {partnersJson.firstSectionItems.map((company) => {
                const logo = logos[company.logo]
                if (!logo) {
                  return null
                }
                return (
                  <div key={company.name} className="partner">
                    <ExternalLink href={company.website}>
                      <Img fluid={logo.childImageSharp.fluid} alt={company.name} />
                    </ExternalLink>
                  </div>
                )
              })}
            </div>
          </PartnerSection>

          <PartnerSection repeat={2}>
            <h2>{partnersJson.secondSectionTitle}</h2>

            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: partnersJson.secondSectionDescription }}
            />
            <div className="partners">
              {partnersJson.secondSectionItems.map((company) => {
                const logo = logos[company.logo]
                if (!logo) {
                  return null
                }

                return (
                  <div key={company.name} className="partner">
                    <ExternalLink href={company.website}>
                      <Img
                        fluid={logo.childImageSharp.fluid}
                        alt={company.name}
                        style={{ maxWidth: "40rem", margin: "auto" }}
                      />
                    </ExternalLink>
                  </div>
                )
              })}
            </div>
          </PartnerSection>
        </Container>
      )
    }}
  />
)

export default Partners

const Container = styled.div`
  max-width: 1200px;
  text-align: center;

  @media (max-width: 1100px) {
    margin: 0 !important;
  }

  @media(max-width: 450px) {
    .description {
      padding: 1rem;
    }
  }
`

const PartnerSection = styled.section`
  margin: 0 15rem 10rem !important;
  padding-top: 3.2rem;

  h2 {
    margin-bottom: 3.2rem;
  }

  .description {
    text-align: left;
    margin-bottom: 3.2rem;
    a {
      color: #422695;
      text-decoration: none;
    }
  }

  .partners {
    display: grid;
    grid-template-columns: repeat(${props => props.repeat || 1}, 1fr);
    grid-gap: 3.2rem;
    padding-top: 3.2rem;

    .partner {
      border-radius: 0.5rem;
    }
  }

  @media (max-width: 990px) {
    margin: 0 5rem 10rem !important;

    .partners {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 !important;
    }
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`

const query = graphql`
  query PARTNERS_QUERY {
    partnersJson {
      firstSectionTitle
      firstSectionDescription
      firstSectionItems {
        name
        website
        logo
      }
      secondSectionTitle
      secondSectionDescription
      secondSectionItems {
        name
        logo
      }
    }

    sdlc: file(relativePath: { eq: "sdlc.png" }) {
      ...childSharp
    }
    carlsbad: file(relativePath: { eq: "carlsbad.png" }) {
      ...childSharp
    }
    vusd: file(relativePath: { eq: "vusd.png" }) {
      ...childSharp
    }
    alliance: file(relativePath: { eq: "alliance.png" }) {
      ...childSharp
    }
    innovate: file(relativePath: { eq: "innovate.png" }) {
      ...childSharp
    }
    top_execs: file(relativePath: { eq: "top_execs.png" }) {
      ...childSharp
    }
    sd_regional: file(relativePath: { eq: "sd_regional.png" }) {
      ...childSharp
    }
    workforce: file(relativePath: { eq: "workforce.png" }) {
      ...childSharp
    }
    ucsd: file(relativePath: { eq: "ucsd.png" }) {
      ...childSharp
    }
    sdff: file(relativePath: { eq: "sdff.png" }) {
      ...childSharp
    }
    dynam: file(relativePath: { eq: "dynam.png" }) {
      ...childSharp
    }
    hnm: file(relativePath: { eq: "hnm.png" }) {
      ...childSharp
    }
    operationcode: file(relativePath: { eq: "operationcode.png" }) {
      ...childSharp
    }
    sdnedc: file(relativePath: { eq: "sdnedc.png" }) {
      ...childSharp
    }
  }
`
