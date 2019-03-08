const { google } = require("googleapis")
const path = require("path")
const transformers = require("./src/data/transformers")

const { GC_ID } = process.env

function authenticate() {
  const privateKey = process.env.GC_PRIVATE_KEY.replace(/\\n/g, "\n")
  const jwtClient = new google.auth.JWT(process.env.GC_CLIENT_EMAIL, null, privateKey, [
    "https://www.googleapis.com/auth/calendar",
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

async function getEvents(auth) {
  const calendar = google.calendar("v3")

  let events
  try {
    events = await calendar.events.list({
      auth,
      calendarId: GC_ID,
    }).then(resp => resp.data.items)

    for (let i = 0; i < events.length; i++) {
      const event = events[i]
      if (event.recurrence && event.recurrence.length > 0) {
        // eslint-disable-next-line
        const recurringEvents = await calendar.events.instances({
          auth,
          calendarId: GC_ID,
          eventId: event.id
        }).then(resp => resp.data.items)

        events = events.concat(recurringEvents)
      }
    }
  } catch (err) {
    console.error(err)
    return []
  }

  return events.filter(
    event => event.status === "confirmed"
  )
}

const uniqueEvents = new Set()

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const jwtClient = await authenticate()
  const events = await getEvents(jwtClient)

  events.forEach(event => {
    const { model, eventKey } = transformers.GoogleCalendarEvent(event)

    if (uniqueEvents.has(eventKey)) {
      return
    }

    uniqueEvents.add(eventKey)

    const nodeMeta = {
      id: createNodeId(`my-data-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: "Event",
        content: JSON.stringify(model),
        contentDigest: createContentDigest(model),
      },
    }

    const node = Object.assign({}, model, nodeMeta)
    createNode(node)
  })
}

let id = 0
exports.onCreateNode = ({
  actions,
  createContentDigest,
  createNodeId,
  node
}) => {
  const { deleteNode, createNode, createParentChildLink } = actions

  const otherEvents = ["MeetupEvent", "EventbriteEvents"]

  if (otherEvents.includes(node.internal.type)) {
    const { model, eventKey } = transformers[node.internal.type](node)

    if (uniqueEvents.has(eventKey)) {
      deleteNode({ node })
      return
    }

    uniqueEvents.add(eventKey)

    const nodeMeta = {
      id: createNodeId(`${node.id}-${++id}`),
      children: [],
      parent: node.id,
      internal: {
        content: JSON.stringify(model),
        contentDigest: createContentDigest(model),
        type: "Event",
      },
    }

    const newNode = Object.assign({}, model, nodeMeta)
    createNode(newNode)
    createParentChildLink({ parent: node, child: newNode })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("src/pages/event.js")

  return graphql(`
    query EVENTS {
      allEvent {
        edges {
          node {
            id
            title
            description
            url
            start
            end
            venue {
              name
              address
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      throw new Error(results.errors)
    }

    return results.data.allEvent.edges.map(({ node }) => {
      createPage({
        path: `/event/${node.id}`,
        component: template,
        context: { event: node },
      })
      return null
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: `${__dirname}/src/components`,
        Common: `${__dirname}/src/components/common`,
        Images: `${__dirname}/src/images`,
        Utils: `${__dirname}/src/utils`
      },
    },
  })
}
