import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import AppContext from "Utils/context"
import { ToastContainer } from "react-toastify"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown, faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faSlack,
} from "@fortawesome/free-brands-svg-icons"
import Footer from "./footer"
import Nav from "./nav"
import StayConnected from "../forms/stay-connected"
import { Wrapper, theme } from "./styles"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./layout.css"
import "react-toastify/dist/ReactToastify.min.css"

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
        <ToastContainer autoClose={6000} />
        <Nav />

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
