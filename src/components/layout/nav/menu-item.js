import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuItem = ({ children, ...props }) => (
  <Li>
    <Link
      {...props}
      style={{
        alignItems: "center",
        borderBottom: "1rem solid #5230B5",
        display: "flex",
        height: "100%",
        padding: "1rem 1rem 0",
        textTransform: "uppercase"
      }}
      activeStyle={{
        fontWeight: "700",
        borderBottom: "1rem solid #2ABBF4",
      }}
    >
      {children}
    </Link>
  </Li>
)

const Li = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100%;
`

export default MenuItem
