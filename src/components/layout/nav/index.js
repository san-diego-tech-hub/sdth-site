import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'gatsby'
import sdthLogo from 'Images/sdth-logo.svg'
import { Container, Nav, Menu, Logo, DropItem } from './styles'
import MenuItem from './menu-item'
import Dropdown from './dropdown'
import AppContext from 'Utils/context'

const items = [
  { text: 'Community', url: '/community', icon: 'community' },
  { text: 'Education', url: '/education', icon: 'education' },
  { text: 'Inclusion', url: '/inclusion', icon: 'inclusion' },
  { text: 'Innovation', url: '/innovation', icon: 'innovation' },
  { text: 'Talent', url: '/talent', icon: 'talent' },
]

const Navigation = () => (
  <Nav>
    <Container>
      <Logo>
        <Link to="/">
          <img alt="San Diego Tech Hub" src={sdthLogo} />
        </Link>
      </Logo>
      <Menu>
        <MenuItem to="/about">
          About
        </MenuItem>
        <MenuItem to="/leadership">
          Team
        </MenuItem>
        <DropItem>
          <AppContext.Consumer>
            {({ path }) => {
              const active = items.find(i => i.url === path)
              const dropStyle = {
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                borderBottom: !active ? '1rem solid #5230B5' : '1rem solid #2ABBF4',
                fontWeight: !active ? '' : '700',
                paddingTop: '1rem',
              }

              return (
                <Dropdown items={items} style={dropStyle}>
                  <span>
                    PILLARS of EXCELLENCE <FontAwesomeIcon icon={'caret-down'} />
                  </span>
                </Dropdown>
              )
            }}
          </AppContext.Consumer>
        </DropItem>
        <MenuItem to="/get-involved">
          Get Involved
        </MenuItem>
        <MenuItem to="/events">
          Events
        </MenuItem>
      </Menu>
    </Container>
  </Nav>
)

export default Navigation
