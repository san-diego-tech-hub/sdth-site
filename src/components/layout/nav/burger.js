import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BurgerMenu from 'react-burger-menu/lib/menus/slide'
import './burger.css'

const Burger = (props) => (
  <BurgerMenu right>
    <MenuItem to="/about">
      About
    </MenuItem>
    <MenuItem to="/leadership">
      Team
    </MenuItem>

    <Pillars>
      PILLARS of EXCELLENCE <FontAwesomeIcon icon={'caret-down'} />
    </Pillars>
    <MenuItem indent firstPillar to="/community">
      Community
    </MenuItem>
    <MenuItem indent to="/education">
      Education
    </MenuItem>
    <MenuItem indent to="/inclusion">
      Inclusion
    </MenuItem>
    <MenuItem indent to="/innovation">
      Innovation
    </MenuItem>
    <MenuItem indent to="/talent">
      Talent
    </MenuItem>

    <MenuItem to="/get-involved">
      Get Involved
    </MenuItem>
    <MenuItem to="/events">
      Events
    </MenuItem>
  </BurgerMenu>
)

const MenuItem = styled(Link)`
  font-size: 2rem;
  margin: 3rem 0;
  margin-top: ${props => props.firstPillar ? '1rem' : '3rem'};
  margin-left: ${props => props.indent ? '3rem' : '0'};
  text-transform: uppercase;
`

const Pillars = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0; 

`

export default Burger
