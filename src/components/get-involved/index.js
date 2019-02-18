import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ChallengesSection, ChallengeIcon } from './styles'
import silos from 'Images/silos.svg'
import judge from 'Images/judge.svg'
import conversations from 'Images/conversations.svg'

const icons = { silos, judge, conversations }

const GetInvolved = () => (
  <StaticQuery
    query={query}
    render={({ getInvolvedJson }) => (
      <main>
        <section>
          <h2>{getInvolvedJson.firstSectionTitle}</h2>
          <p>{getInvolvedJson.firstSectionDescription}</p>
        </section>

        <ChallengesSection>
          <span>
            <h2>{getInvolvedJson.secondSectionTitle}</h2>
            <p>{getInvolvedJson.secondSectionDescription}</p>
          </span>

          <ChallengeIcon>
            {getInvolvedJson.secondSectionItems.map((item, i) => {
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
        </ChallengesSection>
      </main>
    )}
  />
)

const query = graphql`
  query GETINVOLVED_QUERY {
    getInvolvedJson {
      firstSectionTitle
      firstSectionDescription
      secondSectionTitle
      secondSectionDescription
      secondSectionItems {
        icon
        header
        text
      }
    }
  }
`

export default GetInvolved
