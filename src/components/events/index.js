import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import truncateString from '../../utils/truncate'
import Modal from '../modal'

const Button = styled.button`
  padding: 1rem;
  background: #f25aa3;
  color: white;
  border: 1px solid #2abbf4;
  border-radius: 0.5rem;
`

const Events = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 1.6rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.mainPurple};
  }
  @media (max-width: 375px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`

const Event = styled.aside`
  padding: 2.4rem;
  border: 1px solid #555;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 2px #555;
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
      <section>
        <h2>Events</h2>

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

            // const allDay = start === end

            return (
              <Event key={event.id}>
                <h2 style={{ fontSize: '2rem' }}>{event.title}</h2>

                <div>
                  <FontAwesomeIcon icon="clock" style={{ marginRight: '.8rem' }} />
                  {start} - {end}
                </div>
                <div>
                  <FontAwesomeIcon icon="map-marker" style={{ marginRight: '.8rem' }} />
                  {(event.location && <a href={`${mapsUrl}${event.location}`}>{event.location}</a>) ||
                    'No location'}
                </div>

                <div
                  title={event.description}
                  style={{ padding: '1.6rem 0', color: 'black' }}
                  dangerouslySetInnerHTML={{ __html: truncateString(event.description) || 'No description' }}
                />
              </Event>
            )
          })}
        </Events>
      </section>
    )
  }
}

EventsComponent.propTypes = {
  events: PropTypes.array.isRequired,
}

export default EventsComponent
