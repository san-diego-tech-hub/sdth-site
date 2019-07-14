import React from "react"
import styled from "styled-components"

export default function ExternalLink({ children, ...props }) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  )
}

const Link = styled.a`
  color: ${props => props.color || props.theme.primaryDark};
  text-decoration: none;
  z-index: 0 !important;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
