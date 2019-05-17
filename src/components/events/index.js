import React from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import styled from "styled-components"
import urlencode from "urlencode"
import Color from "color"
import truncateString from "Utils/truncate"
import { MAPS_URL } from "Utils/constants"
import ProposeEvent from "Components/forms/propose-event"
import ExternalLink from "Common/ExternalLink"
import Html from "Common/Html"

Modal.setAppElement("#___gatsby")

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    maxHeight: "100vh",
    maxWidth: "100vw",
    overflowX: "hidden",
    overflowY: "auto"
  },
  content: {
    top: "calc(60rem + 5%)",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginBottom: "10%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
}

function EventsComponent({ events }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <Container>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} style={styles}>
        <ProposeEvent closeModal={closeModal} />
      </Modal>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setModalOpen(true)}>Propose New Event</Button>
      </div>

      <Events>
        {events.map(event => {
          const start = moment(event.start).format("MMM D, Y @ h:mma")

          const mapLink = !event.venue.address ? (
            "No Location"
          ) : (
            <ExternalLink href={`${MAPS_URL}${urlencode(event.venue.address)}`}>
              {event.venue.address}
            </ExternalLink>
          )

          return (
            <Event key={event.id}>
              <Link to={`/event/${event.id}`}>
                <Title>{event.title}</Title>
              </Link>

              <div>
                <FontAwesomeIcon icon="clock" style={{ marginRight: ".8rem" }} />
                {start}
              </div>
              <div>
                <FontAwesomeIcon icon="map-marker" style={{ marginRight: ".8rem" }} />
                {mapLink}
              </div>

              <Html
                title={event.description}
                style={{ padding: "1.6rem 0", color: "#333" }}
              >
                {truncateString(event.description || "No description")}
              </Html>
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

const Button = styled.button`
  background: #5833b6;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  width: 100%;
  &:hover, &:focus {
    background: ${props => Color(props.theme.lightPurple).lighten(0.1).toString()};
    border: 2px solid #3e1575;
    cursor: pointer;
  }

  @media (max-width: 1235px) {
    margin-top: 2rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 2rem;
  width: 500px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const Events = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  border: 5px solid #f5f5f5;
  border-bottom: 10px solid #f5f5f5;
  border-top: 10px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 635px;
  margin-top: 1.6rem;
  padding: 5px;
  overflow-y: scroll;

  a {
    text-decoration: none;
    color: ${props => props.theme.primaryDark};
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
  color: ${props => props.theme.primaryMuted};
  margin-bottom: 7px;
  font-size: 2rem;
  &:hover, &:focus {
    color: ${props => Color(props.theme.primaryMuted).lighten(0.3).toString()};
  }
`

export default EventsComponent
