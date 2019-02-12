import styled from 'styled-components'
import { Link } from 'gatsby'

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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  h4 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
  @media (max-width: 5000px) {
    grid-gap: 15rem;
    justify-content: center;
  }
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

export const PillarIcon = styled(Link)`
  background: ${props => props.background};
  line-height: 2rem;
  border-radius: 1rem;
  height: 30rem;
  overflow: hidden;
  color: white;
  margin: auto;
  padding: 3rem;
  text-align: center;
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr 1fr;
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
    grid-template-rows: 2fr 1fr;
    div {
      align-self: flex-end;
    }
  }
`
