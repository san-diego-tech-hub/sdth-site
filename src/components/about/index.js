import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import claude1 from "Images/misc/claude_1.png"
import claude2 from "Images/team/claude_2.png"
import goals from "Images/misc/goals.svg"
import heart from "Images/misc/heart.svg"
import tasks from "Images/misc/tasks.svg"
import silos from "Images/misc/silos.svg"
import judge from "Images/misc/judge.svg"
import conversations from "Images/misc/conversations.svg"
import Html from "Common/Html"

import {
  AboutSection,
  AboutContent,
  ChallengeIcon,
  ChallengesSection,
  FounderSection,
  RebuildContent,
  RebuildSection,
  WhatisSDTH
} from "./styles"

const icons = {
  goals,
  heart,
  tasks,
  silos,
  judge,
  conversations
}

function About() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(aboutQuery)

  return (
    <main>
      <WhatisSDTH>
        <h2>{frontmatter.whatisSDTHTitle}</h2>
        <Html style={{ fontSize: "1.7rem", margin: "0 auto" }}>
          {frontmatter.whatisSDTHDescription}
        </Html>
      </WhatisSDTH>

      <FounderSection>
        <h2>{frontmatter.founderTitle}</h2>
        <p>
          <img
            src={claude1}
            style={{ float: "left", marginRight: "1rem" }}
            alt="Young Claude Jones"
            width="200"
          />
        </p>
        <Html>{frontmatter.founderDescription1}</Html>

        <img
          src={claude2}
          style={{ float: "left", marginRight: "1rem" }}
          alt="Young Claude Jones"
          width="200"
        />
        <Html>{frontmatter.founderDescription2}</Html>
        <div style={{ clear: "both" }} />
      </FounderSection>

      <AboutSection>
        <AboutContent>
          <h2>{frontmatter.aboutTitle}</h2>
          <Html>
            {frontmatter.aboutDescription}
          </Html>
        </AboutContent>
      </AboutSection>

      <ChallengesSection>
        <ChallengeIcon>
          {frontmatter.challengesItems.map(({ challengesItem }) => {
            const imgSrc = icons[challengesItem.icon]
            return (
              <div key={challengesItem.header}>
                <img src={imgSrc} alt={challengesItem.header} width="100" />
                <span>
                  <h4>{challengesItem.header}</h4>
                  <p>{challengesItem.text}</p>
                </span>
              </div>
            )
          })}
        </ChallengeIcon>

        <span className="title-description">
          <h2>{frontmatter.challengesTitle}</h2>
          <Html>
            {frontmatter.challengesDescription}
          </Html>
        </span>
      </ChallengesSection>

      <RebuildSection>
        <RebuildContent>
          <span className="title-description">
            <h2>{frontmatter.solutionsTitle}</h2>
            <Html>
              {frontmatter.solutionsDescription}
            </Html>
          </span>

          <span>
            {frontmatter.solutionsItems.map(({ solutionItem }) => (
              <div className="rebuild-panel" key={solutionItem.header}>
                <img
                  src={icons[solutionItem.icon]}
                  alt={solutionItem.header}
                  width="100"
                />
                <span>
                  <h4>{solutionItem.header}</h4>
                  <p>{solutionItem.text}</p>
                </span>
              </div>
            ))}
          </span>
        </RebuildContent>
      </RebuildSection>
    </main>
  )
}

const aboutQuery = graphql`
  query ABOUT_QUERY {
    markdownRemark(frontmatter: { path: { eq: "about" } }) {
      frontmatter {
        whatisSDTHTitle
        whatisSDTHDescription
        founderTitle
        founderDescription1
        founderDescription2

        aboutTitle
        aboutDescription
        challengesTitle
        challengesDescription
        challengesItems {
          challengesItem {
            header
            text
            icon
          }
        }
        solutionsTitle
        solutionsDescription
        solutionsItems {
          solutionItem {
            icon
            header
            text
          }
        }
      }
    }
  }
`

export default About
