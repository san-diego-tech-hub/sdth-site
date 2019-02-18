import React from 'react'
import styled from 'styled-components'
import Nav from '../nav'
import conduitsFlow from 'Images/conduits-flow.svg'

const Header = () => (
  <header>
    <Nav />
    <ConduitsFlow>
      <Img />
      <WhiteCurve />
    </ConduitsFlow>
  </header>
)

const WhiteCurve = styled.div`
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(255,255,255,0.5);
  height: 200px;
  margin-top: -50px;
  margin-left: -10vw;
  width: 120vw;
`

const Img = styled.div`
  background-image: url(${conduitsFlow});
  background-size: cover;
  background-position-y: -13rem;
  padding: 10rem;
  height: 100%;
`

const ConduitsFlow = styled.div`
  background: linear-gradient(#5230B5, 70%, #814AC6);
  height: 350px;
  margin-bottom: 7rem;
  width: 100vw;
`

export default Header
