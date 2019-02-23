import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import StayConnected from '../forms/stay-connected'
import Header from './header'
import Footer from './footer'
import AppContext from 'Utils/context'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faSlack,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Wrapper, theme } from './styles'

library.add(faLinkedin, faFacebookSquare, faTwitterSquare, faSlack, faCaretDown, faMapMarker, faClock)

const Layout = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    <AppContext.Provider value={{ path: pageProps.location.pathname }}>
      <div style={{maxWidth: '100vw', overflowX: 'hidden'}}>
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
