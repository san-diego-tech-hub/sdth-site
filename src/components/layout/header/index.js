import React from 'react'
import { Link } from 'gatsby'

import sdthLogo from '../../../images/sdth-logo.svg'
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
  </header>
)

export default Header
