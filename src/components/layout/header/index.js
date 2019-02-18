import React from 'react'
import styled from 'styled-components'
import Nav from '../nav'
import conduitsFlow from '../../../images/conduits-flow.svg'

const Header = () => (
  <header>
    <Nav />
    <ConduitsFlow />
  </header>
)

const ConduitsFlow = styled.div`
  background-image: url(${conduitsFlow});
  background-size: cover;
  background-position-y: -15rem;
  margin-bottom: 20rem;
  padding: 10rem;
  text-align: center;

  @media (max-width: 667px) {
    padding: 0.5rem;
    img {
      margin: 0;
      width: 100vh;
    }
  }
`

export default Header
