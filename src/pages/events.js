import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'

export default props => (
  <Layout pageProps={props}>
    <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />
    <Events events={props.data.allCalendarEvent.edges} />
  </Layout>
)

export const query = graphql`
  query CALENDAR_EVENTS {
    allCalendarEvent {
      edges {
        node {
          id
          summary
          description
          location
        }
      }
    }
  }
`
