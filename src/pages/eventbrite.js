import React from 'react'
import { graphql } from 'gatsby'

export default ({ data, ...props}) => (
  <textarea style={{height: '100vh', width: '100vw', fontSize: '2rem'}}>
    {JSON.stringify(data, null, 2)}
  </textarea>
)

export const query = graphql`
  query EVENTBRITE_QUERY {
    allEventbriteEvents {
      edges {
        node {
          name {
            text
          }
          description {
            text
          }
          venue {
            name
            latitude
            longitude
            address {
              address_1
              city
              postal_code
            }
          }
          start {
            local
          }
          end {
            local
          }
          status
          url
        }
      } 
    }
  }
`