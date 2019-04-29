import React from "react"
import { Link } from "gatsby"
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

  a {
    background: ${props => props.theme.greenDark};
    border-bottom: 1rem solid transparent;
    border-radius: 5px;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.2);

    &:hover, &:focus-within {
      background: ${props => props.theme.green};
    }
  }

  a.active {
    font-weight: 700;
    border-bottom: 1rem solid #2ABBF4;
    box-shadow: none;

    &:hover, &:focus-within {
      background: ${props => props.theme.greenDark};
      cursor: default;
    }
  }
`

export default MenuItem
