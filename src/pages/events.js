import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import Calendar from '../components/calendar'

function EventIndex({ data, ...props }) {
  const googleCalendarEvents = data.allCalendarEvent.edges.map(event => {
    const start = moment(new Date(event.node.start.dateTime))
    const end = moment(new Date(event.node.end.dateTime))

    // const allDay = start.format('H:mm') === end.format('H:mm')
    // if (allDay) {
    //   end = end.subtract(1, 'days')
    // }

    return {
      id: event.node.id,
      title: event.node.summary,
      start: start._d,
      end: end._d,
      // allDay,
      description: event.node.description,
    }
  })

  const meetupEvents = data.meetupGroup.childrenMeetupEvent.map(event => {
    const start = moment(new Date(event.time))
    const end = moment(new Date(event.time + event.duration))
    return {
      id: event.id,
      title: event.name,
      description: event.description,
      start: start._d,
      end: end._d,
    }
  })

  const realEvents = [
    ...googleCalendarEvents,
    ...meetupEvents,
  ]

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
  query EVENTS {
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
    meetupGroup {
      name
      link
      description
      next_event {
        id
      }
      childrenMeetupEvent {
        id
        name
        link
        description
        duration
        time
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

export default EventIndex
