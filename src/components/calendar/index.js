import React, { useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import BigCalendar from "react-big-calendar"

import Details from "./details"
import "./styles.css"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = BigCalendar.momentLocalizer(moment)

function Calendar({ events }) {
  const [eventInfo, setEventInfo] = useState(null)

  const clearEventInfo = () => setEventInfo(null)

  const handleSelectEvent = (event, { pageX, pageY }) => {
    if (eventInfo) {
      clearEventInfo()
      return
    }

    const { scrollY } = window
    const { clientHeight, clientWidth } = document.documentElement

    const detailsX = Math.min(pageX, clientWidth - 300)
    const detailsY = Math.min(pageY, scrollY + clientHeight - 187)

    setEventInfo({
      event,
      position: { x: detailsX, y: detailsY },
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
        onClick={() => console.log("test")}
        onNavigate={clearEventInfo}
        onView={clearEventInfo}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        onSelectEvent={handleSelectEvent}
        style={{
          fontSize: "1.6rem",
          height: "700px",
          marginTop: "4.8rem",
          maxWidth: "715px",
          width: "100%"
        }}
      />
    </>
  )
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Calendar
