/* eslint-disable no-param-reassign */

const moment = require("moment")

function createAddressString(address) {
  const fields = [
    "address_1",
    "address_2",
    "city_state",
    "zipcode",
  ]

  return fields
    .map(field => address[field])
    .filter(Boolean)
    .join(" ")
}

module.exports = {
  GoogleCalendarEvent(event) {
    const start = moment(new Date(event.start.dateTime))._d
    const end = moment(new Date(event.end.dateTime))._d
    const eventKey = `${event.summary}-${start}`

    const model = {
      title: event.summary,
      description: event.description,
      url: event.htmlLink,
      start,
      end,
      venue: {
        name: null, // Is it possible to add this to Google Calendar Events?
        address: event.location,
      },
    }

    return {
      model,
      eventKey,
    }
  },

  MeetupEvent(event) {
    const start = moment(new Date(event.time))._d
    const end = moment(new Date(event.time + event.duration))._d
    const eventKey = `${event.name}-${start}`

    if (!event.venue) {
      event.venue = {}
    }

    const addressFields = {
      address_1: event.venue.address_1,
      address_2: event.venue.address_2,
      city_state: [
        event.venue.city,
        event.venue.state,
      ].filter(Boolean).join(", "),
      zipcode: event.venue.zip,
    }

    const model = {
      title: event.name,
      description: (event.description || "").replace(/src="http:/g, "src=\"https:"),
      url: event.link,
      start,
      end,
      venue: {
        name: event.venue.name,
        address: createAddressString(addressFields),
      },
    }

    return {
      model,
      eventKey,
    }
  },

  EventbriteEvents(event) {
    const start = moment(new Date(event.start.utc))._d
    const end = moment(new Date(event.end.utc))._d
    const title = event.name.text
    const eventKey = `${title}-${start}`

    if (!event.description) {
      event.description = {}
    }

    if (!event.venue) {
      event.venue = {}
    }

    if (!event.venue.address) {
      event.venue.address = {}
    }

    const addressFields = {
      address_1: event.venue.address.address_1,
      address_2: event.venue.address.address_2,
      city_state: [
        event.venue.address.city,
        event.venue.address.region,
      ].filter(Boolean).join(", "),
      zipcode: event.venue.address.postal_code,
    }

    const model = {
      title,
      description: event.description.html,
      url: event.url,
      start,
      end,
      venue: {
        name: event.venue.name,
        address: createAddressString(addressFields),
      },
    }

    return {
      model,
      eventKey,
    }
  },
}
