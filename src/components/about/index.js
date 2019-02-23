import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import claude1 from 'Images/claude_1.png'
import claude2 from 'Images/claude_2.png'
import goals from 'Images/goals.svg'
import heart from 'Images/heart.svg'
import tasks from 'Images/tasks.svg'
import silos from 'Images/silos.svg'
import judge from 'Images/judge.svg'
import conversations from 'Images/conversations.svg'
import { RebuildSection, FounderSection, ChallengesSection, ChallengeIcon, AboutSection } from './styles'

const icons = { goals, heart, tasks, silos, judge, conversations }

const About = () => (
  <StaticQuery
    query={aboutQuery}
    render={({ aboutJson }) => (
      <main>
        <FounderSection>
          <h2>{aboutJson.secondSectionTitle}</h2>

          <p>
            <img
              src={claude1}
              style={{ float: 'left', marginRight: '1rem' }}
              alt="Young Claude Jones"
              width="200"
            />
          </p>
          <p>
            Claude Jones has a passion for creating opportunities for others to succeed. This
            passion was shaped by the adversities he faced in his youth. Not knowing his birth
            father, Claude was raised by his mother and step-father. His upbringing was harsh, both
            of his parents worked so he was responsible for taking care of his 3 younger siblings,
            he faced verbal and physical abuse at home and racism in his community. Feeling like the
            weight of the world was on his shoulders, he would constantly wonder if the world would
            be a better place without him in it.
          </p>
          <p>
            When all hope seemed lost, things changed in the Spring of 1989. A school counselor
            noticed something in Claude. He pulled him in, created a supportive environment,
            encouraged him to believe in himself, and provided a structure and example of setting
            and achieve goals. This transformative act of acknowledgment set the tone for Claude and
            helped shape who he is today.
          </p>
          <p>
            Based on his personal experiences, Claude's philosophy in life is "perseverance will
            help you overcome all obstacles". From a young age Claude has been paving his own way,
            overcoming obstacles with the help of mentors and coaches. From starting his first
            business at age 12 to raise money for a video game console, to being a self-taught
            developer, his personal motivation to better himself created opportunities for him to
            take advantage of various situations. And through his blessings he would like to pay it
            forward by creating opportunities for others that might need a helping hand.
          </p>

          <p>
            <img src={claude2} style={{ float: 'right' }} alt="Claude Jones" width="200" />
            Today, Claude Jones is a seasoned technical leader with over 15 years of experience. He
            is currently the site lead for Walmart Labs in Carlsbad helping to contribute to the
            growing tech culture here in San Diego. In addition, Claude continues to pay it forward.
            In his spare time he runs the Elevate Foundation, an organization he started focused on
            giving back to the community by helping others in need. He started The Practical
            Leadership Guy where he offers free services for motivational speaking, life coaching,
            and his thoughts through his blog to encouraging others to be the best they can be.
          </p>
          <p>
            Claude sees San Diego Tech Hub as an extension of his passions to continue bringing
            people together for the greater good. In Claude's own words: "We should never wait for
            opportunities to come when we can create them for ourselves."
          </p>
          <div style={{ clear: 'both' }} />
        </FounderSection>

        <AboutSection>
          <h2>{aboutJson.firstSectionTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutJson.firstSectionDescription }} />
        </AboutSection>

        <ChallengesSection>
          <ChallengeIcon>
            {aboutJson.fourthSectionItems.map((item, i) => {
              return (
                <div key={i}>
                  <img src={icons[item.icon]} alt={item.header} width="100" />
                  <span>
                    <h4>{item.header}</h4>
                    <p>{item.text}</p>
                  </span>
                </div>
              )
            })}
          </ChallengeIcon>

          <span>
            <h2>{aboutJson.fourthSectionTitle}</h2>
            <p>{aboutJson.fourthSectionDescription}</p>
          </span>
        </ChallengesSection>

        <RebuildSection>
          <span>
            <h2>{aboutJson.thirdSectionTitle}</h2>
            <p>{aboutJson.thirdSectionDescription}</p>
          </span>

          <span>
            {aboutJson.thirdSectionItems.map((s, i) => (
              <div className="rebuild-panel" key={i}>
                <img src={icons[s.icon]} alt={s.title} width="100" />
                <span>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </span>
              </div>
            ))}
          </span>
        </RebuildSection>
      </main>
    )}
  />
)

const aboutQuery = graphql`
  query ABOUT_QUERY {
    aboutJson {
      firstSectionTitle
      firstSectionDescription
      secondSectionTitle
      secondSectionDescription
      thirdSectionTitle
      thirdSectionDescription
      thirdSectionItems {
        title
        description
        icon
      }
      fourthSectionTitle
      fourthSectionDescription
      fourthSectionItems {
        icon
        header
        text
      }
    }
  }
`
export default About
