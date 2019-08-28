import React from "react"
import { Link } from "gatsby"
import sdthLogo from "Images/misc/sdth-logo.png"
import sdthLogoSmall from "Images/misc/circle-logo.svg"
import {
  Container,
  Logo,
  SmallLogo,
  Menu,
  Nav,
  Spacer
} from "./styles"
import Burger from "./burger"
import MenuItem from "./menu-item"
import Cta from "./Cta"
import PillarsDropDown from "./pillars-dropdown"

const Navigation = () => {
  const isBrowser = typeof window !== "undefined"
  const getScrollTop = () => {
    return isBrowser
      ? (document.documentElement.scrollTop || document.body.scrollTop)
      : 0
  }

  const [scrollTop, setScrollTop] = React.useState(getScrollTop())

  if (isBrowser) {
    window.onscroll = () => {
      setScrollTop(getScrollTop())
    }
  }

  const boxShadow = scrollTop > 100
    ? "box-shadow"
    : ""

  return (
    <Nav className={boxShadow}>
      <Burger />
      <Container>
        <SmallLogo>
          <Link to="/">
            <img alt="San Diego Tech Hub" src={sdthLogoSmall} />
          </Link>
        </SmallLogo>
        <Logo>
          <Link to="/">
            <img alt="San Diego Tech Hub" src={sdthLogo} />
          </Link>
        </Logo>
        <Spacer />
        <Menu>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/team">Team</MenuItem>

          <PillarsDropDown />

          <MenuItem to="/events">Events</MenuItem>
          <MenuItem to="/partners">Our Partners</MenuItem>
          <Cta to="/get-involved">Get Involved</Cta>
        </Menu>
      </Container>
    </Nav>
  )
}

export default Navigation
