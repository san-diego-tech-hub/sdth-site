const { google } = require('googleapis')

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

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const jwtClient = await authenticate()
  const data = await getEvents(jwtClient)

  data.items.forEach(event => {
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
