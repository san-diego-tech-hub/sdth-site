import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import urlencode from 'urlencode'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Link } from 'gatsby'
import moment from 'moment'

import truncateString from '../../utils/truncate'
import ProposeEvent from '../forms/propose-event'

Modal.setAppElement('#modal')

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const Button = styled.button`
  background: ${props => props.theme.mainPurple};
  border: 1px solid #2abbf4;
  border-radius: 0.5rem;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const Events = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  border: 5px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 635px;
  margin-top: 1.6rem;
  padding: 5px;
  overflow-y: scroll;

  a {
    text-decoration: none;
    color: ${props => props.theme.mainPurple};
  }

  @media (max-width: 375px) {
    width: 100vw;
  }
`

const Event = styled.aside`
  background: white;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 2.4rem;
  text-align: left;
`

const Title = styled.h3`
  color: ${props => props.theme.mainPurple};
  margin-bottom: 7px;
  font-size: 2rem;
`

const mapsUrl = `https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=`

function EventsComponent({ events }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <Container>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} style={styles}>
        <ProposeEvent afterSubmit={closeModal} />
      </Modal>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => setModalOpen(true)}>Propose New Event</Button>
      </div>

      <Events>
        {events.map(event => {
          const start = moment(event.start).format('MMM D, Y @ h:mma');

          const mapLink = !event.venue.address 
            ? 'No Location'
            : (
              <a
                href={`${mapsUrl}${urlencode(event.venue.address)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {event.venue.address}
              </a>
          )

          return (
            <Event key={event.id}>
              <Link to={`/event/${event.id}`}>
                <Title>{event.title}</Title>
              </Link>

              <div>
                <FontAwesomeIcon icon="clock" style={{ marginRight: '.8rem' }} />
                {start}
              </div>
              <div>
                <FontAwesomeIcon icon="map-marker" style={{ marginRight: '.8rem' }} />
                {mapLink}
              </div>

              <div
                title={event.description}
                style={{ padding: '1.6rem 0', color: '#333' }}
                dangerouslySetInnerHTML={{
                  __html: truncateString(event.description) || 'No description',
                }}
              />
            </Event>
          )
        })}
      </Events>
    </Container>
  )
}

EventsComponent.propTypes = {
  events: PropTypes.array.isRequired,
}

export default EventsComponent
