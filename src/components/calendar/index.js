import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'

import Details from './details'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment)

// worst case scenario to style calender
// import './styles.css'

function Calendar({ events }) {
  const [eventInfo, setEventInfo] = useState(null)

  const clearEventInfo = () => setEventInfo(null)

  const handleSelectEvent = (event, { pageX, pageY }) => {
    if (eventInfo) {
      clearEventInfo()
      return
    }

    setEventInfo({
      event,
      position: { x: pageX, y: pageY },
    })
  }

  return (
    <>
      {eventInfo && (
        <Details
          x={eventInfo.position.x}
          y={eventInfo.position.y}
          eventInfo={eventInfo}
          setEventInfo={setEventInfo}
        />
      )}
      <BigCalendar
        onClick={() => console.log('test')}
        onNavigate={clearEventInfo}
        onView={clearEventInfo}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        onSelectEvent={handleSelectEvent}
        style={{
          height: '700px',
          maxWidth: '80%',
          margin: 'auto',
          marginTop: '4.8rem',
          fontSize: '1.6rem',
        }}
      />
    </>
  )
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Calendar
