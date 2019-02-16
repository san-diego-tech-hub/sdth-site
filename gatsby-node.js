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
    const end = moment(new Date(event.end.dateTime))._d
    const eventKey = `${event.summary}-${start}`

    if (uniqueEvents.has(eventKey)) {
      return
    }

    uniqueEvents.add(eventKey)

    event.start = start
    event.end = end
    event.title = event.summary
    delete event.summary

    const nodeMeta = {
      id: createNodeId(`my-data-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Event',
        content: JSON.stringify(event),
        contentDigest: createContentDigest(event),
      },
    }

    const node = Object.assign({}, event, nodeMeta)
    createNode(node)
  })

  return
}

let id = 0
exports.onCreateNode = ({
  actions,
  createContentDigest,
  createNodeId,
  node,
}) => {
  const { deleteNode, createNode, createParentChildLink } = actions

  if (node.internal.type === 'MeetupEvent') {
    const start = moment(new Date(node.time))._d
    const end = moment(new Date(node.time + node.duration))._d
    const eventKey = `${node.name}-${start}`

    if (uniqueEvents.has(eventKey)) {
      deleteNode({ node })
    } else {
      uniqueEvents.add(eventKey)

      const newJson = {
        title: node.name,
        description: node.description,
        start,
        end,
      }
      const newNode = {
        ...newJson,
        id: createNodeId(`${node.id}-${++id}`),
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(newJson),
          type: 'Event',
        },
      }
      createNode(newNode)
      createParentChildLink({ parent: node, child: newNode })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('src/pages/event.js')

  return graphql(`
    query EVENTS {
      allEvent {
        edges {
          node {
            id
            title
            description
            start
            end
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
    })
  })
}
