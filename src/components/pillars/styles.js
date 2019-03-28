import styled from "styled-components"
import Color from "color"
import Html from "Common/Html"

export const Bio = styled(Html)`
  a {
    background: rgba(255,255,255,0.3);
    color: ${props => props.theme.primary};
    font-weight: bold;
    padding: 3px 5px;
    text-decoration: none;
    text-shadow: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const PillarInfo = styled.section`
  display: grid;
  grid-template-columns: 15rem 1fr;

  aside {
    font-size: 3.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.6rem;
  }

  h1 {
    font-size: 6.4rem;
    color: #4c4e7a;
  }

  @media (max-width: 768px) {
    grid-template-columns: 40% 1fr;
    h1 {
      font-size: 2.4rem;
    }
    aside {
      font-size: 1.6rem;
      padding: 0;
    }
  }

  @media(max-width: 450px) {
    margin: auto;
    padding: 2rem;
  }
`

export const PillarSection = styled.section`
  @media(max-width: 450px) {
    padding: 10px;
    text-align: center;
  }
`

export const LeadsSection = styled.section`
  background: ${props => props.color};
  border-radius: 0.5rem;
  border: 1px solid rgb(207, 207, 207);
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  text-shadow: 1px 1px 5px rgba(0,0,0,0.4);

  h2 {
    color: white;
    margin: 2rem 4rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: left;
  }

  .lead {
    color: white;
    display: grid;
    font-size: 2.4rem;
    grid-gap: 5rem;
    grid-template-columns: 20rem 1fr;
    line-height: 2.4rem;
    margin-bottom: 2.4rem;
    padding: 4rem 3rem;
    text-align: center;

    h5 {
      color: ${props => Color(props.color).darken(0.4).toString()};
      font-size: 1.6rem;
      text-align: left;
      text-shadow: 1px 1px 1px rgba(255,255,255,0.25);
      text-transform: uppercase;
    }

    .email {
      display: block;
      font-size: 1.6rem;
      white-space: nowrap;
    }
  }

  hr {
    background: rgba(0,0,0,0.08);
  }

  @media(max-width: 768px) {
    .lead {
      grid-template-columns: 1fr;
    }
  }

  @media(max-width: 450px) {
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    width: 100vw !important;
  }

`
