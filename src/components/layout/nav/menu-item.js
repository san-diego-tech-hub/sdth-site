import React from 'react'
import { Link } from 'gatsby'

import { Inner } from './styles'

const MenuItem = ({ children, ...options }) => (
  <Link
    {...options}
    activeStyle={{
      fontWeight: '700',
      borderBottom: '.5rem solid #2ABBF4',
    }}
  >
    <Inner>{children}</Inner>
  </Link>
)

export default MenuItem
