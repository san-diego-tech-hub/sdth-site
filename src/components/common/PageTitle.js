import React from "react"
import styled from "styled-components"
import conduitsFlow from "Images/misc/conduits-flow.svg"
import { NAV_HEIGHT } from "Utils/constants"

const PageTitle = ({ children, ...props }) => (
  <ConduitsFlow>
    <Img>
      <H1 {...props}>
        {children}
      </H1>
    </Img>
    <WhiteCurve />
  </ConduitsFlow>
)

const ConduitsFlow = styled.div`
  background: linear-gradient(#5230B5, 70%, #814AC6);
  height: 200px;
  margin-top: ${NAV_HEIGHT};
  width: 100%;

  @media(max-width: 450px) {
    height: 130px;
  }
`

const H1 = styled.div`
  color: white;
  background: linear-gradient(rgba(82,48,181,0.7), 70%, rgba(129,74,198,0.4));
  border-radius: 5px;
  font-size: 5rem;
  font-weight: normal;
  margin-bottom: -4rem;
  max-width: 100%;
  padding: 4rem 8rem;
  text-align: center;
  text-shadow: 5px 5px 10px ${props => props.theme.primaryDark};
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 650px) {
    padding: 4rem 0;
    width: 100vw;
  }

  @media (max-width: 450px) {
    font-size: 3.3rem;
    margin-bottom: 2.5rem;
    padding: 1rem;
  }
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
  padding: 10rem;
  width: 100vw;

  @media (max-width: 900px) {
    background-position-y: -5rem;
    padding: 10rem 0;
  }
`

const WhiteCurve = styled.div`
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(255,255,255,0.5);
  height: 200px;
  margin-left: -10vw;
  margin-top: -50px;
  width: 120vw;

  @media(max-width: 450px) {
    margin-left: -25vw;
    margin-top: -120px;
    width: 150vw;
  }
`

export default PageTitle
