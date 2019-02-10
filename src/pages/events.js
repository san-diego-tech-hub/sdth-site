import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import Calendar from '../components/calendar'

function EventIndex({ data, ...props }) {
  const realEvents = data.allCalendarEvent.edges.map(event => {
    let start = moment(new Date(event.node.start.dateTime))
    let end = moment(new Date(event.node.end.dateTime))

    // const allDay = start.format('H:mm') === end.format('H:mm')
    // if (allDay) {
    //   end = end.subtract(1, 'days')
    // }

    return {
      title: event.node.summary,
      start: start._d,
      end: end._d,
      // allDay,
      description: event.node.description,
    }
  })

  return (
    <Layout pageProps={props}>
      <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />

      <Calendar events={realEvents} />

      <Events events={data.allCalendarEvent.edges} />
    </Layout>
  )
}

EventIndex.propTypes = {
  data: PropTypes.shape({
    allCalendarEvent: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query CALENDAR_EVENTS {
    allCalendarEvent {
      edges {
        node {
          id
          summary
          description
          location
          end {
            # date(formatString: "M/DD/YYYY h:mm:ss z")
            dateTime(formatString: "M/DD/YYYY h:mm:ss z")
          }
          start {
            # date(formatString: "M/DD/YYYY h:mm:ss z")
            dateTime(formatString: "M/DD/YYYY h:mm:ss z")
          }
        }
      }
    }
  }
`

export default EventIndex
