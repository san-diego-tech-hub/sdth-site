import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { ThreeStep, CollabIcon, PillarRow, PillarIcon } from './styles'
import communityIcon from '../../images/icon_community.svg'
import educationIcon from '../../images/icon_education.svg'
import inclusionIcon from '../../images/icon_inclusion.svg'
import innovationIcon from '../../images/icon_innovation.svg'
import talentIcon from '../../images/icon_talent.svg'

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon,
}

export default () => (
  <StaticQuery
    query={homeQuery}
    render={({ homeJson, ...icons }) => (
      <main>
        <section>
          <h2>{homeJson.firstSectionTitle}</h2>
          <p>{homeJson.firstSectionDescription}</p>
        </section>

        <ThreeStep>
          <h2>{homeJson.secondSectionTitle}</h2>
          <p>{homeJson.secondSectionDescription}</p>
          <aside>
            {homeJson.secondSectionItems.map((c, i) => {
              const icon = icons[c.title]

              return (
                <div key={i}>
                  <CollabIcon>
                    <Img fluid={icon.childImageSharp.fluid} alt={c.title} />
                  </CollabIcon>
                  <h3>
                    {i + 1}. {c.title}
                  </h3>

                  <p className="description">{c.description}</p>
                </div>
              )
            })}
          </aside>
        </ThreeStep>

        <section>
          <h2>{homeJson.thirdSectionTitle}</h2>
          <p>{homeJson.thirdSectionDescription}</p>
          <PillarRow>
            {homeJson.thirdSectionItems.map((pillar, i) => (
              <PillarIcon key={i} background={pillar.background}>
                <div>
                  <img alt={pillar.title} src={pillarIcons[pillar.title]} height="75" />
                  <h4>{pillar.title}</h4>
                </div>
                <p>{pillar.description}</p>
              </PillarIcon>
            ))}
          </PillarRow>
        </section>
      </main>
    )}
  />
)

const homeQuery = graphql`
  query HOME_QUERY {
    homeJson {
      firstSectionTitle
      firstSectionDescription
      secondSectionTitle
      secondSectionDescription
      secondSectionItems {
        title
        description
      }
      thirdSectionTitle
      thirdSectionDescription
      thirdSectionItems {
        title
        description
        background
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
