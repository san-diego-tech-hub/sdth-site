import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import Calendar from '../components/calendar'

function EventIndex({ data, ...props }) {
  const events = data.allEvent.edges.map(({ node }) => ({
    ...node,
    start: moment(new Date(node.start))._d,
    end: moment(new Date(node.end))._d,
  }))

  const Container = styled.div`
    width: 83%;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  const eventFeedEvents = events.filter(event => event.start >= Date.now()).slice(0, 10)

  return (
    <Layout pageProps={props}>
      <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />

      <Container>
        <Calendar events={events} />
        <Events events={eventFeedEvents} />
      </Container>
    </Layout>
  )
}

EventIndex.propTypes = {
  data: PropTypes.shape({
    allEvent: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query EVENTS {
    allEvent(sort: { fields: [start], order: ASC }) {
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
`

export default EventIndex
