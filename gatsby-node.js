const { google } = require('googleapis')
const path = require('path')
const transformers = require('./src/data/transformers')

const { GC_ID } = process.env

function authenticate() {
  const privateKey = process.env.GC_PRIVATE_KEY.replace(/\\n/g, '\n')
  const jwtClient = new google.auth.JWT(process.env.GC_CLIENT_EMAIL, null, privateKey, [
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

const uniqueEvents = new Set()

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const jwtClient = await authenticate()
  const data = await getEvents(jwtClient)

  data.items.forEach(event => {
    // console.log(event.attachments);
    const { model, eventKey } = transformers['GoogleCalendarEvent'](event)

    if (uniqueEvents.has(eventKey)) {
      return
    }

    uniqueEvents.add(eventKey)

    const nodeMeta = {
      id: createNodeId(`my-data-${event.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Event',
        content: JSON.stringify(model),
        contentDigest: createContentDigest(model),
      },
    }

    const node = Object.assign({}, model, nodeMeta)
    createNode(node)
  })

  return
}

let id = 0
exports.onCreateNode = ({
  actions,
  createContentDigest,
  createNodeId,
  node 
}) => {
  const { deleteNode, createNode, createParentChildLink } = actions

  const otherEvents = ['MeetupEvent', 'EventbriteEvents']

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
        type: 'Event',
      },
    }

    const newNode = Object.assign({}, model, nodeMeta)
    createNode(newNode)
    createParentChildLink({ parent: node, child: newNode })
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
            url
            start
            end
            venue {
              name
              address
              latitude
              longitude
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
    })
  })
}
