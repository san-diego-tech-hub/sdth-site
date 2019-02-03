import React from 'react'
import PropTypes from 'prop-types'

const Events = ({ events }) => (
  <section>
    <button>Propose New Event</button>
    {events.map(({ node }) => (
      <aside
        key={node.id}
        style={{ marginTop: '1.6rem', border: '1px solid black', padding: '1.6rem' }}
      >
        <h2>{node.summary}</h2>

        <p>{node.location}</p>

        <div dangerouslySetInnerHTML={{ __html: node.description || 'No description' }} />
      </aside>
    ))}
  </section>
)

Events.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Events
