import React from 'react'
import styled from 'styled-components'

export default function ExternalLink({ children, ...props }) {
  return (
    <Link
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </Link>
  )
}

const Link = styled.a`
  color: ${props => props.theme.primaryDark};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
