import React from 'react'
import { Link } from 'gatsby'

import { StyledDetails } from './styles'
import truncateString from '../../utils/truncate'

function Details({ eventInfo, setEventInfo, ...position }) {
  React.useEffect(
    () => {
      const handler = e => {
        if (e.key === 'Escape') {
          setEventInfo(null)
        }
      }

      window.document.addEventListener('keyup', handler)
      return () => window.document.removeEventListener('keyup', handler)
    },
    [eventInfo.event.title]
  )

  return (
    <StyledDetails {...position}>
      <aside className="header">
        <div>{eventInfo.event.title}</div>
        <span>
          <button onClick={() => setEventInfo(null)}>
            &times;
          </button>
        </span>
      </aside>

      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: truncateString(eventInfo.event.description) }} />
        <Link style={{ fontSize: '1.2rem', whiteSpace: 'no' }} to="/">
          See more
        </Link>
      </div>
    </StyledDetails>
  )
}

export default Details
