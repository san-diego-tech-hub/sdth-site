import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Color from "color"

import communityIcon from "Images/icon_community.svg"
import educationIcon from "Images/icon_education.svg"
import inclusionIcon from "Images/icon_inclusion.svg"
import innovationIcon from "Images/icon_innovation.svg"
import talentIcon from "Images/icon_talent.svg"
import sdthLogo from "Images/ciricle-logo.svg"
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
  Why
} from "./styles"

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon
}

const FOUNDER_COLOR = Color("#545CFE").desaturate(0.2)

function Leadership() {
  const {
    markdownRemark: { frontmatter },
    ...avatars
  } = useStaticQuery(query)

  return (
    <main>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
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
                padding: 0
              }}
            >
              <Link
                to="/about"
                style={{
                  alignItems: "center",
                  color: "white",
                  display: "flex",
                  padding: "1.3rem",
                  textDecoration: "none"
                }}
              >
                <img
                  style={{ margin: 0, marginRight: "1rem" }}
                  height="30px"
                  src={sdthLogo}
                  alt="SDTH"
                />
                Founder
              </Link>
            </Label>
            <AvatarCard style={{ marginTop: "1rem" }}>
              <Img
                fluid={avatars.claude.childImageSharp.fluid}
                alt={frontmatter.founderName}
              />
            </AvatarCard>

            <div className="card-header">
              <div style={{ fontWeight: "700" }}>{frontmatter.founderName}</div>
              <div style={{ fontSize: "2rem" }}>{frontmatter.founderEmail}</div>

              <div className="card-text">
                <Why color={FOUNDER_COLOR.toString()}>
                  Why San Diego Tech Hub Is Important To Me
                </Why>
                <Blurb
                  dangerouslySetInnerHTML={{
                    __html: frontmatter.founderDescription
                  }}
                />
              </div>
            </div>
          </Card>
        </span>
        <PillarLeaders>
          {frontmatter.leadership.map(({ leader }) => {
            const icon = pillarIcons[leader.pillar]
            const photo = avatars[leader.photo]
            const baseColor = Color(
              pillarsInfo[leader.pillar].color
            ).desaturate(0.2)

            return (
              <Card color={baseColor.toString()} key={leader.name}>
                <Label style={{ background: baseColor.darken(0.2).toString() }}>
                  <Link
                    to={`/${leader.pillar}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: ".3rem"
                    }}
                  >
                    <img src={icon} width="30" alt={leader.pillar} />
                    {leader.pillar}
                  </Link>
                </Label>

                <AvatarCard>
                  <Img
                    fluid={photo.childImageSharp.fluid}
                    alt={leader.name}
                    style={{ borderRadius: "100%" }}
                  />
                </AvatarCard>

                <div className="card-header">
                  <div style={{ fontWeight: "700" }}>{leader.name}</div>
                  <div style={{ fontSize: "2rem" }}>{leader.email}</div>

                  <div className="card-text">
                    {leader.bioDescription ? (
                      <Why color={baseColor.darken(0.2).toString()}>
                        Why San Diego Tech Hub Is Important To Me
                      </Why>
                    ) : (
                      <div>
                        Please fill out the form below if you're interested in
                        becoming a pillar lead
                      </div>
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

export default Leadership

const query = graphql`
  query LeadershipQuery {
    markdownRemark(frontmatter: { path: { eq: "leadership" } }) {
      frontmatter {
        mainTitle
        mainDescription
        founderName
        founderEmail
        founderDescription
        leadership {
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

    avatar: file(relativePath: { eq: "avatar.png" }) {
      ...childSharp
    }
    jared: file(relativePath: { eq: "jared.jpg" }) {
      ...childSharp
    }
    fred_2: file(relativePath: { eq: "fred_2.jpg" }) {
      ...childSharp
    }
    aaron_gasperi: file(relativePath: { eq: "aaron_gasperi.jpg" }) {
      ...childSharp
    }
    roberts_michael_2: file(relativePath: { eq: "roberts_michael_2.jpg" }) {
      ...childSharp
    }
    christie: file(relativePath: { eq: "christie.jpg" }) {
      ...childSharp
    }
    anh_2: file(relativePath: { eq: "anh_2.jpg" }) {
      ...childSharp
    }
    yashar: file(relativePath: { eq: "yashar.jpg" }) {
      ...childSharp
    }
    kristin: file(relativePath: { eq: "kristin.jpg" }) {
      ...childSharp
    }
    nick: file(relativePath: { eq: "nick.jpg" }) {
      ...childSharp
    }
    connie: file(relativePath: { eq: "connie.jpg" }) {
      ...childSharp
    }
    jon: file(relativePath: { eq: "jon.jpg" }) {
      ...childSharp
    }
    claude: file(relativePath: { eq: "claude_2_cropped.png" }) {
      ...childSharp
    }

    blank: file(relativePath: { eq: "blank.png" }) {
      ...childSharp
    }
  }
`
