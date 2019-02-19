import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'

import Layout from 'Components/layout'
import SEO from 'Components/seo'
import Events from 'Components/events'
import Calendar from 'Components/calendar'

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
        <H1>Events</H1>
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
  max-width: 120rem;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const H1 = styled.div`
  background: linear-gradient(rgba(82,48,181,0.7), 70%, rgba(129,74,198,0.4));
  border-radius: 5px;
  font-size: 7rem;
  font-weight: normal;
  padding: 5rem;
  text-shadow: 2px 2px 10px ${props => props.theme.primaryDark};
  text-transform: uppercase;

  @media(max-width: 480px) {
    padding: 2rem;
  }
`

const PageTitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15rem;
  left: 0;
  right: 0;
`


export default EventIndex
