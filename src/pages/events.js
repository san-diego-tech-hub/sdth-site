import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import Calendar from '../components/calendar'

function EventIndex({ data, ...props }) {
  const events = data.allEvent.edges.map(({ node }) => ({
    ...node,
    start: moment(new Date(node.start))._d,
    end: moment(new Date(node.end))._d,
  }))

  return (
    <Layout pageProps={props}>
      <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />

      <Calendar events={events} />

      <Events events={events.slice(0, 10)} />
    </Layout>
  )
}

EventIndex.propTypes = {
  data: PropTypes.shape({
    allEvent: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query EVENTS {
    allEvent {
      edges {
        node {
          id
          title
          description
          start
          end
        }
      }
    }
  }
`

export default EventIndex
