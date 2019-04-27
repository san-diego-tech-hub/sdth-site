import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Color from "color"

import communityIcon from "Images/misc/icon_community.svg"
import educationIcon from "Images/misc/icon_education.svg"
import inclusionIcon from "Images/misc/icon_inclusion.svg"
import innovationIcon from "Images/misc/icon_innovation.svg"
import talentIcon from "Images/misc/icon_talent.svg"
import sdthLogo from "Images/misc/circle-logo.svg"
import Html from "Common/Html"
import { pillarsInfo } from "Utils/constants"
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

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon,
}

const FOUNDER_COLOR = Color("#545CFE").desaturate(0.2)

function Team() {
  const {
    markdownRemark: { frontmatter },
    teamPhotos
  } = useStaticQuery(query)

  const avatars = teamPhotos.edges.reduce((obj, edge) => ({
    ...obj,
    [edge.node.relativePath.replace(/\..+$/, "")]: edge.node.childImageSharp.fluid
  }), {})

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
        <span>
          <Card
            color={FOUNDER_COLOR.toString()}
            style={{ width: "50%", margin: "auto" }}
          >
            <Label
              style={{
                background: FOUNDER_COLOR.darken(0.15).toString(),
                padding: 0,
              }}
            >
              <Link
                to="/about"
                style={{
                  alignItems: "center",
                  color: "white",
                  display: "flex",
                  padding: "1.3rem",
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
              </Link>
            </Label>
            <AvatarCard style={{ marginTop: "1rem" }}>
              <Img
                fluid={avatars.claude_2_cropped}
                alt={frontmatter.founderName}
              />
            </AvatarCard>

            <div className="card-header">
              <div style={{ fontWeight: "700" }}>{frontmatter.founderName}</div>
              <div style={{ fontSize: "2rem" }}>{frontmatter.founderEmail}</div>

              <div className="card-text">
                <Why color={FOUNDER_COLOR.darken(0.4).toString()}>
                  Why San Diego Tech Hub Is Important To Me
                </Why>
                <Blurb
                  dangerouslySetInnerHTML={{
                    __html: frontmatter.founderDescription,
                  }}
                />
              </div>
            </div>
          </Card>
        </span>
        <PillarLeaders>
          {frontmatter.team.map(({ leader }) => {
            const icon = pillarIcons[leader.pillar]
            const baseColor = Color(
              pillarsInfo[leader.pillar].color,
            ).desaturate(0.2)

            return (
              <Card color={baseColor.toString()} key={leader.name}>
                <Label
                  style={{
                    background: baseColor.darken(0.2).toString(),
                    padding: 0
                  }}
                >
                  <Link
                    to={`/${leader.pillar}`}
                    style={{
                      alignItems: "center",
                      color: "white",
                      display: "flex",
                      padding: "1.3rem",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      alt={leader.pillar}
                      height="25px"
                      src={icon}
                      style={{ margin: 0, marginRight: "0.8rem" }}
                    />
                    {leader.pillar}
                  </Link>
                </Label>
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
                      <Why color={baseColor.darken(0.4).toString()}>
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
        founderName
        founderEmail
        founderDescription
        team {
          leader {
            name
            email
            pillar
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
