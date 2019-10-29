import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Color from "color"
import { aggregateImages } from "Utils"

import sdthLogo from "Images/misc/circle-logo.svg"
import Html from "Common/Html"
import {
  AvatarCard,
  Blurb,
  Card,
  Label,
  Header,
  PillarLeaders,
  TeamSection,
  Why,
} from "./styles"

const CARD_COLOR = Color("#545CFE").desaturate(0.2)

function Team() {
  const {
    markdownRemark: { frontmatter },
    teamPhotos
  } = useStaticQuery(query)

  const avatars = aggregateImages(teamPhotos)

  return (
    <main>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h2>{frontmatter.mainTitle}</h2>
          <Html>
            {frontmatter.mainDescription}
          </Html>
        </div>
      </Header>

      <TeamSection>
        <PillarLeaders>
          {frontmatter.team.map(({ leader }, i) => {
            return (
              <Card
                color={CARD_COLOR.toString()}
                key={leader.name}
                style={{
                  paddingTop: i === 0 ? 0 : "5.4rem"
                }}
              >
                {i === 0 && (
                  <Label
                    style={{
                      background: CARD_COLOR.darken(0.2).toString(),
                      padding: 0
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        color: "white",
                        display: "flex",
                        padding: "1.3rem",
                        paddingTop: 0,
                        textDecoration: "none",
                      }}
                    >
                      <img
                        alt="SDTH"
                        height="30px"
                        src={sdthLogo}
                        style={{ margin: 0, marginRight: "1rem" }}
                      />
                      Founder
                    </div>
                  </Label>
                )}
                <AvatarCard>
                  <Img
                    fluid={avatars[leader.photo]}
                    alt={leader.name}
                    style={{ borderRadius: "100%" }}
                  />
                </AvatarCard>

                <div className="card-header">
                  <div style={{ fontWeight: "700" }}>{leader.name}</div>
                  <div style={{ fontSize: "2rem" }}>{leader.email}</div>

                  <div className="card-text">
                    {leader.name !== "TBD" && (
                      <Why color={CARD_COLOR.darken(0.4).toString()}>
                        Why San Diego Tech Hub Is Important To Me
                      </Why>
                    )}
                    <Blurb
                      dangerouslySetInnerHTML={{ __html: leader.bioDescription }}
                    />
                  </div>
                </div>
              </Card>
            )
          })}
        </PillarLeaders>
      </TeamSection>
    </main>
  )
}

export default Team

const query = graphql`
  query TeamQuery {
    markdownRemark(frontmatter: { path: { eq: "team" } }) {
      frontmatter {
        mainTitle
        mainDescription
        team {
          leader {
            name
            email
            bioDescription
            photo
          }
        }
      }
    }

    teamPhotos: allFile(filter: { sourceInstanceName: { eq: "team" } }) {
      edges {
        node {
          relativePath
          ...childSharp
        }
      }
    }
  }
`
