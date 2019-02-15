import React from 'react'
import { graphql } from 'gatsby'

export default ({data, ...props}) => (
  <textarea style={{width: '100vw', height: '100vh', fontSize: '2rem'}}>
    {JSON.stringify(data.meetupGroup, null, 2)}
  </textarea>
)

export const query = graphql`
  query MEETUP_QUERY {
    meetupGroup {
      name
      link
      description
      next_event {
        id
      }
      childrenMeetupEvent {
        name
        status
        link
        description
        visibility
        local_date
        local_time
        venue {
          name
          lat
          lon
          address_1
          city
          state
        }
      }
    }
  }
`