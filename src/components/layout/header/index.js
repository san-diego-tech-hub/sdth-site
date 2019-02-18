import React from 'react'
import { Link } from 'gatsby'

import sdthLogo from 'Images/sdth-logo.svg'
import Nav from '../nav'
import { ConduitsFlow, Logo } from './styles'

const Header = () => (
  <header>
    <ConduitsFlow>
      <Logo>
        <Link to="/">
          <img alt="San Diego Tech Hub" src={sdthLogo} />
        </Link>
      </Logo>
    </ConduitsFlow>

    <Nav />
  </header>
)

export default Header
