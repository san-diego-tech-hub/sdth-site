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
        <h2>{frontmatter.mainTitle}</h2>

        <p>
          <img
            src={claude1}
            style={{ float: "left", marginRight: "1rem" }}
            alt="Young Claude Jones"
            width="200"
          />
        </p>
        <p>
          Claude Jones has a passion for creating opportunities for others to
          succeed. This passion was shaped by the adversities he faced in his
          youth. Not knowing his birth father, Claude was raised by his mother
          and step-father. His upbringing was harsh, both of his parents worked
          so he was responsible for taking care of his 3 younger siblings, he
          faced verbal and physical abuse at home and racism in his community.
          Feeling like the weight of the world was on his shoulders, he would
          constantly wonder if the world would be a better place without him in
          it.
        </p>
        <p>
          When all hope seemed lost, things changed in the Spring of 1989. A
          school counselor noticed something in Claude. He pulled him in,
          created a supportive environment, encouraged him to believe in
          himself, and provided a structure and example of setting and achieve
          goals. This transformative act of acknowledgment set the tone for
          Claude and helped shape who he is today.
        </p>
        <p>
          Based on his personal experiences, Claude's philosophy in life is
          "perseverance will help you overcome all obstacles". From a young age
          Claude has been paving his own way, overcoming obstacles with the help
          of mentors and coaches. From starting his first business at age 12 to
          raise money for a video game console, to being a self-taught
          developer, his personal motivation to better himself created
          opportunities for him to take advantage of various situations. And
          through his blessings he would like to pay it forward by creating
          opportunities for others that might need a helping hand.
        </p>

        <p>
          <img
            src={claude2}
            style={{ float: "right" }}
            alt="Claude Jones"
            width="200"
          />
          Today, Claude Jones is a seasoned technical leader with over 15 years
          of experience. He is currently the site lead for Walmart Labs in
          Carlsbad helping to contribute to the growing tech culture here in San
          Diego. In addition, Claude continues to pay it forward. In his spare
          time he runs the Elevate Foundation, an organization he started
          focused on giving back to the community by helping others in need. He
          started The Practical Leadership Guy where he offers free services for
          motivational speaking, life coaching, and his thoughts through his
          blog to encouraging others to be the best they can be.
        </p>
        <p>
          Claude sees San Diego Tech Hub as an extension of his passions to
          continue bringing people together for the greater good. In Claude's
          own words: "We should never wait for opportunities to come when we can
          create them for ourselves."
        </p>
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
        mainTitle
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
