import React from 'react'
import { graphql } from 'gatsby'
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'

const localizer = Calendar.momentLocalizer(moment);
export default class extends React.Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "San Diego Tech Hub"
      },
      {
        start: new Date(),
        end: new Date(moment().add(2, "days")),
        title: "Web Design Team"
      }
    ]
  }
  

  render () {
    console.log(this.props)
    return (
      <Layout pageProps={this.props}>
        <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />
        <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "100vh" }}
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
        }
      }
    }
  }
`
