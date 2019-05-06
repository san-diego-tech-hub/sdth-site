import React from "react"
import styled from "styled-components"
import conduitsFlow from "Images/misc/conduits-flow.svg"
import { NAV_HEIGHT } from "Utils/constants"

const HomeTitle = ({ children }) => (
  <ConduitsFlow>
    <Img>
      {children}
    </Img>
    <WhiteCurve />
  </ConduitsFlow>
)

const ConduitsFlow = styled.div`
  background: linear-gradient(#5230B5, 70%, #814AC6);
  height: 100px;
  margin-top: ${NAV_HEIGHT};
  width: 100%;
`

const Img = styled.div`
  align-items: center;
  background-image: url(${conduitsFlow});
  background-size: cover;
  background-position-y: -17rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`

const WhiteCurve = styled.div`
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(255,255,255,0.5);
  height: 200px;
  margin: auto;
  margin-top: -50px;
  width: 120vw;
`

export default HomeTitle
