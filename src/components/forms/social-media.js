import React from 'react'

import ExternalLink from 'Common/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => (
  <aside style={{ textAlign: 'center', padding: '1rem', marginTop: '1rem' }}>
    <h4 style={{ fontSize: '1.4rem' }}>Like and follow San Diego Tech Hub</h4>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '75%', margin: 'auto' }}>
      <ExternalLink href="https://www.linkedin.com/company/san-diego-tech-hub/">
        <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} color="#0077B5" />
      </ExternalLink>
      <ExternalLink href="https://www.facebook.com/SanDiegoTechHub/">
        <FontAwesomeIcon size="2x" icon={['fab', 'facebook-square']} color="#3b5998" />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/SanDiegoTechHub">
        <FontAwesomeIcon size="2x" icon={['fab', 'twitter-square']} color="#00a1f8" />
      </ExternalLink>
    </div>
  </aside>
)

export default SocialMedia
