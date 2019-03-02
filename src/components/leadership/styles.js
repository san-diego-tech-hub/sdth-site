import styled from "styled-components"
import Color from "color"

export const AvatarCard = styled.div`
  border-radius: 100%;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  margin: auto;
  width: 200px;
  img {
    border-radius: 100%;
  }
`
export const Blurb = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 3rem;
`

export const Card = styled.div`
  background: ${props => props.color};
  border-radius: 0.5rem;
  border: 1px solid rgb(207, 207, 207);
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  max-width: 500px;
  margin: 1rem;

  .card-header {
    text-align: center;
    color: white;
    margin-top: 1rem;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.4);
    div,
    p {
      font-size: 3rem;
      line-height: 2.4rem;
    }
  }
  .card-text {
    font-size: 1.6rem !important;
    line-height: 3rem;
    padding: 1.6rem;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;

    div,
    p {
      color: white;
      display: block;
      font-size: 1.4rem;
      text-transform: none;
    }
  }

  @media (max-width: 990px) {
    width: 100% !important;
    .card-text {
      padding: 2.5rem 5rem;
    }
  }

  @media(max-width: 600px) {
    margin: 1rem 0;
  }

  @media(max-width: 450px) {
    .card-text {
      padding: 2.5rem 0.5rem;
    }
  }
`

export const Header = styled.section`
  @media(max-width: 990px) {
    padding-top: 0 !important;
    text-align: center;
  }
`

export const Label = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 42px;
  padding: 0.2rem 1.5rem 1rem 0.2rem;
  min-width: 120px;
  width: fit-content;

  font-size: 1.4rem;
  color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  text-transform: capitalize;
  margin-top: 1rem;

  img {
    margin: 1rem 0 0 0;
  }
`
export const PillarLeaders = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3.2rem auto 0;
  max-width: 1600px;
  div,
  p {
    margin-top: 1.6rem !important;
  }
  // @media(max-width: 900px) {
  //   margin: 3.2rem 0 0;
  // }
`

export const TeamSection = styled.section`
  margin: 2rem 0 10rem 0 !important;
  width: 100vw !important;
  @media(max-width: 600px) {
    padding: 0 !important;
    margin: 0;
  }
`

export const Why = styled.div`
  color: ${props => Color(props.color).darken(0.2).toString()} !important;
  font-weight: bold;
  padding: 0.1rem 3rem;
  text-transform: uppercase !important;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.25);
`
