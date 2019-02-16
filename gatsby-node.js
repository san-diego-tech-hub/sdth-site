const { google } = require('googleapis')
const path = require('path')
const moment = require('moment')

const { GC_CLIENT_EMAIL, GC_PRIVATE_KEY, GC_ID } = process.env

function authenticate() {
  const jwtClient = new google.auth.JWT(GC_CLIENT_EMAIL, null, GC_PRIVATE_KEY, [
    'https://www.googleapis.com/auth/calendar',
  ])

  return new Promise(res => {
    jwtClient.authorize(err => {
      if (err) {
        throw new Error(err)
      }
      res(jwtClient)
    })
  })
}

function getEvents(auth) {
  return new Promise(async (res, reject) => {
    const calender = google.calendar('v3')

    let resp
    try {
      resp = await calender.events.list({
        auth,
        calendarId: GC_ID,
      })
    } catch (err) {
      reject(err)
    }
    res(resp.data)
  })
}

const uniqueEvents = new Set();

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const jwtClient = await authenticate()
  const data = await getEvents(jwtClient)

  data.items.forEach(event => {
    // console.log(event.attachments);
    const start = moment(new Date(event.start.dateTime))._d
    const eventKey = `${event.summary}-${start}`

    if (uniqueEvents.has(eventKey)) {
      return
    }

    uniqueEvents.add(eventKey)

    const nodeMeta = {
      id: createNodeId(`my-data-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'CalendarEvent',
        content: JSON.stringify(event),
        contentDigest: createContentDigest(event),
      },
    }

    const node = Object.assign({}, event, nodeMeta)
    createNode(node)
  })

  return
}

exports.onCreateNode = ({ node, actions }) => {
  const { deleteNode } = actions

  if (node.internal.type === 'MeetupEvent') {
    const start = moment(new Date(node.time))._d
    const eventKey = `${node.name}-${start}`

    if (uniqueEvents.has(eventKey)) {
      deleteNode({ node })
    } else {
      uniqueEvents.add(eventKey)
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('src/pages/event.js')

  return graphql(`
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
  `).then(results => {
    if (results.errors) {
      reject('the error', results.errors)
    }

    const allEvents = results.data.allCalendarEvent.edges
      .map(({ node }) => ({ ...node }))
      .concat(results.data.meetupGroup.childrenMeetupEvent)

    allEvents.forEach(event => {
      createPage({
        path: `/event/${event.id}`,
        component: template,
        context: { event: event },
      })
    })
  })
}
