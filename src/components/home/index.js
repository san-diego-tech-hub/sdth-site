import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import communityIcon from "Images/misc/icon_community.svg"
import educationIcon from "Images/misc/icon_education.svg"
import inclusionIcon from "Images/misc/icon_inclusion.svg"
import innovationIcon from "Images/misc/icon_innovation.svg"
import talentIcon from "Images/misc/icon_talent.svg"
import Html from "Common/Html"
import HomeTitle from "./HomeTitle"
import {
  Collaboration,
  CollabIcon,
  PillarDescription,
  PillarIcon,
  PillarRow,
  ThreeStep,
  WhatIsSDTH
} from "./styles"

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon
}

function Home() {
  const {
    markdownRemark: { frontmatter },
    ...icons
  } = useStaticQuery(homeQuery)

  return (
    <main>
      <HomeTitle>
        <WhatIsSDTH>
          <div style={{ maxWidth: "570px", zIndex: 2 }}>
            <h2 style={{ color: "white" }}>
              {frontmatter.mainTitle}
            </h2>
            <Html style={{ fontSize: "1.5rem" }}>
              {frontmatter.mainDescription}
            </Html>
          </div>
        </WhatIsSDTH>
      </HomeTitle>
      <Collaboration>
        <h2>{frontmatter.collabTitle}</h2>
        <Html style={{ fontSize: "1.7rem", margin: "0 auto", maxWidth: "500px", padding: "0 1rem" }}>
          {frontmatter.collabDescription}
        </Html>
      </Collaboration>

      <ThreeStep>
        <aside>
          {frontmatter.collabItems.map((c, i) => {
            const { title, description } = c.collabItem
            const icon = icons[title]

            return (
              <div style={{ margin: "0 2rem", maxWidth: "300px" }} key={title}>
                <CollabIcon>
                  <Img fluid={icon.childImageSharp.fluid} alt={title} />
                </CollabIcon>
                <h3>
                  {i + 1}. {title}
                </h3>

                <p className="description">{description}</p>
              </div>
            )
          })}
        </aside>
      </ThreeStep>

      <PillarDescription>
        <h2>{frontmatter.pillarsTitle}</h2>
        <Html>
          {frontmatter.pillarsDescription}
        </Html>
      </PillarDescription>
      <PillarRow>
        {frontmatter.pillarIcons.map(pillar => (
          <PillarIcon
            to={`/${pillar.pillarItem.title}`}
            key={pillar.pillarItem.title}
            background={pillar.pillarItem.background}
          >
            <div>
              <img
                alt={pillar.pillarItem.title}
                src={pillarIcons[pillar.pillarItem.title]}
                height="75"
              />
              <h4>{pillar.pillarItem.title}</h4>
            </div>
            <p>{pillar.pillarItem.description}</p>
          </PillarIcon>
        ))}
      </PillarRow>
    </main>
  )
}

export default Home

const homeQuery = graphql`
  query HOME_QUERY {
    markdownRemark(frontmatter: { path: { eq: "home" } }) {
      frontmatter {
        mainTitle
        mainDescription
        collabTitle
        collabDescription
        collabItems {
          collabItem {
            title
            description
          }
        }
        pillarsTitle
        pillarsDescription
        pillarIcons {
          pillarItem {
            title
            description
            background
          }
        }
      }
    }

    connect: file(relativePath: { eq: "connect-new.png" }) {
      ...childSharp
    }
    empower: file(relativePath: { eq: "empower-new.png" }) {
      ...childSharp
    }
    inform: file(relativePath: { eq: "inform-new.png" }) {
      ...childSharp
    }
  }
`

export const fragment = graphql`
  fragment childSharp on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
