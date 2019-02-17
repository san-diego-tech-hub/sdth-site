import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import urlencode from 'urlencode'
import styled from 'styled-components'

import truncateString from '../../utils/truncate'
import Modal from '../modal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-top: 5rem;
  @media(max-width: 768px) {
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

class EventsComponent extends React.Component {
  state = {
    showModal: false,
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  render() {
    const { events } = this.props
    const { showModal } = this.state

    return (
      <Container>
        {showModal && (
          <Modal close={this.toggleModal}>
            <form onSubmit={e => e.preventDefault()} method="post">
              <div>
                <label>Event Name</label>
                <input type="text" />
              </div>

              <div>
                <label>Description</label>
                <textarea>Limit 256...</textarea>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Modal>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={this.toggleModal}>Propose New Event</Button>
        </div>

        <Events>
          {events.map(event => {
            const start = new Date(event.start).toLocaleTimeString()
            const end = new Date(event.end).toLocaleTimeString()

            const mapLink = !event.venue.address
              ? 'No Location'
              : <a 
                  href={`${mapsUrl}${urlencode(event.venue.address)}`}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {event.venue.address}
                </a>

            // const allDay = start === end

            return (
              <Event key={event.id}>
                <Title>{event.title}</Title>

                <div>
                  <FontAwesomeIcon icon="clock" style={{ marginRight: '.8rem' }} />
                  {start} - {end}
                </div>
                <div>
                  <FontAwesomeIcon icon="map-marker" style={{ marginRight: '.8rem' }} />
                  {mapLink}
                </div>

                <div
                  title={event.description}
                  style={{ padding: '1.6rem 0', color: '#333' }}
                  dangerouslySetInnerHTML={{ __html: truncateString(event.description) || 'No description' }}
                />
              </Event>
            )
          })}
        </Events>
      </Container>
    )
  }
}

EventsComponent.propTypes = {
  events: PropTypes.array.isRequired,
}

export default EventsComponent
