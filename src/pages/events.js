import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import truncateString from '../utils/truncate'

// worst case scenario to style calender
// import './styles.css'

const localizer = Calendar.momentLocalizer(moment)

function EventIndex({ data, ...props }) {
  const [eventInfo, setEventInfo] = useState(null)

  const handleClickEvent = (event, { pageX, pageY, ...rest }) => {
    if (eventInfo) {
      setEventInfo(null)
      return
    }

    console.log(rest)

    setEventInfo({
      event,
      position: { x: pageX, y: pageY },
    })
  }

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

  console.log(eventInfo)
  return (
    <Layout pageProps={props}>
      <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />

      {eventInfo && (
        <div
          style={{
            zIndex: '999999',
            background: '#FFF',
            padding: '1.6rem',
            borderRadius: '.5rem',
            border: '1px solid #555',
            boxShadow: '1px 1px 1px #555',
            maxWidth: '30rem',
            fontSize: '1.2rem',
            position: 'absolute',
            top: eventInfo.position.y + 'px',
            left: eventInfo.position.x + 'px'
          }}
        >
          <aside style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <h4>{eventInfo.event.title}</h4>
            <Link to="/">See more</Link>
          </aside>
          <div dangerouslySetInnerHTML={{ __html: truncateString(eventInfo.event.description) }} />
        </div>
      )}

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={realEvents}
        onSelectEvent={handleClickEvent}
        style={{
          height: '700px',
          maxWidth: '80%',
          margin: 'auto',
          marginTop: '4.8rem',
          fontSize: '1.6rem',
        }}
      />
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
