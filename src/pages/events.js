import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'

import Layout from 'Components/layout'
import SEO from 'Components/seo'
import Events from 'Components/events'
import Calendar from 'Components/calendar'
import PageTitle from 'Common/PageTitle'

function EventIndex({ data, ...props }) {
  const events = data.allEvent.edges.map(({ node }) => ({
    ...node,
    start: moment(new Date(node.start))._d,
    end: moment(new Date(node.end))._d,
  }))

  const eventFeedEvents = events.filter(event => event.start >= Date.now()).slice(0, 10)

  return (
    <Layout pageProps={props}>
      <SEO title="Events" keywords={['san diego', 'tech', 'hub', 'events', 'upcoming']} />

      <PageTitle>
        Events
      </PageTitle>
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

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export default EventIndex
