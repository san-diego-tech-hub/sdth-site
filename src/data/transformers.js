const moment = require('moment')

module.exports = {
  GoogleCalendarEvent(event) {
    const start = moment(new Date(event.start.dateTime))._d
    const end = moment(new Date(event.end.dateTime))._d
    const eventKey = `${event.summary}-${start}`

    const model = {
      title: event.summary,
      description: event.description,
      start,
      end
    }

    return {
      model,
      eventKey
    }
  },
  MeetupEvent(event) {
    const start = moment(new Date(event.time))._d
    const end = moment(new Date(event.time + event.duration))._d
    const eventKey = `${event.name}-${start}`

    const model = {
      title: event.name,
      description: event.description,
      start,
      end,
    }

    return {
      model,
      eventKey
    }
  },
  EventbriteEvents(event) {
    const start = moment(new Date(event.start.local))._d
    const end = moment(new Date(event.end.local))._d
    const title = event.name.text
    const eventKey = `${title}-${start}`

    const model = {
      title,
      description: event.description.html,
      start,
      end,
    }

    return {
      model,
      eventKey
    }
  }
}
