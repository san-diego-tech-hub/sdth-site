import React from "react"
import { Link } from "gatsby"
import Color from "color"
import styled from "styled-components"

const MenuItem = ({ children, ...props }) => (
  <Li>
    <Link
      {...props}
      style={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
        padding: "1rem 1rem 0",
        textTransform: "uppercase"
      }}
      activeClassName="active"
    >
      {children}
    </Link>
  </Li>
)

const Li = styled.li`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  height: 100%;

  &:hover {
    background: ${Color("#5230B5").lighten(0.2).toString()};
  }

  a {
    borderBottom: "1rem solid transparent",
  }

  a.active {
    font-weight: 700;
    border-bottom: 1rem solid #2ABBF4;

    &:hover {
      background: #5230B5;
      cursor: default;
    }
  }
`

export default MenuItem
