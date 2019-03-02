import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import AppContext from "Utils/context"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown, faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faSlack,
} from "@fortawesome/free-brands-svg-icons"
import Footer from "./footer"
import Header from "./header"
import StayConnected from "../forms/stay-connected"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Wrapper, theme } from "./styles"
import "./layout.css"

library.add(
  faCaretDown,
  faClock,
  faFacebookSquare,
  faLinkedin,
  faMapMarker,
  faSlack,
  faTwitterSquare
)

const Layout = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    <AppContext.Provider value={{ path: pageProps.location.pathname }}>
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <Header />

        <Wrapper>{children}</Wrapper>
        <StayConnected />

        <Footer />
      </div>
    </AppContext.Provider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default Layout
