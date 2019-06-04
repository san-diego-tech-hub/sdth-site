import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { aggregateImages } from "Utils"
import ExternalLink from "Common/ExternalLink"
import Html from "Common/Html"

function Partners() {
  const {
    markdownRemark: { frontmatter },
    partnerLogos,
    sponsorLogos
  } = useStaticQuery(query)

  const partnerImages = aggregateImages(partnerLogos)
  const sponsorImages = aggregateImages(sponsorLogos)

  return (
    <Container>
      <PartnerSection repeat={2}>
        <h2>{frontmatter.sponsorsTitle}</h2>
        <Html className="description">
          {frontmatter.sponsorsDescription}
        </Html>
        <div className="partners">
          {frontmatter.sponsors.map(({ sponsor }) => (
            <ExternalLink
              key={sponsor.name}
              className="partner"
              style={{ width: "100%" }}
              href={sponsor.website}
            >
              <Img
                alt={sponsor.name}
                fluid={sponsorImages[sponsor.logo]}
                style={{ width: "100%", display: "flex", alignItems: "center" }}
              />
            </ExternalLink>
          ))}
        </div>
      </PartnerSection>

      <PartnerSection repeat={4}>
        <h2>{frontmatter.partnersTitle}</h2>
        <Html className="description">
          {frontmatter.partnersDescription}
        </Html>
        <div className="partners">
          {frontmatter.partners.map(({ partner }) => (
            <ExternalLink
              key={partner.name}
              className="partner"
              style={{ width: "100%" }}
              href={partner.website}
            >
              <Img
                alt={partner.name}
                fluid={partnerImages[partner.logo]}
                style={{ width: "100%"  }}
              />
            </ExternalLink>
          ))}
        </div>
      </PartnerSection>
    </Container>
  )
}

export default Partners

const Container = styled.div`
  max-width: 1200px;
  text-align: center;

  @media (max-width: 1100px) {
    margin: 0 !important;
  }

  @media (max-width: 450px) {
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
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    padding-top: 3.2rem;
    justify-content: center;

    .partner {
      align-items: center;
      border: 1px solid transparent;
      border-radius: 0.5rem;
      display: flex;
      flex-basis: 25%;
      padding: 3rem 1.5rem;

      &:hover, &:focus {
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        transform: translate(-2px, -2px);
      }

      @media (max-width: 698px) {
        flex-basis: 33%;
      }

      @media (max-width: 450px) {
        flex-basis: 50%;
      }

      @media (max-width: 320px) {
        flex-basis: 100%;
      }
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
    markdownRemark(frontmatter: { path: { eq: "partners" } }) {
      frontmatter {
        partnersTitle
        partnersDescription
        partners {
          partner {
            name
            website
            logo
          }
        }
        sponsorsTitle
        sponsorsDescription
        sponsors {
          sponsor {
            website
            name
            logo
          }
        }
      }
    }

    partnerLogos: allFile(filter: { sourceInstanceName: { eq: "partnerLogos" } }) {
      edges {
        node {
          relativePath
          ...childSharp
        }
      }
    }

    sponsorLogos: allFile(filter: { sourceInstanceName: { eq: "sponsorLogos" } }) {
      edges {
        node {
          relativePath
          ...childSharp
        }
      }
    }
  }
`
