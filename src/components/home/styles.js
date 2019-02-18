import styled from 'styled-components'
import { Link } from 'gatsby'

export const WhatIsSDTH = styled.div`
  // background: linear-gradient(#5230B5, 70%, #814AC6);
  background: linear-gradient(rgba(82,48,181,0.7), 70%, rgba(129,74,198,0.4));
  border-radius: 5px;
  color: white;
  left: 10rem;
  padding: 4rem;
  position: absolute;
  top: 12rem;
  width: 570px; 
`

export const ThreeStep = styled.section`
  background: rgb(240, 240, 240);
  text-align: center;
  padding: 3.2rem 20rem;
  margin: 0 !important;
  h3 {
    font-size: 3.2rem;
    margin-top: 1.6rem;
    color: ${props => props.theme.mainPurple};
    font-weight: normal;
  }
  aside {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    margin: auto;
  }

  .description {
    font-size: 1.6rem;
    text-align: center;
  }
  @media (max-width: 667px) {
    text-align: center;
    padding: 3.2rem 0;
    padding: 1.6rem;
    .description {
      padding: 0;
    }
  }
  @media (max-width: 990px) {
    width: 100% !important;
    aside {
      grid-template-columns: 1fr;
    }
  }
`

export const CollabIcon = styled.div`
  position: relative;
  text-align: center;
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  margin: auto;
  padding: 2rem;
`

export const PillarRow = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
  h4 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
`

export const PillarIcon = styled(Link)`
  background: ${props => props.background};
  border-radius: 1rem;
  color: white;
  height: 30rem;
  width: 23rem;
  line-height: 2rem;
  margin: 0.5rem;
  overflow: hidden;
  padding: 3rem;
  text-align: center;
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 27rem;
  &:hover, &:focus {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translate(-2px, -2px);
  }

  p {
    padding-bottom: 1rem;
    min-height: 300px;
  }
  @media (max-width: 990px) {
    padding: 1.5rem;
    div {
      align-self: flex-end;
    }
  }
`
