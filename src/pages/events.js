import React from 'react'
import { graphql } from 'gatsby'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'

// worst case scenario to style calender
// import './styles.css'

const localizer = Calendar.momentLocalizer(moment)
export default class extends React.Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
        title: 'San Diego Tech Hub',
      },
      {
        start: new Date(),
        end: new Date(moment().add(2, 'days')),
        title: 'Web Design Team',
      },
    ],
  }

  render() {
    // console.log(moment().add(2, 'days')._d)
    console.log(this.props.data.allCalendarEvent)
    const realEvents = this.props.data.allCalendarEvent.edges.map(event => {
      let start = moment(new Date(event.node.start.date || event.node.start.dateTime))
      let end = moment(new Date(event.node.end.date || event.node.end.dateTime))

      const allDay = start.format('H:mm') === end.format('H:mm')
      if (allDay) {
        end = end.subtract(1, 'days')
      }

      return {
        title: event.node.summary,
        start: start._d,
        end: end._d,
        allDay,
      }
    })

    return (
      <Layout pageProps={this.props}>
        <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={realEvents}
          style={{ height: '100vh' }}
        />
        <Events events={this.props.data.allCalendarEvent.edges} />
      </Layout>
    )
  }
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
            date(formatString: "M/DD/YYYY h:mm:ss z")
            dateTime(formatString: "M/DD/YYYY h:mm:ss z")
          }
          start {
            date(formatString: "M/DD/YYYY h:mm:ss z")
            dateTime(formatString: "M/DD/YYYY h:mm:ss z")
          }
        }
      }
    }
  }
`
