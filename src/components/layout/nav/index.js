import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Nav, Menu } from './styles'
import MenuItem from './menu-item'
import Dropdown from './dropdown'
import AppContext from '../../../utils/context'

const items = [
  { text: 'Community', url: '/community', icon: 'community' },
  { text: 'Education', url: '/education', icon: 'education' },
  { text: 'Inclusion', url: '/inclusion', icon: 'inclusion' },
  { text: 'Innovation', url: '/innovation', icon: 'innovation' },
  { text: 'Talent', url: '/talent', icon: 'talent' },
]

const Navigation = () => (
  <Nav>
    <Menu>
      <li>
        <MenuItem to="/">Home</MenuItem>
      </li>
      <li>
        <MenuItem to="/about">About San Diego Tech Hub</MenuItem>
      </li>
      <li>
        <MenuItem to="/leadership">Leadership Team</MenuItem>
      </li>
      <li>
        <AppContext.Consumer>
          {({ path }) => {
            const active = items.find(i => i.url === path)
            const dropStyle = {
              borderBottom: !active ? '' : '.5rem solid #2ABBF4',
              fontWeight: !active ? '' : '700',
              paddingBottom: !active ? '' : '1rem',
            }

            return (
              <Dropdown items={items} style={dropStyle}>
                <span>
                  Pillars Of Excellence <FontAwesomeIcon icon={'caret-down'} />
                </span>
              </Dropdown>
            )
          }}
        </AppContext.Consumer>
      </li>
      <li>
        <MenuItem to="/get-involved">Get Involved</MenuItem>
      </li>
    </Menu>
  </Nav>
)

export default Navigation
